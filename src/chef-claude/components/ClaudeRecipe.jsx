import Markdown from 'react-markdown'
import styles from '../ChefClaude.module.css'

export default function ClaudeRecipe({recipe}) {
    return (
        <section className={`${styles.section} ${styles.suggestedRecipeContainer}`} aria-live="polite">
            <h2>Chef Claude says:</h2>
            <Markdown>{recipe}</Markdown>
        </section>
    )
}