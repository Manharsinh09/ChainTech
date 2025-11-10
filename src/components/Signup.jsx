import { useRef } from "react";
import { signupUser, userExsit } from "../utils/methods";

export const Signup =() =>{

    const name = useRef();
    const email = useRef();
    const password = useRef();
    const handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(name.current.value, email.current.value, password.current.value);
        if (userExsit(email.current.value)){
            console.log("user alrady exsits");
            alert("User already exists with this email");
            event.target.reset();
        }
        else{
            signupUser(name.current.value, email.current.value, password.current.value);
            console.log("singup");
        }
    }
    return(
        <div className="login-container center">
            <div className="login-form ">
                <h1>Sign In</h1>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" ref={name} />

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" ref={email} />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" ref={password} />
                    
                    <input className="submitbtn" type="submit" value="Signup" />

                    <p>Alrady have account</p> <a href="/login">Login</a>
                </form>
            </div>
        </div>
    )
}