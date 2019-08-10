import React, { Component } from 'react'
import request from 'superagent'
import RandomCockTailDisplay from './RandomCockTailDisplay';

export default class RandomCockTail extends Component {

    state = {
        cocktail: null,
    }

    componentDidMount = () => {
        request
            .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            .then(res => this.updateState(res.body.drinks))
    }

    updateState = (selectedCocktails) => {
        this.setState({
            cocktail: selectedCocktails
        })
    }

    render() {
        return (
            <div>
                <RandomCockTailDisplay cocktail={this.state.cocktail}/>
            </div>
        )
    }
}
