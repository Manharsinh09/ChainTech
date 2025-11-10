import { useRef } from "react"
import { userExsit, validateLogin } from "../utils/methods";
import { useNavigation } from "react-router";

export const Login = () =>{

    const email = useRef();
    const password = useRef();
    const navigate = useNavigation();

    const handleSubmit = (event) =>{
        event.preventDefault()

        if(validateLogin(email.current.value,password.current.value)){
            alert("Login Sucsesfuly");
        }
        else{
            alert("Enter Valid Data");
        }
        console.log(email.current.value, password.current.value);
    }
    return(
        
        <div className="login-container center">
            <div className="login-form ">
                <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" ref={email} />

                <label htmlFor="password">Password</label>
                <input type="text" name="password" ref={password} />
                
                <input className="submitbtn" type="submit" value="Login" />
                <p>Don't have an account</p> <a href="/signup">Singup</a>
            </form>
 
            </div>
        </div>
    )
}