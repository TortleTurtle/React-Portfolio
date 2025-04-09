import { InferenceClient } from '@huggingface/inference'

const fallbackResponse = "## FALLBACK RESPONSE\n" +
    "Sure, I'd be happy to help! Here's a recipe idea for a [Chicken and Vegetable Tagine with Lentils](https://www.bbcgoodfood.com/recipes/chicken-lentil-tagine), which uses oregano, chicken, lemons, lentils, and ras el hanout from the list of ingredients you provided.\n" +
    "\n" +
    "### Chicken and Vegetable Tagine with Lentils\n" +
    "\n" +
    "**Prep Time:** 20 minutes\n" +
    "\n" +
    "**Cook Time:** 1 hour\n" +
    "\n" +
    "**Total Time:** 1 hour 20 minutes\n" +
    "\n" +
    "**Servings:** 4-6\n" +
    "\n" +
    "#### Ingredients\n" +
    "\n" +
    "* 2 tbsp olive oil\n" +
    "* 4 chicken breasts, skin on\n" +
    "* 1 onion, chopped\n" +
    "* 2 cloves garlic, crushed\n" +
    "* 2 tsp ras el hanout\n" +
    "* 1 tsp dried oregano\n" +
    "* 1 aubergine, diced\n" +
    "* 1 courgette, diced\n" +
    "* 400g can chopped tomatoes\n" +
    "* 800ml chicken stock\n" +
    "* 200g green or brown lentils\n" +
    "* 1 lemon, sliced\n" +
    "* Salt and pepper, to taste\n" +
    "* Fresh herbs (cilantro or parsley), chopped (optional)\n" +
    "\n" +
    "#### Instructions\n" +
    "\n" +
    "1. Heat the olive oil in a large, deep saucepan or Dutch oven over medium-high heat. Add the chicken breasts, skin-side down, and cook until golden brown, about 4-5 minutes per side. Remove the chicken from the pan and set aside on a plate.\n" +
    "2. In the same pan, add the chopped onion and cook over medium heat until softened, about 5 minutes. Add the crushed garlic, ras el hanout, and dried oregano, and cook for another minute until fragrant.\n" +
    "3. Add the diced aubergine and courgette to the pan and stir to combine with the onion and spices. Cook for about 5 minutes until the vegetables start to soften.\n" +
    "4. Add the chopped tomatoes, chicken stock, and lentils to the pan. Stir to combine, then add the sliced lemon. Nestle the chicken breasts into the mixture, skin-side up.\n" +
    "5. Bring the mixture to a boil, then reduce the heat to low, cover, and simmer for about 40-45 minutes, or until the chicken is cooked through and the lentils are tender. Season with salt and pepper to taste.\n" +
    "6. Serve the tagine hot, garnished with fresh herbs if desired.\n" +
    "\n" +
    "Enjoy your meal!"

export default async function getRecipeFromMistral(ingredientsArr) {
    const SYSTEM_PROMPT = `
    You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
    `

    const hf = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN);
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        console.log(response.choices[0].message.content);
        return response.choices[0].message.content
    } catch (err) {
        if (!import.meta.env.VITE_HF_ACCESS_TOKEN) {
            console.error("Missing required environment variable VITE_HF_ACCESS_TOKEN");
        } else {
            console.error(err.message)
        }
        console.warn("Using fallback response");
        return fallbackResponse;
    }
}