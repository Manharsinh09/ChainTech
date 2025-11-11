# React User Management System

A simple User Management System built with React, featuring login, user updates, and context-based global state management.
use React Context API for authentication and user data handling without external libraries.

🚀 Features

✅ User Authentication
* Login validation using stored user data.
* Global user state managed with React Context.
* Redirects to protected pages after successful login.

✅ User Update Page
* Allows updating name, email, and password.
* Updates are reflected immediately across the app via Context.
* Changes are saved in localStorage for persistence.

✅ Persistent Login
* User stays logged in even after page refresh (optional setup).

✅ Routing
* Uses React Router for page navigation (/login, /update, /home).

🧰 Tech Stack
* React 18+
* React Router DOM
* Context API
* LocalStorage API
* Vite (for fast dev environment)

