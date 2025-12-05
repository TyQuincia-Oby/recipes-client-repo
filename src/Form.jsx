export function RecipeForm({addRecipe}){
    return(
        <>
            <form onSubmit={addRecipe}>
                <h2>Add a New Recipe</h2>

                <label>
                    Recipe Name:
                    <input type="text" name="recipeName" required />
                </label>
                
                <label>
                    Ingredients:
                    <input type="text" name="ingredients" required />
                </label>

                <label>
                    Directions:
                    <input type="text" name="directions" required />
                </label>

                <button type="submit">Add Recipe</button>
            </form>
        </>
    )
}