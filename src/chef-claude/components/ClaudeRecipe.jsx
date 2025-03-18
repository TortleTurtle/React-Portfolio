import Markdown from 'react-markdown'

export default function ClaudeRecipe({recipe}) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chef Claude says:</h2>
            <Markdown>{recipe}</Markdown>
        </section>
    )
}