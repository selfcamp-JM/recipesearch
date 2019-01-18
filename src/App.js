import React, { Component } from 'react';
//import Recipe from "./Components/Recipe"
import './App.css';
import { recipes } from "./tempList";
import ResipeList from "./Components/RecipeList";
import ResipeDetail from "./Components/RecipeDetail";

class App extends Component {
  
  state = {
    recipes:recipes,
    url: "https://www.food2fork.com/api/search?key=22a6fa0baf1623e0c82b712c76df706b",

  }
  // async getRecipes() {
  //   try{
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  
  //     this.setState({
  //       recipes:jsonData.recipes
  //     })

  //   }catch(error){ 
  //     console.log(error);
  //   }}

  //   componentDidMount(){
  //     this.getRecipes();
  //   }
  
  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment >
        <ResipeList recipes = {this.state.recipes}/>
        <ResipeDetail />

      </React.Fragment>
    );
  }
}

export default App;
