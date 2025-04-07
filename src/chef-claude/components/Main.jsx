import { useEffect, useRef, useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList.jsx";
import getRecipeFromMistral from "../scripts/ai.js";
import styles from "../ChefClaude.module.css";

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState('');

    const recipeSection = useRef(null);

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient");
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    };

    async function generateRecipe() {
        const newRecipe = await getRecipeFromMistral(ingredients);
        setRecipe(newRecipe);
    }

    useEffect(() => {
        if (recipe && recipeSection.current) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [recipe]);

    return (
        <main className={styles.main}>
            <section className={`${styles.section} ${styles.ingredients}`}>
                <form action={addIngredient} className={styles.ingredientsForm}>
                    <input
                        name={"ingredient"}
                        type={"text"}
                        placeholder={"Oregano etc."}
                        aria-label="input ingredient"
                    />
                    <button type={"submit"} aria-label="Add ingredient to list">
                        Add Ingredient
                    </button>
                </form>
            </section>
            <IngredientsList ref={recipeSection} ingredients={ingredients} generateRecipe={generateRecipe} />
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}
