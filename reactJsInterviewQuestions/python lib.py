from pydantic import BaseModel

class User(BaseModel):
    name: str
    age: int

# Example input
data = {"name": "Riya", "age": "22"}

# user = User(**data)
# print(user)
# name='Riya' age=22

# name='Riya' age=22


