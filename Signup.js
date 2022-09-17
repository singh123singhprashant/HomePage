import React from "react"
import "./signup.css";



const Signup = () => {
    return(
        <div className="signup">
            <h1 className="title">Instagram</h1>
            <form>
                <label for="name">Name:</label><br/>
                <input type="text" id="name" name="name" /><br/>
                <label for="email">Email:</label><br/>
                <input type="email" id="email" name="email"/><br/>
                <label for="password">Password:</label><br/>
                <input type="password" id="password" name="password"/><br/>
                <label for="passwordConfirm">Password Confirmation:</label><br/>
                <input type="password" id="passwordConfirm" name="passwordConfirm"/><br/>
                <p>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                <input className="submit" type="submit" value="Signup"/><br/><br/>
                <span className="link">$$ 2022 Instagram from Meta $$</span>
            </form>
        </div>
    )
}
export default Signup;