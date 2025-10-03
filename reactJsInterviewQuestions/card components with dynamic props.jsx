// Props allow dynamic rendering of content in reusable components.

function card({title,image,description}){
    return (
        <div style={{border:"1px solid gray", padding: "10px"}}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <h2>{description}</h2>
        </div>

    );
}

<card title="React" image="https://via.placeholder.com/150" description="Learn react"/>