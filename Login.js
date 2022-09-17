import React from "react"
import "./login.css";


const Login = () => {
    return(
        <div className="login">
            <h1 className="login-title">Instagram</h1>
            <form>
                <label for="username">Username</label><br/>
                <input type="text" name="username" id="username" value=""/><br/>
                <label for="password">Password</label><br/>
                <input type="password" name="password" id="password" value=""/><br/>
                <button type='submit' className='submit'>Sign In</button>
                <br/>
                <span>$$ 2022 Instagram from Meta $$</span>
            
            </form>
        </div>
    )
}
export default Login;