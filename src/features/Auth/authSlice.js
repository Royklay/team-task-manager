

export function registerUser(username, email, password) {

    let users = JSON.parse(localStorage.getItem("users")) || [];

    
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return "User already exists";
    }

    const newUser = {
        username,
        email,
        password
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    return "Registration successful";
}



export function loginUser(email, password) {

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
        user => user.email === email && user.password === password
    );

    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        return true;
    }

    return false;
}


export function logoutUser() {

    localStorage.removeItem("loggedInUser");

}


export function getCurrentUser() {

    return JSON.parse(localStorage.getItem("loggedInUser"));

}
