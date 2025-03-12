import { useState } from "react";

export default function Main() {

    const [ingredients, setIngredients] = useState([]);

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient");
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }

    const ingredientsListItems = ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>));

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
                {ingredientsListItems.length > 0 && <h2 className="ingredients--header">Ingrediënts on hand:</h2>}
                <ul className="ingredients-list">
                    {ingredientsListItems}
                </ul>
            </section>
        </main>
    )
}