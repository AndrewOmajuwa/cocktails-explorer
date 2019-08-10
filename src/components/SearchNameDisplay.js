import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SearchNameDisplay extends Component {
    renderList = (cocktail) => {
        return <li key={cocktail.strDrink}>
            <Link to={ `/cocktails/${cocktail.idDrink}`}>{cocktail.strDrink}</Link>
        </li>
    }

    render() {
             
        if(!this.props.cocktails) return null
        return (
            <div>
                {this.props.cocktails.map(this.renderList)}  
            </div>
        )
    }
}
