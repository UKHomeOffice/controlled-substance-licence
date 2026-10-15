
Feature: Smoke Test e2e flow for CSL

  @CSLSmokeTest
  Scenario: Complete all forms Registration Precursor Chemicals, Controlled Drugs and Low THC Cannabis
#Registration form E2E test
    Given I visit the Controlled substance licence application page
    When I fill out the answers to "Registration" form pertaining to "T1: Yes Identity changes in the last 3yrs - Other business type - Other type of company - Yes to MHRA - Yes to CQCSW" happy path test
    Then I am navigated to "Registration submitted" page
    And "sas-hof-test@digital.homeoffice.gov.uk" link is displayed on Registration page
    And "dflu.dom@homeoffice.gov.uk" link is displayed on Registration page

#Precursor Chemicals form
    Given I visit the Controlled substance licence application page
    When I fill out the answers to "Precursor Chemicals" form pertaining to "T7: Amend a pending application - Is part of the contractual agreement and premises address is the same as the licence holder address" happy path test
    Then I am navigated to "Precursor chemicals application submitted" page

#Controlled Drugs form
    Given I visit the Controlled substance licence application page
    When I fill out the answers to "Controlled Drugs" form pertaining to "T1: A new application - A first time licensee - Alarm system questions are included [full path]" happy path test
    Then I should see "Application submitted" page for CDA

#Low THC Cannabis form
    Given I visit the Controlled substance licence application page
    When I fill out the answers to "Low THC Cannabis" form pertaining to "T1: A new application - A first time licensee - Yes authorised destruction - No company own fields - Yes businesses adjacent to site" happy path test
    Then I should see "Application submitted" page for LTHCC
    When I select "Finish and exit" button
    Then I am navigated to "Apply for a domestic licence for controlled substances" page
