import ChefClaude from "./chef-claude/ChefClaude.jsx";
import './index.css'

function App() {
    /**
     * Challenge: grab the employment status from the form and log it
     * to the console. (Remember to select one of the radios before submitting)
     *
     * Note: This won't work the way you might expect quite yet!
     */

    function signUp(formData) {
        const email = formData.get("email")
        const password = formData.get("password")
        const radio = formData.get("employmentStatus")
        console.log(formData);
        console.log(radio)
    }

    return (
        <section>
            <h1>Signup form</h1>
            <form action={signUp}>

                <label htmlFor="email">Email:</label>
                <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

                <label htmlFor="password">Password:</label>
                <input id="password" defaultValue="password123" type="password" name="password" />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" defaultValue="This is a description"></textarea>

                <fieldset>
                    <legend>Employment Status:</legend>
                    <label>
                        <input type="radio" value={"unemployed"} name="employmentStatus" />
                        Unemployed
                    </label>
                    <label>
                        <input type="radio" value={"part-time"} name="employmentStatus" />
                        Part-time
                    </label>
                    <label>
                        <input type="radio" value={"full-time"} name="employmentStatus" />
                        Full-time
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Dietary restrictions</legend>
                    <label>
                        <input type="checkbox" value={"kosher"} name="dietaryRestrictions" />
                        Kosher
                    </label>
                    <label>
                        <input type="checkbox" value={"vegan"} name="dietaryRestrictions" />
                        Vegan
                    </label>
                    <label>
                        <input type="checkbox" value={"gluten"} name="dietaryRestrictions" />
                        Gluten-free
                    </label>
                </fieldset>

                <button>Submit</button>

            </form>
        </section>
    )
}
export default App