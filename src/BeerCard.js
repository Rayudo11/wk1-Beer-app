import React, { useState } from "react";





function BeerCard(props) {

    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        props.clickLike(props.index)
        setLiked(!liked)
    }

    return (
      
        <li style={{ backgroundColor: "lightgray", padding: "30px 10px 10px 10px",margin: "10px 90px 0px 100px",height: "500px", width: "900px",border: "solid 2px black",listStyle: "none"}}>
         <img style={{ marginLeft: "30px",height: "200px" }} src={props.image_url}></img>
         <h3>{props.name} <span style={{color: "red"}}>{props.first_brewed}</span></h3>
         <h4><span style={{color: "blue"}}>{props.abv}    </span>{props.description}</h4>
         {!liked && <button 
         id="like-button"
         onClick={()=> {handleLike()}}
         
         >Like Beer</button>}
         {liked && <button 
         id="like-button"
         onClick={()=> {handleLike()}}
         
         >Unlike Beer</button>}
        </li>
        
    )
}

export default BeerCard

