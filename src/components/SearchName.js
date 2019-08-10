import React, { Component } from "react";
import request from 'superagent'
import SearchNameDisplay from './SearchNameDisplay'


export default class SearchName extends Component{

    state = {
        cocktail: null,
        name: ''
    }

    getList = (name) => {
        request
            .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
            .then(res => this.updateState(res.body.drinks))
    }

    updateState = (name) => {
        this.setState({
            cocktail: name,
        })
    }

    onChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

    onSubmit = () => {
        this.getList(this.state.name)
    }

    render(){
        console.log(this.state.cocktail)
        
        return(
            <div>
                <h1>CockTailList</h1>
                <div>
                    <label name='name'>
                    Search Cocktails by Name<br/>
                    <input name='name' onChange={this.onChange}/>
                    </label>
                </div>
                <button onClick={this.onSubmit}>Submit</button>  
                <SearchNameDisplay cocktails={this.state.cocktail}/>  
            </div>
        )
    }
}