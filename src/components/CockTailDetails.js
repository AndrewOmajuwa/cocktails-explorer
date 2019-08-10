import React, { Component } from 'react'
import request from 'superagent'
import CockTailDetailsDisplay from './CockTailDetailsDisplay'

export default class CockTailDetails extends Component {

    state = {
        cocktailDetails: null
    }

    updateState = (details) => {
        this.setState({
            cocktailDetails: details
        })
    }

    getDetails = (CocktailId) => {
        request
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${CocktailId}`)
        .then(res => this.updateState(res.body.drinks))
    }

    componentDidMount = () => {
        const cocktailId = this.props.match.params.cocktail 
        this.getDetails(cocktailId)
    }

    render() {
        console.log('Can i use the details', this.state.cocktailDetails)
        return (
            <div>
                <CockTailDetailsDisplay details={this.state.cocktailDetails}/>
            </div>
        )
    }
}
