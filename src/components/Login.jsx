import { useRef } from "react"
import { userExsit, validateLogin } from "../utils/methods";
import { useNavigate } from "react-router";
import { userAuth } from "../context/UserContext";
export const Login = () =>{

    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const {setUser} = userAuth();

    const handleSubmit = (event) =>{
        event.preventDefault()
        const user = validateLogin(email.current.value, password.current.value);
        
        if(user!==null){
            alert("Login Sucsesfuly");
            setUser(user);
            navigate("/");
        }
        else{
            alert("Enter Valid Data");
        }
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