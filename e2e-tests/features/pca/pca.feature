@CSL 
@PCA

Feature: CSL - Precursor chemicals application form

  @CslRegressionCI 
  @CslRegression
  Scenario Outline: PCA E2E test for a new application and amending pending application
    Given I visit the Controlled substance licence application page
    When I fill out the answers to Precursor Chemicals form pertaining to "<PCA Test>" happy path test by selecting "<Own Chemical Checkbox>" checkbox and entering own chemical name "<Own Chemical Name>"
    Then I am navigated to "Precursor chemicals application submitted" page
    Examples:
      | PCA Test                                                                                                                                                                                      | Own Chemical Checkbox                | Own Chemical Name |
      | T1: A new application - A first time licensee - Premises address is the same as the licence holder address                                                                                    |                                      |                   |
      | T2: A new application - Existing licensee renewing or changing a currently licensed site - Premises address is the same as the licence holder address                                         |                                      |                   |
      | T3: A new application - Existing licensee renewing or changing a currently licensed site - Premises address is not same as the licence holder address, operation applies is other licence     |                                      |                   |
      | T4: A new application - Existing licensee applying for a new site - Enter moving site date and premises address is not same as the licence holder address, operation applies is other licence |                                      |                   |
      | T5: A new application - Existing licensee applying for a new site - Is not part of the contractual agreement and premises address is the same as the licence holder address                   | I want to enter my own chemical name | MAK Drug          |
      | T6: A new application - Existing licensee applying for a new site - Is part of the contractual agreement and premises address is the same as the licence holder address                       | I want to enter my own chemical name | MAK Drug          |
      | T7: Amend a pending application - Is part of the contractual agreement and premises address is the same as the licence holder address                                                         | I want to enter my own chemical name | MAK Drug          |

  Scenario: PCA E2E test for existing licensee renewing or changing a currently licensed site
    Given I visit the Controlled substance licence application page
    When I fill out the answers to "Precursor chemicals" existing licensee renewing or changing a currently licensed site form pertaining to cannot continue with application form
    Then I am navigated to "You cannot continue this application" page
    And "Register for the licensing platform again." link is displayed on the page for PCA

  Scenario Outline: PCA Test for continue an application
    Given I visit the Controlled substance licence application page
    When I partially completing "Precursor chemicals" form, then save and exit on "<Scenario - Save and Exit Page>" page
    Then I am navigated to "We saved your application and signed you out" page
    When I select the sign in again button on "Precursor chemicals" form
    Then I am navigated to "Apply for a domestic licence for controlled substances" page
    When I choose to sign in, then select "Precursor chemicals" form and then select "Continue a draft application " option
    And I select the continue button
    Then I am navigated to "<Page>" page
    Examples:
      | Scenario - Save and Exit Page                                                                                             | Page                                                                        |
      | T1: A first time licensee - Page: Which category is the substance?                                                        | Which chemical are you applying for?                                        |
      | T2: Existing licensee renewing or changing a currently licensed site - Page: Has the guarantor subscribed to DBS updates? | Has anyone employed by your company ever received criminal convictions?     |
      | T3: Existing licensee applying for a new site - Page: When does the contract start?                                       | Tell us more about the contract and how it affects your licence application |

  @CslRegression
  @RegressionTestCI
  Scenario: Feedback link on Precursor chemicals application form
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "How are you applying for your controlled drugs licence?" page for CDA
    Then I should see the "feedback" link