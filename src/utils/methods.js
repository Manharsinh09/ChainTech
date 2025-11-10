
let userdata = JSON.parse(localStorage.getItem('userdata') )  || [];

//Signup fuction
export const signupUser = (name, email, password) => {
    userdata.push({name,email,password})
    localStorage.setItem('userdata',JSON.stringify(userdata));
    console.log("User signed up:", { name, email, password });
}

//Check user alrady exsit or not
export const userExsit = (email) =>{   
    if(userdata.find((user) => user.email === email)){
        return true;
    }
    return false;
}

// User login validation
export const validateLogin = (email, password) =>{
    if(userdata.find((user) => user.email===email && user.password===password)) return true;
    else return false;
}