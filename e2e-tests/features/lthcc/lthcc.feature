@CSL 
@LTHCC 

Feature: CSL - Low THC Cannabis Application form

  @CslRegressionCI 
  @CslRegression
  Scenario Outline: Low THC Cannabis application journey form for E2E test
    Given I visit the Controlled substance licence application page
    When I fill out the answers to Low THC Cannabis form pertaining to "<LTHCC Test>" happy path test
    Then I should see "Application submitted" page for LTHCC
    When I select "Finish and exit" button
    Then I am navigated to "Apply for a domestic licence for controlled substances" page
    Examples:
      | LTHCC Test                                                                                                                                                                                  |
      | T1: A new application - A first time licensee - Yes authorised destruction - No company own fields - Yes businesses adjacent to site                                                        |
      | T2: A new application - Existing licensee renewing or changing a currently licensed site - Yes upload - No authorised destruction - Yes company own fields - No businesses adjacent to site |
      | T3: A new application - Existing licensee renewing or changing a currently licensed site - No upload - No authorised destruction - Yes company own fields - No businesses adjacent to site  |
      | T4: A new application - Existing licensee applying for a new site - We are moving site - No authorised destruction - Yes company own fields - No businesses adjacent to site                |
      | T5: A new application - Existing licensee applying for a new site - For another site - Agreement no - No authorised destruction - Yes company own fields - No businesses adjacent to site   |
      | T6: A new application - Existing licensee applying for a new site - For another site - Agreement yes - No authorised destruction - Yes company own fields - No businesses adjacent to site  |
      | T7: Amend a pending application - Yes authorised destruction - No company own fields - Yes businesses adjacent to site                                                                      |


  Scenario Outline: Low THC Cannabis application journey form for needing to apply for controlled drugs licence
    Given I visit the Controlled substance licence application page
    When I fill out the answers pertaining to "<LTHCC Test>" when you need to apply for controlled drugs licence
    Then I should see "You need to apply for a controlled drugs licence" page for LTHCC
    And "apply for a controlled drugs licence" link is displayed on the page for LTHCC
    When "apply for a controlled drugs licence" link is selected
    Then I am navigated to "What type of licence are you applying for?" page
    Examples:
      | LTHCC Test                                                                             |
      | T1: When no licence needed to cultivate and possess low THC cannabis (industrial hemp) |
      | T2: When inside is where you be cultivating the low THC cannabis                       |


  Scenario: You cannot continue with this application when existing licensee renewing or changing a currently licensed site when company reference number has changed since las application
    Given I visit the Controlled substance licence application page
    When I fill out the answers to "Low THC Cannabis" existing licensee renewing or changing a currently licensed site form pertaining to cannot continue with application form
    Then I should see "You cannot continue this application" page for LTHCC
    And "Register for the licensing platform again." link is displayed on the page for LTHCC


  @CslRegression
  Scenario Outline: Low THC Cannabis application form test for continue an application
    Given I visit the Controlled substance licence application page
    When I partially completing "Low THC cannabis" form, then save and exit on "<Scenario - Save and Exit Page>" page
    Then I am navigated to "We saved your application and signed you out" page
    When I select the sign in again button on "Low THC cannabis" form
    Then I am navigated to "Apply for a domestic licence for controlled substances" page
    When I choose to sign in, then select "Low THC cannabis" form and then select "Continue a draft application " option
    And I select the continue button
    Then I am navigated to "<Page>" page
    Examples:
      | Scenario - Save and Exit Page                                                                                                      | Page                                                                                                  |
      | T1: A first time licensee - Page: Do you hold any Home Office or other regulatory licenses?                                        | Has your organisation ever been refused a licence?                                                    |
      | T2: Existing licensee renewing or changing a currently licensed site - Page: Has the responsible person subscribed to DBS updates? | Do you require somebody within your company to be authorised to witness the destruction of the plant? |
      | T3: Existing licensee applying for a new site - Page: Is the new site part of a contractual agreement?                             | When does the contract start?                                                                         |


  Scenario: Feedback link on Low THC Cannabis application journey form
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Licence holder details" page for LTHCC
    Then I should see the "feedback" link