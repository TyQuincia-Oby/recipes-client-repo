import { useState, useEffect } from 'react'
import bookCover  from './assets/recipebookcover.png'
import './App.css'

function App() {
  const [recipes, setRecipes] = useState([]);
  

  useEffect(() => {
    async function fetchRecipes(){
      const result = await fetch("http://localhost:3000/recipes");
      const data = await result.json();
      setRecipes(data);
    }
    fetchRecipes();
  }, []);

  if (recipes.length===0){
    return <div> Loading...</div>;
  }

  return (
    <>
      <div className='cover-wrap'>
        <div className='row'>
          <div className="col">
             <img src={bookCover} className="cover" alt="book cover" />
          </div>      
          <div className="col">
            <div className='recipe-display'>
            {recipes.map((recipe) =>(
              <div key={recipe.id}>
              <h1>{recipe.recipe_name}</h1>
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Directions: {recipe.directions}</p>
            </div>
          ))}
           </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
