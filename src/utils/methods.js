
let userdata = JSON.parse(localStorage.getItem('userdata') )  || [];

//Signup fuction
export const signupUser = (name, email, password) => {
    userdata.push({name,email,password})
    localStorage.setItem('userdata',JSON.stringify(userdata));
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
    return userdata.find(
        (user) => user.email === email && user.password === password
    ) || null;
//   return user ? user.name : null;

}

export const updateUser = (email, newData) => {
    const userIndex = userdata.findIndex((user) => user.email === email);
    if (userIndex !== -1) {
        userdata[userIndex] = { ...userdata[userIndex], ...newData };
        localStorage.setItem('userdata', JSON.stringify(userdata));
        return true;
    }

}