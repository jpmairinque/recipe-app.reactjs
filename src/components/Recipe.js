import React from 'react'

const Recipe = ({title,calories, image, ingredients}) => {
    return (
        <div className="singlerecipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredient)=>(<li>{ingredient.text}</li>))}
            </ol>
            <p>Total calories: {calories}</p>
            <img src={image} alt="" />
        </div>
    )
}

export default Recipe
