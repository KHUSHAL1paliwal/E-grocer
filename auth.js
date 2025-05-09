document.addEventListener("DOMContentLoaded", () => {
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    const navUl = document.querySelector("header nav ul#nav-list");

    if (!navUl) {
        console.error("Navigation list not found");
        return;
    }

    // Clear any existing auth-related links to avoid duplicates
    const authLinks = navUl.querySelectorAll("li.auth-link");
    authLinks.forEach(link => link.remove());

    if (loggedIn) {
        // Add a Logout link
        const logoutLi = document.createElement("li");
        logoutLi.className = "auth-link";
        logoutLi.innerHTML = '<a href="#" onclick="logout()" class="text-lg hover:text-gray-200">Logout</a>';
        navUl.appendChild(logoutLi);
    } else {
        // Add Login and Register links
        const loginLi = document.createElement("li");
        loginLi.className = "auth-link";
        loginLi.innerHTML = '<a href="login.html" class="text-lg hover:text-gray-200">Login</a>';
        const registerLi = document.createElement("li");
        registerLi.className = "auth-link";
        registerLi.innerHTML = '<a href="register.html" class="text-lg hover:text-gray-200">Register</a>';
        navUl.appendChild(loginLi);
        navUl.appendChild(registerLi);
    }
});

function logout() {
  console.log("Logging out");
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("registeredUser");
  console.log("Redirecting to index.html");
  window.location.href = "index.html";
}