import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CocktailCategoryDetailsDisplay extends Component {

    renderList = (cocktail) => {
        return <li key={cocktail.strDrink}>
            <Link to={ `/cocktails/${cocktail.idDrink}`}>{cocktail.strDrink}</Link>
        </li>
    }

    render() {
        if (!this.props.categoryList) return 'Loading'
        console.log('did props arrive', this.props.categoryList)
        return (
            <div>
                {this.props.categoryList.map(this.renderList)} 
            </div>
        )
    }
}
