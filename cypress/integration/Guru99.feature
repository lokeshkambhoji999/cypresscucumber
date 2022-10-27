Feature: Guru 99 Portal

Scenario: Verify the Login with Invalid and Valid credentials
    Given I am on the home page
    When I login with Invalid credentials
    Then I Should not be allowed to login
    When I login with valid credentials
    Then I should be allowed to login

Scenario Outline: Profile and Edit Profile 
    When navigate to profile page
    Then I should see First name, last name, Age fields etc
    When I navigate to Edit profile page
    When User enters '<title>', '<surname>', '<fname>', '<phonenum>', '<year>', '<month>', '<date>', '<period>', '<occupation>', '<address>', '<city>', '<county>' and '<postcode>'
    When I logout from the application
    When I login with valid credentials
    When I navigate to Edit profile page
    Then I should be able to see updated values under Edit profile page

Examples:
    | title| surname | fname | phonenum  | year| month| date| period| occupation| address| city| county| postcode |
    | Mrs | TESTING | fname | 1234567890| 1980 | March| 10 | 6 |Engineer | New Street | Hyderabad | India | 500050 |


Scenario Outline: Request Quotation
    When I navigated to Request Quotation page
    When I Requested Quotation by entering fields like '<breakdowncover>', '<incidents>', '<registrationNo>', '<annualMileage>', '<estimatedvalue>', '<location>', '<year>', '<month>' and '<date>'
    Then Retrives the Identification number


Examples:
    | breakdowncover| incidents | registrationNo | annualMileage  | estimatedvalue| location| year| month| date|
    | At home | Accident | tn65 S0099 | 45| 1,00,000 | Public Place| 2018 | March |10 |

Scenario: Retrieve Quotation
    When I navigated to Retrieve Quotation page
    Given Entered the Identification number and retrieved the details
    Then verified the policy details like registrationNo,annualMileage.estimatedvalue and Parking location

Scenario: Logout
    When I logout from the application
    Then Verified the logout is succesful
