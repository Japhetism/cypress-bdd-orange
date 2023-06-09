/// <reference types="cypress" />

// import pages
import AdminPage from "../../../pages/orange/admin";
import LoginPage from "../../../pages/orange/login";

const { Given, When, Then, Before } = require("@badeball/cypress-cucumber-preprocessor");

// declare admin page
let adminPage;

// declare login page
let loginPage;

// declare a variable to save login data
let loginData;

Before(() => {
    // create an instance of admin page
    adminPage = new AdminPage();

    // create an instance of login page class object
    loginPage = new LoginPage();

    // get access to data using before hook
    cy.fixture("login").then(function(res) {
        loginData = res;
    });
});

Given("I am on the dashboard page", () => {
    loginPage.userLogin(loginData.username, loginData.password);
});

When("I click on admin", () => {
    adminPage.clickOnAdminMenu();
});

Then("I should be redirected to admin page", () => {
    adminPage.validateAdminPage();
});

When("I enter admin search input", () => {
    adminPage.setAdminSearchValue("James007");
});

Then("I expected admin search field to have a value", () => {
    adminPage.validateAdminSearchValue("James007");
});

When("I select admin as user role", () => {
    adminPage.setAdminUserRole("Admin");
});

Then("I expect admin user role field to have a value", () => {
    adminPage.validateAdminUserRoleValue("Admin");
});

When("I select an admin status", () => {
    adminPage.setAdminStatus("Enabled");
});

Then("I expect admin status field to have a value", () => {
    adminPage.validateAdminStatusValue("Enabled");
});

When("I enter employee hint name to select an employee", () => {
    adminPage.setEmployeeName("Ali", "Alice Duval");
});

Then("I expect employee name field to have a value", () => {
    adminPage.validateEmployeeNameValue("Alice  Duval");
});

When("I click on search button", () => {
    adminPage.clickOnSearchBtn();
});

Then("I should see my result", () => {
    adminPage.validateSearchResult("abc123");
});