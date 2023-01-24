Feature: Appointment functionality

    Testing varoius options in -Make appointment- section

    Scenario: User is able to make appointment in Tokyo facility
        Given user is in Make Appointment section
        When user choose facility "Tokyo CURA Healthcare Center" and fill other fields
        Then user has booked appointment

    # This scenario should not pass because it has back date (01.01.2020) and it passes
    Scenario: User is able to make appointment in HongKong facility
        Given user is in Make Appointment section
        When user choose facility "Hongkong CURA Healthcare Center" and fill other fields
        Then user has booked appointment

    Scenario: User is able to make appointment in Seoul facility
        Given user is in Make Appointment section
        When user choose facility "Seoul CURA Healthcare Center" and fill other fields
        Then user has booked appointment

    Scenario: User is not able to make appointment without required Visit Date field
        Given user is in Make Appointment section
        When user do not fill Visit Date field
        Then user has not booked appointment
