import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

function App() {
  const APP_ID = "41f4dbd8";
  const APP_KEY = "568806e6a9c57e04b85bbc72fdce3d55";

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");

  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value) 
  }

  const getSearch = e => { 
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }


  return (
    <div className="App">
      <form onSubmit = {getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button " typ e="submit">
          Go!
        </button>
      </form>
      <div className="recipes">
        {recipes!='' ? (recipes.map((recipe, index) => (
        <Recipe
          
          key={index}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
        />
      ))) : "NO RESULTS!" }
      
      </div>
    </div>
  );
}

export default App;
