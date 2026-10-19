@CSL @E2eCSL @CdaRegression @CDA-E2E
Feature: CSL - Controlled Drugs Application form

  @CslRegressionCI @CslRegression
  Scenario Outline: Controlled drugs application journey form for E2E test
    Given I visit the Controlled substance licence application page
    When I fill out the answers to Controlled Drugs form pertaining to "<CDA Test>" happy path test
    Then I should see "Application submitted" page for CDA
    Examples:
      | CDA Test                                                                                                                                   |
      | T1: A new application - A first time licensee - Alarm system questions are included [full path]                                            |
      | T2: A new application - Existing licensee renewing or changing a currently licensed site - Alarm system questions are included [full path] |
      | T3: A new application - Existing licensee renewing or changing a currently licensed site - Alarm system questions are excluded             |
      | T4: A new application - Existing licensee applying for a new site - Alarm system questions are excluded                                    |
      | T5: A new application - Existing licensee applying for a new site - Alarm system questions are excluded [full path]                        |
      | T6: A new application - Existing licensee applying for a new site - Alarm system questions are included                                    |
      | T7: Amend a pending application - Alarm system questions are included [full path]                                                          |


  @CslRegression
  Scenario: Controlled drugs application form for a first time licensee you have not selected any activities
    Given I visit the Controlled substance licence application page
    When I fill out the answers to Controlled drugs for a first time licensee form and no activity is selected
    Then I should see "You have not selected any activities" page for CDA
    And "Go back to schedule 1 activities" link is displayed on the page for CDA
    When I choose to select link text "Go back to schedule 1 activities"
    Then I should see "Select any schedule 1 activities that will apply to your licence" page for CDA


  @CslRegression
  Scenario: Controlled drugs application form for existing licensee renewing or changing a currently licensed site
    Given I visit the Controlled substance licence application page
    When I fill out the answers to "Controlled drugs" existing licensee renewing or changing a currently licensed site form pertaining to cannot continue with application form
    Then I should see "You cannot continue this application" page for CDA
    And "Register for the licensing platform again." link is displayed on the page for CDA


  @CslRegression @RegressionTestCI @regression1
  Scenario Outline: Controlled drugs application form test for continue an application
    Given I visit the Controlled substance licence application page
    When I partially completing "Controlled drugs" form, then save and exit on "<Scenario - Save and Exit Page>" page
    Then I am navigated to "We saved your application and signed you out" page
    When I select the sign in again button on "Controlled drugs" form
    Then I am navigated to "Apply for a domestic licence for controlled substances" page
    When I choose to sign in, then select "Controlled drugs" form and then select "Continue a draft application " option
    And I select the continue button
    Then I am navigated to "<Page>" page
    Examples:
      | Scenario - Save and Exit Page                                                                                                                | Page                                           |
      | T1: A first time licensee - Page: Are you providing a service under a contract?                                                              | What is the status of the site to be licensed? |
      | T2: Existing licensee renewing or changing a currently licensed site - Page: Is the premises address the same as the licence holder address? | Premises contact details                       |
      | T3: Existing licensee applying for a new site - Page: Is the new site part of a contractual agreement?                                       | When does the contract start?                  |


  @CslRegression
  Scenario: Feedback link on Controlled drugs journey form
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "How are you applying for your controlled drugs licence?" page for CDA
    And I choose to select the "feedback" link
    Then I am navigated to a new tab with "Your feedback" page displayed
