import React, { Component } from "react";
import request from 'superagent'
import CockTailListDisplay from './CockTailListDisplay'


export default class CockTailList extends Component{

    state = {
        cocktailList: null,
        letter: ''
    }

    getList = (letter) => {
        request
            .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
            .then(res => this.updateState(res.body.drinks))
    }

    updateState = (cocktails) => {
        this.setState({
            cocktailList: cocktails
        })
    }

    onChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    onSubmit = () => {
        this.getList(this.state.letter)
    }

    render(){
        console.log(this.state.cocktailList)
        
        return(
            <div>
                <h1>CockTailList</h1>
                <div>
                    <label name='letter'>
                    List Cocktails by Letter
                    <input name='letter' onChange={this.onChange}/>
                    </label>
                </div>
                <button onClick={this.onSubmit}>Submit</button>  
                <CockTailListDisplay cocktails={this.state.cocktailList}/>  
            </div>
        )
    }


}