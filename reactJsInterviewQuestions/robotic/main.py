# main.py

from typing import List, Tuple
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

# --- Pydantic Data Models ---

# 1. Model for a single coordinate in the path
class Coordinate(BaseModel):
    """Represents a (row, column) coordinate on the grid."""
    row: int = Field(..., ge=0, description="The row index (Y-coordinate).")
    col: int = Field(..., ge=0, description="The column index (X-coordinate).")

# 2. Model for the input map data
class MapInput(BaseModel):
    """The input payload containing the grid and robot start position."""
    # The map: A list of lists of integers.
    # 0 = Empty Space (Cleanable)
    # 1 = Obstacle (Uncleanable)
    # Other numbers can be used for different types of terrain if needed.
    grid: List[List[int]] = Field(..., description="The map as a 2D list of integers.")
    
    start_position: Coordinate = Field(..., description="The robot's starting (row, col) position.")

# 3. Model for the output waypoints (the calculated path)
class PathOutput(BaseModel):
    """The result containing the robot's calculated cleaning path."""
    waypoints: List[Coordinate] = Field(..., description="An ordered list of coordinates the robot should visit.")
    cleaned_count: int = Field(..., description="The total number of cells cleaned.")
    
    # You could also add 'status: str' to indicate success/failure/partial cleaning
    
    
    
    # main.py (Continued)

def calculate_boustrophedon_path(grid: List[List[int]], start_pos: Coordinate) -> Tuple[List[Coordinate], int]:
    """
    Calculates a simple Boustrophedon (S-curve) path for the robot.
    
    This is a simplified algorithm that starts at the given position and 
    cleans row by row, alternating direction.
    """
    path: List[Coordinate] = []
    cleaned_cells = 0
    
    num_rows = len(grid)
    if num_rows == 0:
        return path, 0
    num_cols = len(grid[0])

    # 1. Simple Validation (check if start_pos is valid and not an obstacle)
    if not (0 <= start_pos.row < num_rows and 0 <= start_pos.col < num_cols):
        # In a real app, this should be handled before calling the function, 
        # but a quick check is good.
        return path, 0

    if grid[start_pos.row][start_pos.col] == 1:
        # Robot starts on an obstacle, can't clean
        return path, 0

    # 2. Start by adding the initial position
    # The path should start from the robot's current position to the first cleaning spot
    
    # 3. Path Generation (S-Curve)
    # Loop through each row
    for r in range(num_rows):
        
        # Alternate direction: Even rows (0, 2, 4...) go left-to-right
        if r % 2 == 0:
            cols = range(num_cols)
        # Odd rows (1, 3, 5...) go right-to-left
        else:
            cols = range(num_cols - 1, -1, -1)
        
        for c in cols:
            # The value '1' represents an obstacle (uncleanable)
            if grid[r][c] == 0:
                # '0' represents an empty, cleanable cell
                
                # Check if this cell is not the one we just added (to avoid duplicates)
                current_coord = Coordinate(row=r, col=c)
                if not path or path[-1] != current_coord:
                    path.append(current_coord)
                    cleaned_cells += 1

    return path, cleaned_cells




# main.py (Continued)

# --- FastAPI Application Instance ---
app = FastAPI(
    title="Robot Path Planning API",
    description="Backend service for calculating cleaning paths on a 2D grid map."
)

@app.post(
    "/calculate-path",
    response_model=PathOutput,
    tags=["Robotics"]
)
async def calculate_path(map_input: MapInput):
    """
    Receives a grid map and a start position, and returns the optimal 
    Boustrophedon cleaning path (waypoints).
    """
    grid = map_input.grid
    start_pos = map_input.start_position
    
    # Basic Map Sanity Check
    if not grid or len(grid[0]) == 0:
        raise HTTPException(
            status_code=400, 
            detail="The provided grid map is empty."
        )

    # 1. Calculate the path
    waypoints, cleaned_count = calculate_boustrophedon_path(grid, start_pos)
    
    # 2. Handle the starting position and path (Logic refinement)
    # The current path starts at the first cleanable cell.
    # We should ensure the path includes the actual start_position if it's cleanable.
    
    final_path = waypoints
    # A more advanced path would link the start_pos to the first waypoint 
    # if it's not the same, but for simplicity, we use the generated path.

    if not final_path:
        return PathOutput(waypoints=[], cleaned_count=0)
    
    return PathOutput(
        waypoints=final_path,
        cleaned_count=cleaned_count
    )