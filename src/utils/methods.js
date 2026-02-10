
const DATA_KEY = 'userdata';
const SESSION_KEY = 'currentUser';

// Helper to get all users
const getUsers = () => JSON.parse(localStorage.getItem(DATA_KEY)) || [];

// Helper to save all users
const saveUsers = (users) => localStorage.setItem(DATA_KEY, JSON.stringify(users));

export const signupUser = (name, email, password) => {
    if (!name || !email || !password) {
        return { success: false, message: "All fields are required." };
    }

    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { success: false, message: "Invalid email format." };
    }

    const users = getUsers();
    if (users.find(u => u.email === email)) {
        return { success: false, message: "User already exists." };
    }

    users.push({ name, email, password });
    saveUsers(users);
    return { success: true, message: "Signup successful." };
}

export const validateLogin = (email, password) => {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        // Return user without password for session
        const { password, ...safeUser } = user;
        return safeUser;
    }
    return null;
}

export const updateUser = (email, newData) => {
    const users = getUsers();
    const index = users.findIndex(u => u.email === email);
    if (index !== -1) {
        users[index] = { ...users[index], ...newData };
        saveUsers(users);

        // Update session if it's the current user
        const currentUser = getSession();
        if (currentUser && currentUser.email === email) {
            const { password, ...safeUser } = users[index];
            setSession(safeUser);
        }
        return true;
    }
    return false;
}

// Session Management
export const setSession = (user) => {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export const getSession = () => {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
}

export const clearSession = () => {
    localStorage.removeItem(SESSION_KEY);
}

export const userExsit = (email) => {
    const users = getUsers();
    return !!users.find(u => u.email === email);
}