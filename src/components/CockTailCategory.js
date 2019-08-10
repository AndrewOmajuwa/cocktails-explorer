import React, { Component } from "react";
import { Link } from 'react-router-dom'
import request from "superagent";

export default class CockTailCategories extends Component {
  state = {
    CocktailCategories: null
  };

  updateState = listOfCocktailCategories => {
    this.setState({
      CocktailCategories: listOfCocktailCategories
    });
  };

  renderCategory(cat) {
    return <li key={cat}>
              <Link to={`/cocktail-categories/${cat}`}>{cat}</Link>
           </li>
  }

  componentDidMount() {
    request
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then(res => this.updateState(Object.values(res.body.drinks).map(cat => cat.strCategory)))
      .catch(console.error);
  }

  render() {
      console.log(this.state.CocktailCategories)
    if(!this.state.CocktailCategories) return null
    return (
      <div>
        <h1>CocktailCategories</h1>
        <ul>
        {this.state.CocktailCategories.map(this.renderCategory
            )}     
        </ul>
      </div>
    );
  }
}
