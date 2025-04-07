import styles from '../ChefClaude.module.css'

export default function IngredientsList({ ref, ingredients, generateRecipe }) {
    const ingredientsListItems = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));

    return (
        <section className={styles.section}>
            {ingredients.length > 0 ? (
                <h2 className={styles.ingredientsHeader}>Ingrediënts on hand:</h2>
            ) : (
                <h2 className={styles.ingredientsHeader}>Get started by adding ingredients</h2>
            )}
            {ingredients.length > 0 && (
                <ul className={styles.ingredientsList}>{ingredientsListItems}</ul>
            )}
            {ingredients.length > 3 && (
                <div ref={ref} className={styles.generateRecipe}>
                    <div className={styles.generateRecipeText}>
                        <h2>Ready for a recipe?</h2>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button
                        className={styles.generateRecipeButton}
                        onClick={generateRecipe}
                    >
                        Get a recipe
                    </button>
                </div>
            )}
        </section>
    );
}
