/// <reference types="cypress" />

// import page
import HomePage from "../../pages/the-internet heroku/home";

const { Given, When, Then, Before } = require("@badeball/cypress-cucumber-preprocessor");

// declare home pahe
let homePage;

Before(() => {
    // create an instance of home page
    homePage = new HomePage();
});

Given("I visit {string}", (url) => {
    cy.visit(url);
});

Then("I should be on {string} page", (text) => {
    homePage.validatePage(text);
});

When("I click on {string} link", (linkName) => {
    homePage.clickOnLink(linkName);
});

Then("I should be redirected to {string} Page", (text) => {
    homePage.validatePage(text);
});

When("I enter {string} as my email address", (email) => {
    homePage.setEmailAddress(email);
});

When("I select {string} as the language", (language) => {
    homePage.selectLanguage(language);
});

When("I click on {string} submit button", (buttonName) => {
    homePage.clickOnButton();
});

Then("I should be redirected to {string} page with url {string}", (text, url) => {
    homePage.validatePage(text);
    homePage.validateUrl(url);
});

Then("I should get {string} error message", (errorMessage) => {
    homePage.validateErrorMessage(errorMessage);
});