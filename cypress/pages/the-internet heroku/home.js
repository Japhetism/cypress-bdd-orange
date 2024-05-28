class Home {
    // locate H1 heading
    getH1Heading() {
        return cy.get("h1");
    }

    // locate anchor tag
    getAnchorTag() {
        return cy.get("a");
    }

    // locate email input tag
    getEmailInputTag() {
        return cy.get("input[type='email']");
    }

    // locate submit input tag
    getSubmitInputTag() {
        return cy.get("input[type='submit']")
    }

    // locate span tag
    getSpanTag(className) {
        return cy.get(`span.${className}`);
    }

    // locate select tag
    getSelectTag() {
        return cy.get("select");
    }

    // get url
    getUrl() {
        return cy.url();
    }

    validatePage(expectedText) {
        this.getH1Heading().should("have.text", expectedText);
    }

    clickOnLink(linkName) {
        this.getAnchorTag().each(($link) => {
            const linkText = $link.text();
            if (linkText === linkName) {
                cy.wrap($link).invoke("removeAttr", "target").click();
            }
        });
    }

    setEmailAddress(email) {
        this.getEmailInputTag().type(email);
    }

    selectLanguage(language) {
        this.getSelectTag().select(language);
    }

    clickOnButton() {
        this.getSubmitInputTag().click();
    }

    validateUrl(expectedUrl) {
        this.getUrl().should("eq", expectedUrl);
    }

    validateErrorMessage(errorMessage) {
        this.getSpanTag("error").should("have.text", errorMessage);
    }    
}

export default Home;