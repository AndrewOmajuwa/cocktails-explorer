import React, { Component } from 'react'
import request from 'superagent'
import CocktailCategoryDetailsDisplay from './CocktailCategoryDetailsDisplay';

export default class CocktailCategoryDetails extends Component {

    state = {
        cocktailList: null
    }

    getList = (category) => {
        request
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res => this.updateState(res.body.drinks))
    }

    updateState = (list) => {
        this.setState({
            cocktailList: list
        })
    }

    componentDidMount = () => {
        const category = this.props.match.params.category 
        this.getList(category)
    }

    render() {
        console.log('categroy', this.state.cocktailList)
        return (
            <div>
                <CocktailCategoryDetailsDisplay categoryList={this.state.cocktailList}/>
            </div>
        )
    }
}
