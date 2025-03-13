import { useState } from "react";
import Recipe from "../Recipe.jsx";

export default function Main() {

    const [ingredients, setIngredients] = useState(["Red Lentils", "Garam Masala", "Rice", "Naan"]);
    const [recipe, setRecipe] = useState(false);

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient");
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }

    const ingredientsListItems = ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>));
    const listIsShown = ingredientsListItems.length > 0;

    return (
        <main>
            <section className="ingredients">
                <form action={addIngredient} className="ingredients--form">
                    <input name={"ingredient"}
                           type={"text"}
                           placeholder={"Oregano etc."}
                           aria-label="input ingredient"/>
                    <button
                        type={"submit"}
                        aria-label="Add ingredient to list">Add Ingredient</button>
                </form>
                {listIsShown ?
                    <h2 className="ingredients--header">Ingrediënts on hand:</h2> :
                    <h2 className="ingredients--header">Get started by adding ingredients</h2> }
                {listIsShown && <ul className="ingredients-list">{ingredientsListItems}</ul>}
            </section>
            {ingredientsListItems.length > 3 && <section>
                <div className="generateRecipe">
                    <div className="generateRecipe--text">
                        <h2>Ready for a recipe?</h2>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className="generateRecipe--button"
                            onClick={() => setRecipe(recipe => !recipe)}>
                        Get a recipe
                    </button>
                </div>
            </section>}
            {recipe && <Recipe/>}
        </main>
    )
}