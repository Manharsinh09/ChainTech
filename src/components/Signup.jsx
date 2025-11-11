import { useRef } from "react";
import { signupUser, userExsit } from "../utils/methods";
import { useNavigate } from "react-router";
import { userAuth } from "../context/UserContext";
export const Signup =() =>{

    const navigate = useNavigate ();
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const {setUser} = userAuth();

    const handleSubmit = (event) =>{
        event.preventDefault();
        if (userExsit(email.current.value)){
            alert("User already exists with this email");
            event.target.reset();
        }
        else{
            signupUser(name.current.value, email.current.value, password.current.value);
            alert("Signup successful! Please login.");
            setUser({
                name: name.current.value,
                email: email.current.value,
                password: password.current.value
            });
            navigate("/");
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