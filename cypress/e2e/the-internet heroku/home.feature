Feature: The Internet 
    
    I want to test Elemental Selenium on the Internet

    Scenario: Test Heroku Elemental Selenium 
        Given I visit "https://the-internet.herokuapp.com/"
        Then I should be on "Welcome to the-internet" page
        When I click on "Elemental Selenium" link
        Then I should be redirected to "Elemental Selenium" Page
        When I enter "babatunde@mailinator.com" as my email address
        And I select "Java" as the language
        When I click on "Send me test automation Pro tips" submit button
        Then I should be redirected to "Elemental Selenium Newsletter" page with url "https://www.getdrip.com/forms/59166497/submissions"
        Then I should get "Email is on a high-bounce domain. Please enter another email address." error message