import { useNavigate } from "react-router";
import { userAuth } from "../context/UserContext"

export const Home = () =>{
    const navigate = useNavigate();
    const {user,setUser} = userAuth();
    return(
        <div className="main-container">
            <div className="main-header center">
                <h2> {user ? `Welcome, ${user.name || user}` : "Welcome, Guest!"}</h2>
            </div>

            <div className="container center">
                {user ? (
                    <div>
                        <p>This is your personalized dashboard.</p>
                        <button onClick={()=>navigate("update")}>Update</button>
                        <button onClick={()=>setUser(null)}>logout</button>
                    </div>
                ) : (
                    <div>
                        <p>Please log in to access your dashboard.</p>
                        <button onClick={()=> navigate("login")}>Login</button>
                    </div>
                )}
            </div>
        </div>
    )
}