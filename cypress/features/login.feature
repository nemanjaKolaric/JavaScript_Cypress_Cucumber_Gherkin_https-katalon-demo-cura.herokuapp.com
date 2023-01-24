Feature: Login functionality

    Scenario: User is able to login successfully
        Given user is on login page
        When user insert valid credentials
        Then user is logged in

    Scenario Outline:  User is not able to login with invalid credentials
        Given user is on login page
        When user insert invalid credentials, username: "<username>", password: "<password>"
        Then user is not logged in

        Examples:
            | username | password           |
            | error    | ThisIsNotAPassword |
            | John Doe | error              |
            |          | ThisIsNotAPassword |
            | John Doe |                    |
            |          |                    |