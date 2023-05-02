class Login {
    
    // locate user name field element
    getUsername() {
        return cy.get("input[placeholder='Username']");
    }

    // locate password field element
    getPassword() {
        return cy.get("input[placeholder='Password']");
    }

    // locate login button element
    getLoginBtn() {
        return cy.get("button[type='submit']");
    }
    // locate user name
    getUserDropdownName() {
        return cy.get('.oxd-userdropdown-name');
    }

    // set value for username field
    setUsername(username) {
        this.getUsername().type(username);
    }

    // set value for password field
    setPassword(password) {
        this.getPassword().type(password);
    }

    // confirm username field have the expected value
    validateUsername(username) {
        this.getUsername().should("have.value", username);
    }

    // confirm password field have the expected value
    validatePassword(password) {
        this.getPassword().should("have.value", password);
    }

    // click on login button
    clickLoginBtn() {
        this.getLoginBtn().click();
    }

    // confirm user is successfully login by verifying the user name
    validateUserLogin(expectedName) {
        this.getUserDropdownName().then( (x) => {
            let actualName =  x.text()
            expect(actualName).to.equal(expectedName)
        })
    }

    // confirm user is on the login screen using url
    validateLoginScreen() {
        cy.url().should('include', 'orangehrmlive.com')  
            .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .should('contain', 'orangehrmlive')
    }
}

export default Login;