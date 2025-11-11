import { useRef } from "react";
import { userAuth } from "../context/UserContext";
import { updateUser } from "../utils/methods";
import { useNavigate } from "react-router";

export const Update = () => {

    const navigate = useNavigate();
    const {user} = userAuth();
    const name = useRef();
    const email = useRef();
    const password = useRef();


    const handleSubmit = (event) =>{
        event.preventDefault();
        updateUser(email.current.value, {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value
        });
        alert("User updated successfully !");
        navigate("/");
    }

    return(
        <div className="login-container center">
            <div className="login-form ">
                <h1>Update</h1>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" defaultValue={user.name} name="name" ref={name} />

                    <label htmlFor="email">Email</label>
                    <input type="text" defaultValue={user.email} name="email" ref={email} />

                    <label htmlFor="password">Password</label>
                    <input type="password" defaultValue={user.password} name="password" ref={password} />
                    
                    <input className="submitbtn" type="submit" value="Update" />
                </form>
            </div>
        </div>
    )
}