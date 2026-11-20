@CSL @REG
Feature: CSL - Registration Form

  @CslRegressionCI @CslRegression
  Scenario Outline: Registration application journey form for E2E test
    Given I visit the Controlled substance licence application page
    When I fill out the answers to Registration form pertaining to "<REG Test>" happy path test
    Then I am navigated to "Registration submitted" page
    And "sas-hof-test@digital.homeoffice.gov.uk" link is displayed on Registration page
    And "dflu.dom@homeoffice.gov.uk" link is displayed on Registration page
    Examples:
      | REG Test                                                                                                               |
      | T1: Yes Identity changes in the last 3yrs - Other business type - Other type of company - Yes to MHRA - Yes to CQCSW   |
      | T2: No Identity changes in the last 3yrs - Not Other business type - Public type of company - No to MHRA - NO to CQCSW |

  Scenario Outline: Registration user can login successfully and pending
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Sign in to apply for a domestic licence to produce, supply or possess controlled drugs" page
    And I choose to sign in as "<User type>" user
    Then I am navigated to "<Page Name>" page
    Examples:
      | User type | Page Name                                  |
      | Valid     | What type of licence are you applying for? |
      | Pending   | Signed in successfully                     |

  Scenario: Feedback link on Controlled substance licence applications and Registration form
    Given I visit the Controlled substance licence application page
    Then I should see the "feedback" link
    When I choose to navigate to "Register for the controlled substance licensing system" page for REG
    Then I should see the "feedback" link