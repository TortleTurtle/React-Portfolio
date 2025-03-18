export default function IngredientsList({ingredients, generateRecipe}) {

    const ingredientsListItems = ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>));

    return (
        <section>
            {ingredients.length > 0 ?
                    <h2 className="ingredients--header">Ingrediënts on hand:</h2> :
                    <h2 className="ingredients--header">Get started by adding ingredients</h2> }
            {ingredients.length && <ul className="ingredients-list">{ingredientsListItems}</ul>}
            {ingredients.length > 3 &&
                <div className="generateRecipe">
                    <div className="generateRecipe--text">
                        <h2>Ready for a recipe?</h2>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className="generateRecipe--button"
                            onClick={() => generateRecipe()}>
                        Get a recipe
                    </button>
                </div>
            }
        </section>
    )
}