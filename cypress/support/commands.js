import basePage from "../pages/basePage"

Cypress.Commands.add('loginForm', (username, password) => {
    if (username === "" && password === "") {
        basePage.loginButton.click();
    } else if (username === "") {
        basePage.inputPassword.clear().type(password);
        basePage.loginButton.click();
    } else if (password === "") {
        basePage.inputUsername.clear().type(username);
        basePage.loginButton.click();
    }
    else {
        basePage.inputUsername.clear().type(username);
        basePage.inputPassword.clear().type(password);
        basePage.loginButton.click();
    }
});