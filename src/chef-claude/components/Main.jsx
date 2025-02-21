import { useState } from "react";

export default function Main() {

    const ingredients = ["Oregano", "Chicken", "Spaghetti", "Tomato"];

    const addIngredient = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient");
        ingredients.push(newIngredient);
    }

    const ingredientsListItems = ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>));

    return (
        <main>
            <section className="ingredients">
                <form onSubmit={addIngredient} className="ingredients--form">
                    <input name={"ingredient"}
                           type={"text"}
                           placeholder={"Oregano etc."}
                           aria-label="input ingredient"/>
                    <button
                        type={"submit"}
                        aria-label="Add ingredient to list">Add Ingredient</button>
                </form>
                <h2 className="ingredients--header">Ingrediënts on hand:</h2>
                <ul className="ingredients-list">
                    {ingredientsListItems}
                </ul>
            </section>
        </main>
    )
}