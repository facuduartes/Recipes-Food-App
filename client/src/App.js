import React from "react";
import LandingPage from './components/LandigPage/landingPage'
import Home from './components/Home/homeConteiner';
import {Route} from 'react-router-dom'
import {NavBar} from './components/NavBar/navConteiner'
import Recipe from "./components/RecipeDetails/recipeConteiner";
import CreateRecipe from "./components/CreateRecipe/createRecipe"; 

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={LandingPage} />
      <Route path='/home'  component={NavBar}/>
      <Route path='/home' component={ Home } />
     <Route  path='/recipes/:id' component={Recipe}/>
      <Route path='/create' component={CreateRecipe}/>
    </React.Fragment>
  );
}


export default App;
