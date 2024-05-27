/// <reference types="cypress" />

const { Given, When, Then, Before } = require("@badeball/cypress-cucumber-preprocessor");

Given("I visit {string}", (url) => {
    cy.visit(url);
});

Then("I should be on {string} page", (text) => {
    cy.get("h1.heading").should("have.text", text);
});

When("I click on {string} link", (linkName) => {
    cy.contains("a", linkName).invoke("removeAttr", "target").click({ force: true });
});

Then("I should be redirected to {string} Page", (text) => {
    cy.get("h1.hero__title").should("have.text", text);
});

When("I enter {string} as my email address", (email) => {
    cy.get("input[type='email']").type(email);
});

When("I select {string} as the language", (language) => {
    cy.get("#options").select(language);
});

When("I click on {string} submit button", (buttonName) => {
    cy.get(`input[type='submit'][value='${buttonName}']`).click();
});

Then("I should be redirected to {string} page with url {string}", (text, url) => {
    cy.get("h1.pb-2").should("have.text", text);
    cy.url().should("eq", url);
});

Then("I should get {string} error message", (errorMessage) => {
    cy.get("span.error").should("have.text", errorMessage)
});