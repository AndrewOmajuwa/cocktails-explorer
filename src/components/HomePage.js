import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <p>Welcome to <strong color=''><h1>The Supplier's</h1></strong> Cocktail Explorer</p>
                <Link to='/search-cocktail' >Search for Cocktail By Name</Link> <br/>
                <Link to='/search' >List Cocktails By letter</Link> <br/>
                <Link to='/cocktail-categories' >List Cocktail By Categories</Link> <br/>
                <Link to='/random-cocktail' >Get a Random Cocktail</Link> <br/>
            </div>
        )
    }
}
