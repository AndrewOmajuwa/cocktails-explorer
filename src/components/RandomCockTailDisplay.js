import React, { Component } from 'react'

export default class RandomCockTailDisplay extends Component {
    render() {
        console.log(this.props.cocktail)
        if(!this.props.cocktail) return 'loading'
        return (
            <div>
                {this.props.cocktail.map(cocktail => (
                <div>
                    <h1>{cocktail.strDrink}</h1>
                    <img alt={cocktail.strDrink} src={cocktail.strDrinkThumb}/>
                <p>Category: {cocktail.strCategory}</p>
                <p>Ingredients: <br/>
                {cocktail.strIngredient1} &nbsp;&nbsp;&nbsp;&nbsp; {cocktail.strMeasure1}<br/>
                {cocktail.strIngredient2} &nbsp;&nbsp;&nbsp;&nbsp; {cocktail.strMeasure2}<br/>
                {cocktail.strIngredient3} &nbsp;&nbsp;&nbsp;&nbsp; {cocktail.strMeasure3}<br/>
                {cocktail.strIngredient4} &nbsp;&nbsp;&nbsp;&nbsp; {cocktail.strMeasure4}<br/>
                {cocktail.strIngredient5} &nbsp;&nbsp;&nbsp;&nbsp; {cocktail.strMeasure5}<br/>
                {cocktail.strIngredient6} &nbsp;&nbsp;&nbsp;&nbsp; {cocktail.strMeasure6}<br/>
                {cocktail.strIngredient7} &nbsp;&nbsp;&nbsp;&nbsp; {cocktail.strMeasure7}<br/>
                Instructions:<br/> {cocktail.strInstructions}</p>
                </div>
                ))}
            </div>
        )
    }
}
