Feature: Menu options functionality

    Scenario: User is able to go back to home page
        Given user is on appointment page
        When user click on Home link
        Then user is on home page

    Scenario: User is able to go to history page
        Given user is on appointment page
        When user click on History link
        Then user is on history page

    Scenario: User is able to go to profile page
        Given user is on appointment page
        When user click on Profile link
        Then user is on profile page

    Scenario: User is able to logout from application
        Given user is on appointment page
        When user click on Logout link
        Then user is logged out