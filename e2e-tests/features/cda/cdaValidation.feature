@CSL @CDA @CDA-V
Feature: CSL - Controlled Drugs Application form

#******************************************************************* Test-1 *****************************************************************************************#
# What type of licence are you applying for page
# How would you like to apply page
# Enter your application reference number page
# Licence holder details page
# Licence holder address page
# Is the premises address the same as the licence holder address page
# Premises address page  
# Premises contact details page
# How are you funded page
# Managing director or person in charge page
# DBS information for the person in charge page
# Has the managing director or person in charge subscribed to DBS updates pages
# Are they, or anyone named on this application, a member of a professional body pages
# Has anyone in your organisation ever been subject to legal business proceedings pages

  Scenario: CDA Test-1 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "How would you like to apply?" page for CDA
#What type of licence are you applying for? page:
#No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select what type of licence are you applying for" error summary
    When I choose to select "Controlled drugs" on "What type of licence are you applying for?" page and choose to continue for CDA
#How would you like to apply? page:
#No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select how you are applying for your controlled drugs licence" error summary
    When I choose to select "Amend a pending application" on "How are you applying for your controlled drugs licence?" page and choose to continue for CDA
#Enter your application reference number page:
#No data entered in application reference number fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter an application reference number" error summary
#Application reference number is less than 2 digits
    When I choose to enter "1" as application reference number on "How are you applying for your controlled drugs licence?" page and choose to continue for CDA
    Then I should see "There is a problem" error message displayed
    And I should see "Application reference number must be between 2 and 8 numeral characters" error summary
#Application reference number has letter
    When I choose to enter "112A" as application reference number on "How are you applying for your controlled drugs licence?" page and choose to continue for CDA
    Then I should see "There is a problem" error message displayed
    And I should see "Application reference number must not include letters a to z or special characters" error summary
    When I choose to enter "11223344" as application reference number on "How are you applying for your controlled drugs licence?" page and choose to continue for CDA
#Licence holder details page    
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a company name¬Enter a UK telephone number¬Enter an email address" error summary
#Enter less than 2 charters in Company name, invalid UK telephone number, invalid Email and invalid Website URL
    When I complete the fields below with Licence holder details for CDA:
      | Company name        | H              |
      | Company number      |                |
      | UK telephone number | $48081570192   |
      | Email address       | TesterTlf.com@ |
      | Website URL         | www.cikicyr.c  |
    Then I should see "There is a problem" error message displayed
    And I should see "Company name must be between 2 and 200 characters¬Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address¬Enter a real website URL" error summary
#Enter invalid UK telephone number and Email address short Contact email address is less than 6 characters
    When I complete the fields below with Licence holder details for CDA:
      | Company name        | HO              |
      | Company number      |                 |
      | UK telephone number |      0161329600 |
      | Email address       | T@t.c           |
      | Website URL         | www.cikicyr.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address" error summary
#Enter a real email address email does not have @ symbol
    When I complete the fields below with Licence holder details for CDA:
      | Company name        | HO              |
      | Company number      |                 |
      | UK telephone number |     01613296000 |
      | Email address       | TesterTlf.com   |
      | Website URL         | www.cikicyr.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
    When I complete the fields below with Licence holder details for CDA:
      | Company name        | HO              |
      | Company number      |                 |
      | UK telephone number |     01613296000 |
      | Email address       | Tester@hTlf.com |
      | Website URL         | www.cikicyr.com |
#Licence holder address page:
# No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a licence holder address¬Enter a town or city¬Enter a postcode" error summary
#Postcode entered in an invalid UK format
    When I complete the fields below with "Licence" holder address details for CDA:
      | Address line 1 |        12 |
      | Address line 2 | less than |
      | Town or City   | Leeds     |
      | Postcode       |    2L 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
#Postcode entered contains special characters (not including whitespace)
    When I complete the fields below with "Licence" holder address details for CDA:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L1! 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
    When I complete the fields below with "Licence" holder address details for CDA:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L11 1PP |
#Is the premises address the same as the licence holder address page    
#No data entered in any of the fields    
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if your contact details are the same for your licence and business address" error summary
    When I choose to select "No" on "Is the premises address the same as the licence holder address?" page and choose to continue for CDA
    And I select save and continue
#Premises address page
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a premises address¬Enter a town or city¬Enter a postcode" error summary
#Postcode entered in an invalid UK format
    When I complete the fields below with "Premises" address details for CDA:
      | Address line 1 |        12 |
      | Address line 2 | less than |
      | Town or City   | Leeds     |
      | Postcode       |    2L 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
#Postcode entered contains special characters (not including whitespace)
    When I complete the fields below with "Premises" address details for CDA:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L1! 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
    When I complete the fields below with "Premises" address details for CDA:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L12 1PP |
    And I select save and continue
#Premises contact details page
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a UK telephone number¬Enter an email address" error summary
#Enter Invalid uk telephone number and email address @ symbol at the end
    When I complete the fields below with Premises contact details for CDA:
      | UK telephone number |   -48081570192 |
      | Email address       | TesterTlf.com@ |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address" error summary
#Enter invalid UK telephone number 12 digits and Email address short less than 6 characters
    When I complete the fields below with Premises contact details for CDA:
      | UK telephone number | 016148081588 |
      | Email address       | T@t.c        |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address" error summary
#Enter invalid UK telephone number and email does not have @ symbol
    When I complete the fields below with Premises contact details for CDA:
      | UK telephone number |  01614808158F |
      | Email address       | TesterTlf.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address" error summary
    When I complete the fields below with Premises contact details for CDA:
      | UK telephone number |    01614808158 |
      | Email address       | Tester@Tlf.com |
#How are you funded page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select how you are funded" error summary
    When I choose to select "‘For profit’ enterprise" on "How are you funded?" page and choose to continue for CDA
    And I select save and continue
#Managing director or person in charge page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the name of the person in charge¬Enter an email address for the person in charge¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter Email address @ symbol at the end and confirmation box not ticked
    When I complete the fields below with "Managing director or person in charge" for CDA:
      | Full name         | H              |
      | Email address     | TesterTlf.com@ |
      | Confirm check box | Not ticked     |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter email address short less than 6 characters and confirmation box not ticked
    When I complete the fields below with "Managing director or person in charge" for CDA:
      | Full name         | HH         |
      | Email address     | T@t.c      |
      | Confirm check box | Not ticked |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter email does not have @ symbol and confirmation box not ticked
    When I complete the fields below with "Managing director or person in charge" for CDA:
      | Full name         | HOF           |
      | Email address     | TesterTlf.com |
      | Confirm check box | Not ticked    |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
    When I complete the fields below with "Managing director or person in charge" for CDA:
      | Full name         | HOF            |
      | Email address     | Tester@Tlf.com |
      | Confirm check box | Ticked         |
    And I select save and continue
#DBS information for the person in charge page
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the name on the person in charge's DBS application¬Enter the person in charge's DBS reference¬Enter the DBS date of issue or application for the person in charge" error summary
#Full name less than 3 chars, DBS reference entered is less than 3 chars and date entered more 3 years entered in the Day month year field
    When I complete the fields below with "DBS information for the person in charge" information for CDA:
      | Full name      | Ho                    |
      | DBS reference  | A1                    |
      | Day month year | More than 3 years ago |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬DBS reference must be between 3 and 25 characters¬DBS certificates cannot be more than 3 years old. This person must apply for a new DBS certificate" error summary
#Date entered is in a future date
    When I complete the fields below with "DBS information for the person in charge" information for CDA:
      | Full name      | Hof             |
      | DBS reference  | A12             |
      | Day month year | Tomorrow's date |
    Then I should see "There is a problem" error message displayed
    And I should see "DBS date of issue or application must not be in the future" error summary
#Entere special character in DBS reference and date fields
    When I complete the fields below with "DBS information for the person in charge" information for CDA:
      | Full name      | Hof        |
      | DBS reference  | %A12       |
      | Day month year | !1/01/2009 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real DBS certificate number or application reference number¬Enter a real date of issue or application" error summary
    When I complete the fields below with "DBS information for the person in charge" information for CDA:
      | Full name      | Hof              |
      | DBS reference  | A12355           |
      | Day month year | Yesterday's date |
#Has the managing director or person in charge subscribed to DBS updates pages
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the person in charge has subscribed to DBS updates" error summary
    When I choose to select "Yes" on "Has the managing director or person in charge subscribed to DBS updates?" page and choose to continue for CDA
    And I select save and continue
#Are they, or anyone named on this application, a member of a professional body? page
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Select if anyone on this application is a member of a professional body" error summary
    When I choose to select "Yes" on "Are they, or anyone named on this application, a member of a professional bodys?" page and choose to continue for CDA
    And I select save and continue
#Provide details of the professional bodies and relevant reference numbers page
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of the professional bodies and any relevant reference numbers" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide details of the professional bodies and relevant reference numbers" page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of professional bodies must be less than 2,000 characters" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide details of the professional bodies and relevant reference numbers" page for CDA
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Has anyone in your organisation ever been subject to legal business proceedings page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if anyone has ever been subject to legal business proceedings" error summary


#******************************************************************* Test-2 *****************************************************************************************#
#  Provide details of the legal business proceedings page
#  Has anyone in your organisation ever received a criminal conviction page
#  Who is responsible for the security of the premises page
#  Person responsible for the security of the premises page
#  Person responsible for the security of the premises
#  DBS information for person responsible for security of premises
#  Has the person responsible for the security of the premises subscribed to DBS updates pages
#  Who is responsible for legal compliance and regulatory affairs page
#  Person responsible for legal compliance and regulatory affairs page
#  DBS information for person responsible for compliance and regulatory affairs page
#  Has the person responsible for compliance and regulatory affairs subscribed to DBS updates page
#  Is the person responsible for legal compliance and regulatory affairs an employee or consultant page
#  Does your company have any authorised witnesses for the destruction of controlled drugs? page
#  Authorised witness information page
#  DBS information for page

  Scenario: CDA Test-2  Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Provide details of the legal business proceedings" page for CDA
#Provide details of the legal business proceedings page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Provide details of the legal business proceedings" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide details of the legal business proceedings" page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of legal business proceedings must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide details of the legal business proceedings" page for CDA
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Has anyone in your organisation ever received a criminal conviction?
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if anyone in your organisation has ever received a criminal conviction" error summary
    When I choose to select "Yes" on "Has anyone in your organisation ever received a criminal conviction?" page and choose to continue for CDA
#Who is responsible for the security of the premises? page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select who is responsible for the security of the premises" error summary
    When I choose to select "Someone else" on "Who is responsible for the security of the premises?" page and choose to continue for CDA
    And I select save and continue
#Person responsible for the security of the premises page
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the name of the person who is responsible for premises security¬Enter an email address for the person responsible for premises security¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter Email address @ symbol at the end and confirmation box not ticked
    And I complete the fields below with "Person responsible for the security of the premises" for CDA:
      | Full name         | H              |
      | Email address     | TesterTlf.com@ |
      | Confirm check box | Not ticked     |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter email address short less than 6 characters and confirmation box not ticked
    When I complete the fields below with "Person responsible for the security of the premises" for CDA:
      | Full name         | HH         |
      | Email address     | T@t.c      |
      | Confirm check box | Not ticked |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter email does not have @ symbol and confirmation box not ticked
    When I complete the fields below with "Person responsible for the security of the premises" for CDA:
      | Full name         | HOF           |
      | Email address     | TesterTlf.com |
      | Confirm check box | Not ticked    |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
    When I complete the fields below with "Person responsible for the security of the premises" for CDA:
      | Full name         | HOF            |
      | Email address     | Tester@Tlf.com |
      | Confirm check box | Ticked         |
    And I select save and continue
#DBS information for person responsible for security of premises
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the name of the person who is responsible for premises security as it appears on their DBS application¬Enter a DBS reference, for example a certificate number or an application reference number¬Enter the DBS date of issue or application for the person responsible for premises security" error summary
#Full name less than 3 chars, DBS reference entered is less than 3 chars and date entered more 3 years entered in the Day month year field
    When I complete the fields below with "DBS information for person responsible for security of premises" information for CDA:
      | Full name      | Ho                    |
      | DBS reference  | A1                    |
      | Day month year | More than 3 years ago |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬DBS reference must be between 3 and 25 characters¬DBS certificates cannot be more than 3 years old. This person must apply for a new DBS certificate" error summary
#Date entered is in a future date
    When I complete the fields below with "DBS information for person responsible for security of premises" information for CDA:
      | Full name      | Hof             |
      | DBS reference  | A12             |
      | Day month year | Tomorrow's date |
    Then I should see "There is a problem" error message displayed
    And I should see "DBS date of issue or application must not be in the future" error summary
#Entere special character in DBS reference and date fields
    When I complete the fields below with "DBS information for person responsible for security of premises" information for CDA:
      | Full name      | Hof        |
      | DBS reference  | £A12       |
      | Day month year | !1/01/2009 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real DBS certificate number or application reference number¬Enter a real date of issue or application" error summary
    When I complete the fields below with "DBS information for person responsible for security of premises" information for CDA:
      | Full name      | Hof              |
      | DBS reference  | A12              |
      | Day month year | Yesterday's date |
#Has the person responsible for the security of the premises subscribed to DBS updates page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the person responsible for premises security has subscribed to DBS updates" error summary
When I choose to select "Yes" on "Has the person responsible for the security of the premises subscribed to DBS updates?" page and choose to continue for CDA
And I select save and continue
#Who is responsible for legal compliance and regulatory affairs? page
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Select who is responsible for legal compliance and regulatory affairs" error summary
    When I choose to select "Someone else" on "Who is responsible for legal compliance and regulatory affairs?" page and choose to continue for CDA
    And I select save and continue
#Person responsible for legal compliance and regulatory affairs page
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the name of the legal and regulatory officer¬Enter an email address for the person responsible for legal compliance and regulatory affairs¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter Email address @ symbol at the end and confirmation box not ticked
    And I complete the fields below with "Person responsible for legal compliance and regulatory affairs" for CDA:
      | Full name         | H              |
      | Email address     | TesterTlf.com@ |
      | Confirm check box | Not ticked     |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter email address short less than 6 characters and confirmation box not ticked
    When I complete the fields below with "Person responsible for legal compliance and regulatory affairs" for CDA:
      | Full name         | HH         |
      | Email address     | T@t.c      |
      | Confirm check box | Not ticked |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter email does not have @ symbol and confirmation box not ticked
    When I complete the fields below with "Person responsible for legal compliance and regulatory affairs" for CDA:
      | Full name         | HOF           |
      | Email address     | TesterTlf.com |
      | Confirm check box | Not ticked    |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
    When I complete the fields below with "Person responsible for legal compliance and regulatory affairs" for CDA:
      | Full name         | HOF            |
      | Email address     | Tester@Tlf.com |
      | Confirm check box | Ticked         |
    And I select save and continue
#DBS information for person responsible for compliance and regulatory affairs page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the name of the legal and regulatory officer¬Enter a DBS reference, for example a certificate number or an application reference number¬Enter the DBS date of issue or application for the legal and regulatory officer" error summary
#Full name less than 3 chars, DBS reference entered is less than 3 chars and date entered more 3 years entered in the Day month year field
    When I complete the fields below with "DBS information for person responsible for compliance and regulatory affairs" information for CDA:
      | Full name      | Ho                    |
      | DBS reference  | A1                    |
      | Day month year | More than 3 years ago |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬DBS reference must be between 3 and 25 characters¬DBS certificates cannot be more than 3 years old. This person must apply for a new DBS certificate" error summary
#Date entered is in a future date
    When I complete the fields below with "DBS information for person responsible for compliance and regulatory affairs" information for CDA:
      | Full name      | Hof             |
      | DBS reference  | A12             |
      | Day month year | Tomorrow's date |
    Then I should see "There is a problem" error message displayed
    And I should see "DBS date of issue or application must not be in the future" error summary
#Entere special character in DBS reference and date fields
    When I complete the fields below with "DBS information for person responsible for compliance and regulatory affairs" information for CDA:
      | Full name      | Hof        |
      | DBS reference  | !A12       |
      | Day month year | !1/01/2009 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real DBS certificate number or application reference number¬Enter a real date of issue or application" error summary
 When I complete the fields below with "DBS information for person responsible for compliance and regulatory affairs" information for CDA:
      | Full name      | Hof              |
      | DBS reference  | A121236          |
      | Day month year | Yesterday's date |
#Has the person responsible for compliance and regulatory affairs subscribed to DBS updates? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the person responsible for compliance and regulatory affairs has subscribed to DBS updates" error summary
    When I choose to select "Yes" on "Has the person responsible for compliance and regulatory affairs subscribed to DBS updates?" page and choose to continue for CDA
#Is the person responsible for legal compliance and regulatory affairs an employee or consultant? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the person responsible for compliance and regulatory affairs is an employee or a consultant" error summary
    When I choose to select "Employee" on "Is the person responsible for legal compliance and regulatory affairs an employee or consultant?" page and choose to continue for CDA
#Does your company have any authorised witnesses for the destruction of controlled drugs? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you need someone to be authorised to witness the destruction of controlled drugs" error summary
    When I choose to select "Yes" on "Does your company have any authorised witnesses for the destruction of controlled drugs?" page and choose to continue for CDA
#Authorised witness information page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the name of the authorised witness¬Enter an email address for the authorised witness¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter Email address @ symbol at the end and confirmation box not ticked
    And I complete the fields below with "Person responsible for witnessing the destruction of controlled drugs" for CDA:
      | Full name         | H              |
      | Email address     | TesterTlf.com@ |
      | Confirm check box | Not ticked     |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter email address short less than 6 characters and confirmation box not ticked
    When I complete the fields below with "Person responsible for witnessing the destruction of controlled drugs" for CDA:
      | Full name         | HH         |
      | Email address     | T@t.c      |
      | Confirm check box | Not ticked |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter email does not have @ symbol and confirmation box not ticked
    When I complete the fields below with "Person responsible for witnessing the destruction of controlled drugs" for CDA:
      | Full name         | HOF           |
      | Email address     | TesterTlf.com |
      | Confirm check box | Not ticked    |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
    When I complete the fields below with "Person responsible for witnessing the destruction of controlled drugs" for CDA:
      | Full name         | HOF TEST       |
      | Email address     | Tester@Tlf.com |
      | Confirm check box | Ticked         |
    And I select save and continue
#DBS information for page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the name of the person authorised to witness the destruction of controlled drugs¬Enter a DBS reference, for example a certificate number or an application reference number¬Enter the DBS date of issue or application for the authorised witness¬Select if the authorised witness has subscribed to DBS updates" error summary
#Full name less than 3 chars, DBS reference entered is less than 3 chars, date entered more 3 years entered in the Day month year and DBS update radio option is not selected
    When I complete the fields below with DBS information for CDA:
      | Full name          | Ho                    |
      | DBS reference      | A1                    |
      | Day month year     | More than 3 years ago |
      | DBS Update Service |                       |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬DBS reference must be between 3 and 25 characters¬DBS certificates cannot be more than 3 years old. This person must apply for a new DBS certificate¬Select if the authorised witness has subscribed to DBS updates" error summary
#Date entered is in a future date
    When I complete the fields below with DBS information for CDA:
      | Full name          | Hof             |
      | DBS reference      | A12             |
      | Day month year     | Tomorrow's date |
      | DBS Update Service | No              |
    Then I should see "There is a problem" error message displayed
    And I should see "DBS date of issue or application must not be in the future" error summary
#Entere special character in DBS reference and date fields
    When I complete the fields below with DBS information for CDA:
      | Full name          | Hof        |
      | DBS reference      | !A12       |
      | Day month year     | !1/01/2009 |
      | DBS Update Service | Yes        |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real DBS certificate number or application reference number¬Enter a real date of issue or application" error summary




#******************************************************************* Test-3 *****************************************************************************************#
#  Upload company registration certificate page
#  What trading reasons does this site need a licence for page
#  Specify your trading reason page
#  Explain why you are applying for a licence, your business purposes and what you plan to use it for page
#  Provide details of your main customers page
#  Provide details of where you source the drugs from page
#  Does your business possess any licences issued by the Medicines and Healthcare products Regulatory Agency (MHRA) page
#  Licence details page
#  Is your business registered with the Care Quality Commission or Scottish and Welsh equivalents? page
#  Provide details of any other regulatory bodies that you are registered with (optional) page
#  Are you providing a service under a contract? page
#  Provide details of the service page
#  What date does the service expire on? page
#  What is the status of the site to be licensed? page

  Scenario: CDA Test-3 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Upload company registration certificate" page for CDA
#Upload company registration certificate page
#No file selected
    And I select save and continue on upload photo
    Then I should see "There is a problem" error message displayed
    And I should see "Select a file" error summary
#Upload a photo of yourself page: Upload the same file name again
    When I choose to upload "yourself1.JPEG" file
    And I choose to upload another "yourself1.JPEG" file
    Then I should see "There is a problem" error message displayed
    And I should see "A file with this name was already uploaded" error summary
#Upload a photo of yourself page: File size too large when file size is greater than 20MB
    When I choose to upload "yourself25Mb.pdf" file
    Then I should see "The selected files must be smaller than 25MB" error for max upload file
#Upload a photo of yourself page: Incorrect file type, your photo must be a JPG, PNG, GIF,  JPEG or PDF file
    When I choose to upload "text.txt" file
    Then I should see "The selected file must be a PNG, PDF, JPEG or Microsoft Word or Excel file" error for type of uploaded file
    When I choose to upload "yourself1.JPEG" file
    And I select save and continue on upload photo
#Who is responsible for witnessing the destruction of controlled drugs? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select a trading reason" error summary
    When I choose to select "Other" on "What trading reasons does this site need a licence for?" page and choose to continue for CDA
#Specify your trading reason page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Specify your trading reason" error summary
#Data entered in the text area field characters is over 500 which is the max value
    When I enter "501" characters in the text area box field on "Specify your trading reason" page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Your specific trading reason must be 500 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Specify your trading reason" page for CDA
    Then I should see "You have 250 characters remaining" count message displayed on the text area field
    When I select save and continue
    And I select save and continue on the Summary of trading reason page for CDA
#Explain why you are applying for a licence, your business purposes and what you plan to use it for page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Explain why you are applying for a licence" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Explain why you are applying for a licence, your business purposes and what you plan to use it for" page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Reasons why you are applying for a licence must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Explain why you are applying for a licence, your business purposes and what you plan to use it for" page for CDA
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Provide details of your main customers page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Provide details of your main customers" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide details of your main customers" page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of your main customers must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide details of your main customers" page for CDA
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Provide details of where you source the drugs from page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Provide details of where you source the drugs from" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide details of where you source the drugs from" page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of where you source the drugs from must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide details of where you source the drugs from" page for CDA
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Does your business possess any licences issued by the Medicines and Healthcare products Regulatory Agency (MHRA)? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you have any licences issued by the Medicines and Healthcare Products Regulatory Agency" error summary
    When I choose to select "Yes" on "Does your business possess any licences issued by the Medicines and Healthcare products Regulatory Agency (MHRA)?" page and choose to continue for CDA
#Licence details page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a Medicines and Healthcare products Regulatory Agency licence number¬Enter a Medicines and Healthcare products Regulatory Agency licence type¬Enter the MHR licence date of issue" error summary
#Licence number less than 3 chars, Licence type entered is less than 3 chars and date entered before 01 January 2009
    When I complete the fields below with Licence details for CDA:
      | Licence number | Ho         |
      | Licence type   | A1         |
      | Day month year | 31/12/2008 |
    Then I should see "There is a problem" error message displayed
    And I should see "Medicines and Healthcare products Regulatory Agency licence number must be between 3 and 50 characters¬Licence type must be between 3 and 50 characters¬MHRA licence date of issue must be on or after 01 January 2009" error summary
#Date entered is in the Future date
    When I complete the fields below with Licence details for CDA:
      | Licence number | Hof             |
      | Licence type   | A12             |
      | Day month year | Tomorrow's date |
    Then I should see "There is a problem" error message displayed
    And I should see "MHRA licence date of issue must be in the past" error summary
#Enter special character in the date field
    When I complete the fields below with Licence details for CDA:
      | Licence number | Hof        |
      | Licence type   | A12        |
      | Day month year | !2/02/2025 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real date of issue" error summary
    When I complete the fields below with Licence details for CDA:
      | Licence number | Hof123456        |
      | Licence type   | Ab123456         |
      | Day month year | Yesterday's date |
#Is your business registered with the Care Quality Commission or Scottish and Welsh equivalents? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you have registered with the Care Quality Commission or its Scottish and Welsh equivalents" error summary
    When I choose to select "Yes" on "Is your business registered with the Care Quality Commission or Scottish and Welsh equivalents?" page and choose to continue for CDA
#Registration details page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a registration number¬Enter a date of registration" error summary
#Registration number less than 3 chars and date entered before 01 January 2003
    When I complete the fields below with Registration details for CDA:
      | Registration number | Ho         |
      | Day month year      | 31/12/2002 |
    Then I should see "There is a problem" error message displayed
    And I should see "Registration number must be between 3 and 50 characters¬Date of registration must be on or after 1 January 2003" error summary
#Date entered in the future
    When I complete the fields below with Registration details for CDA:
      | Registration number | Hof             |
      | Day month year      | Tomorrow's date |
    Then I should see "There is a problem" error message displayed
    And I should see "Date of registration must be in the past" error summary
#Enter special character in the date field
    When I complete the fields below with Registration details for CDA:
      | Registration number | Hof123456  |
      | Day month year      | *1/02/2025 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real date of registration" error summary
    When I complete the fields below with Registration details for CDA:
      | Registration number | Hof123456        |
      | Day month year      | Yesterday's date |
#Provide details of any other regulatory bodies that you are registered with (optional)
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2010" characters in the text area box field on "Provide details of any other regulatory bodies that you are registered with (optional)" page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of other regulatory bodies must be 2,000 characters or less" error summary
    And I should see "You have 10 characters too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide details of any other regulatory bodies that you are registered with (optional)" page for CDA
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    And I select save and continue
#Are you providing a service under a contract? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you are providing a service under a contract" error summary
    When I choose to select "Yes" on "Are you providing a service under a contract?" page and choose to continue for CDA
#Provide details of the service page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of the contracted service" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide details of the service" page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of the service must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide details of the service" page for CDA
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#What date does the service expire on? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the date the service expires on" error summary
    When I select save and continue
#Date entered is yesterday's date
    When I choose to select "yesterday's date" on "What date does the service expire on?" page and choose to continue for CDA
    Then I should see "There is a problem" error message displayed
    And I should see "Date of expiry must be in the future" error summary
#Date entered is today's date
    When I choose to select "today's date" on "What date does the service expire on?" page and choose to continue for CDA
    Then I should see "There is a problem" error message displayed
    And I should see "Date of expiry must be in the future" error summary
#Date of issue entered is more than 100 years in the future
    When I choose to select "more than 100 years in the future" on "What date does the service expire on?" page and choose to continue for CDA
    Then I should see "There is a problem" error message displayed
    And I should see "Service expiry date must be less than 100 years in the future" error summary
#Date entered is has special character
    When I choose to select "1*/02/2050" on "What date does the service expire on?" page and choose to continue for CDA
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real date the service expires on" error summary
    When I choose to select "tomorrow's date" on "What date does the service expire on?" page and choose to continue for CDA
#What is the status of the site to be licensed? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you are providing a service under a contract" error summary



#******************************************************************* Test-4 *****************************************************************************************#
#  Site owner’s contact details page
#  Upload controlled drug user activity template page
#  Which of the following security features does the site have? page
#  Are controlled drugs kept in a separate room or zone? page
#  Are controlled drugs kept in a safe or cabinet? page
#  Are the controlled drugs kept in a prefabricated strong room? page
#  Give details of specifications, and any serial numbers that apply page
#  Are controlled drugs kept at this site? page
#  Provide details of where they are stored page
#  Does the site have an electronic alarm system page
#  Electronic alarm system details page
#  Is there a separate zone for the controlled drug cabinet, safe or store? page
#  Is the alarm system monitored by an offsite alarm receiving centre? page
#  Is the alarm system connected to the alarm receiving centre either by Redcare or by a dual-path communicator? page
#  Is the alarm system serviced annually? page
#  Does the alarm system have a police unique reference number (URN)? page
#  Does the alarm system have either a Level 1 or ‘immediate’ police response? page
#  Standard operating procedures page
#  Provide details of your record keeping system and procedures page
#  Invoicing address page
#  Invoicing contact details page
#  Which email address should we send the licence to? page
#  Who is completing the application? page
#  Add any extra information you think might help your application (optional) page
#  Declaration page

  @CslRegression
  Scenario: CDA Test-4 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Site owner’s contact details" page for CDA
#Site owner’s contact details page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the site owner's full name¬Enter an email address for the site owner¬Enter a contact telephone number for the site owner¬Enter an address for the site owner" error summary
#Entered less than 3 characters, Email address @ symbol at the end, enter invalid uk telephone number, more than 2000 characters entered for address
    When I complete the fields below with Site owner’s contact details for CDA:
      | Full name                | Ho                    |
      | Email address            | TesterTlf.com@        |
      | Contact telephone number |          -48081570192 |
      | Address                  | Enter 2001 characters |
    Then I should see "There is a problem" error message displayed
    And I should see "Site owner's full name must be between 3 and 200 characters¬Enter a real email address¬Enter a real telephone number, like 07700 900000 or +39 1 33 45 70 90¬Site owner's address must be 2,000 characters or less" error summary
#Enter email address short less than 6 characters and enter invalid UK telephone number 12 digits
    When I complete the fields below with Site owner’s contact details for CDA:
      | Full name                | Hof test            |
      | Email address            | T@t.c               |
      | Contact telephone number |        016148081588 |
      | Address                  | 1 Abc Leeds L12 8AS |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Enter a real telephone number, like 07700 900000 or +39 1 33 45 70 90" error summary
#Enter email does not have @ symbol
    When I complete the fields below with Site owner’s contact details for CDA:
      | Full name                | Hof test            |
      | Email address            | TesterTlf.com       |
      | Contact telephone number |         01614808158 |
      | Address                  | 1 Abc Leeds L12 8AS |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
    When I complete the fields below with Site owner’s contact details for CDA:
      | Full name                | Hoft                |
      | Email address            | Tester@Tlf.com      |
      | Contact telephone number |         01614808158 |
      | Address                  | 1 Abc Leeds L12 8AS |
    And I select save and continue on the Licence details page for CDA
    And I choose to complete the first activities page with "Possess" value and leave the rest of the activities uncompleted
#Upload controlled drug user activity template
#No file selected
    And I select save and continue on upload photo
    Then I should see "There is a problem" error message displayed
    And I should see "Select a file" error summary
#Upload a photo of yourself page: Upload the same file name again
    When I choose to upload "cslCdat.pdf" file
    And I choose to upload another "identification.pdf" file
    Then I should see "There is a problem" error message displayed
    And I should see "You may not add more than 1 file(s)" error summary
#Upload a photo of yourself page: File size too large when file size is greater than 20MB
    When I choose to upload "yourself25Mb.pdf" file
    Then I should see "The selected files must be smaller than 25MB" error for max upload file
#Upload a photo of yourself page: Incorrect file type, your photo must be a PDF file
    When I choose to upload "text.txt" file
    Then I should see "The selected file must be a PDF or Microsoft Word or Excel file" error for type of uploaded file
    When I choose to upload "cslCdat.pdf" file
    And I select save and continue on upload photo
#Which of the following security features does the site have? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select at least one security feature" error summary
    When I choose to select "Perimeter fencing" on "Which of the following security features does the site have?" page and choose to continue for CDA
#Are controlled drugs kept in a separate room or zone? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the controlled drugs are kept in a separate room or zone" error summary
    When I choose to select "Yes" on "Are controlled drugs kept in a separate room or zone?" page and choose to continue for CDA
#Are controlled drugs kept in a safe or cabinet? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the controlled drugs are kept in a safe or cabinet" error summary
    When I choose to select "No" on "Are controlled drugs kept in a safe or cabinet?" page and choose to continue for CDA
#Are the controlled drugs kept in a prefabricated strong room? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the controlled drugs are kept in a prefabricated strong room" error summary
    When I choose to select "Yes" on "Are the controlled drugs kept in a prefabricated strong room?" page and choose to continue for CDA
#Give details of specifications, and any serial numbers that apply page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of the prefabricated strong room's specifications" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Give details of specifications, and any serial numbers that apply" page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of specifications must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Give details of specifications, and any serial numbers that apply" page for CDA
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    And I select save and continue
#Are controlled drugs kept at this site? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if controlled drugs are kept at this site" error summary
    When I choose to select "No" on "Are controlled drugs kept at this site?" page and choose to continue for CDA
#Provide details of where they are stored page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Provide details of where the controlled drugs are stored" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide details of where they are stored" page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Storage details must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide details of where they are stored" page for CDA
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Does the site have an electronic alarm system page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the site has an electronic alarm system" error summary
    When I choose to select "Yes" on "Does the site have an electronic alarm system?" page and choose to continue for CDA
#Electronic alarm system details page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the alarm system's installing company name¬Enter the alarm system's installing company address¬Select who the installing company is registered with" error summary
#Installing company name is less than 3 characters and Installing company address is more 500 characters
    When I complete the fields below with Electronic alarm system details for CDA:
      | Installing company name                       | Ho                             |
      | Installing company address                    | Enter 501 characters           |
      | Who is the installing company registered with | National Security Inspectorate |
    Then I should see "There is a problem" error message displayed
    And I should see "Installing company name must be between 3 and 200 characters¬Installing company address must be 500 characters or less" error summary
    When I complete the fields below with Electronic alarm system details for CDA:
      | Installing company name                       | Hof test                       |
      | Installing company address                    |            1 Abc Leeds L12 8AS |
      | Who is the installing company registered with | National Security Inspectorate |
#Is there a separate zone for the controlled drug cabinet, safe or store? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if there is a separate zone for the controlled drug cabinet, safe or store" error summary
    When I choose to select "Yes" on "Is there a separate zone for the controlled drug cabinet, safe or store?" page and choose to continue for CDA
#Is the alarm system monitored by an offsite alarm receiving centre? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the alarm system is monitored by an offsite alarm receiving centre" error summary
    When I choose to select "Yes" on "Is the alarm system monitored by an offsite alarm receiving centre?" page and choose to continue for CDA
#Is the alarm system connected to the alarm receiving centre either by Redcare or by a dual-path communicator? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the alarm system is connected to the alarm receiving centre by Redcare or a dual-path communicator" error summary
    When I choose to select "Yes" on "Is the alarm system connected to the alarm receiving centre either by Redcare or by a dual-path communicator?" page and choose to continue for CDA
#Is the alarm system serviced annually? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the alarm system is serviced annually" error summary
    When I choose to select "Yes" on "Is the alarm system serviced annually?" page and choose to continue for CDA
#Does the alarm system have a police unique reference number (URN)? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the alarm system has a police unique reference number" error summary
    When I choose to select "Yes" on "Does the alarm system have a police unique reference number (URN)?" page and choose to continue for CDA
#Does the alarm system have either a Level 1 or ‘immediate’ police response? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the alarm system has a Level 1 or 'immediate' police response" error summary
    When I choose to select "Yes" on "Does the alarm system have either a Level 1 or ‘immediate’ police response?" page and choose to continue for CDA
#Standard operating procedures page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you have a set of standard operating procedures to cover business processes" error summary
    When I choose to select "yes" on "Standard operating procedures" page and choose to continue for CDA
#Provide details of your record keeping system and procedures page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of your record keeping system and procedures" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide details of your record keeping system and procedures" page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of record keeping system and procedures must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide details of your record keeping system and procedures" page for CDA
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
# Invoicing address page:
# No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter address line 1, typically the building and street¬Enter a town or city¬Enter a postcode" error summary
#Postcode entered in an invalid UK format
    When I complete the fields below with "Invoicing" address details for CDA:
      | Address line 1 |        12 |
      | Address line 2 | less than |
      | Town or City   | Leeds     |
      | Postcode       |    2L 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
#Postcode entered contains special characters (not including whitespace)
    When I complete the fields below with "Invoicing" address details for CDA:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L1! 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
    When I complete the fields below with "Invoicing" address details for CDA:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L12 1PP |
#Invoicing contact details page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter an invoicing contact name¬Enter an invoicing contact email address¬Enter an invoicing contact number" error summary
#Enter Full name is less than 3 characters, Email address short Contact email address is less than 6 characters and invalid UK telephone number
    When I complete the fields below with Invoicing contact details for CDA:
      | Full name             | HO         |
      | Email address         | T@t.c      |
      | UK telephone number   | 0161329600 |
      | Purchase order number |            |
    Then I should see "There is a problem" error message displayed
    And I should see "Invoicing contact name must be between 3 and 200 characters¬Enter a real email address¬Enter a real telephone number, like 07700 900000" error summary
#Enter invalid UK telephone number and Enter a real email address email does not have @ symbol
    When I complete the fields below with Invoicing contact details for CDA:
      | Full name             | HOf           |
      | Email address         | TesterHof.com |
      | UK telephone number   |    0161329600 |
      | Purchase order number |       1234562 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Enter a real telephone number, like 07700 900000" error summary
#Enter invalid UK telephone number and Email address @ symbol at the end and confirmation box not ticked
    When I complete the fields below with Invoicing contact details for CDA:
      | Full name             | HOf test       |
      | Email address         | Testerhof.com@ |
      | UK telephone number   |   -48081570192 |
      | Purchase order number |        1234562 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Enter a real telephone number, like 07700 900000" error summary
    When I complete the fields below with Invoicing contact details for CDA:
      | Full name             | HOf test       |
      | Email address         | Tester@hof.com |
      | UK telephone number   |    01613296000 |
      | Purchase order number |        1234562 |
#Which email address should we send the licence to? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter an email address where we should send the licence" error summary
#Enter Email address short Contact email address is less than 6 characters
    When I choose to select "T@t.c" on "Which email address should we send the licence to?" page and choose to continue for CDA
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
#Enter email address email does not have @ symbol
    When I choose to select "TesterHof.com" on "Which email address should we send the licence to?" page and choose to continue for CDA
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
#Enter email address @ symbol at the end and confirmation box not ticked
    When I choose to select "Testerhof.com@" on "Which email address should we send the licence to?" page and choose to continue for CDA
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
    When I choose to select "Hof@hof.com" on "Which email address should we send the licence to?" page and choose to continue for CDA
#Who is completing the application? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the full name of the person completing the application¬Enter an email address for the person completing the application¬Enter a UK telephone number for the person completing the form" error summary
#Enter Full name is less than 3 characters, Email address short Contact email address is less than 6 characters and invalid UK telephone number 10 digits
    When I complete the fields below with Who is completing the application for CDA:
      | Full name         | HO         |
      | Email address     | T@t.c      |
      | UK contact number | 0161329600 |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬Enter a real email address¬Enter a real UK telephone number, like 01632 960 001 or 07700 900 982" error summary
#Enter invalid UK telephone number and Enter a real email address email does not have @ symbol
    When I complete the fields below with Who is completing the application for CDA:
      | Full name         | HOf           |
      | Email address     | TesterHof.com |
      | UK contact number |    0161329600 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Enter a real UK telephone number, like 01632 960 001 or 07700 900 982" error summary
#Enter invalid UK telephone number and Email address @ symbol at the end and confirmation box not ticked
    When I complete the fields below with Who is completing the application for CDA:
      | Full name         | HOf test       |
      | Email address     | Testerhof.com@ |
      | UK contact number |   -48081570192 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Enter a real UK telephone number, like 01632 960 001 or 07700 900 982" error summary
    When I complete the fields below with Who is completing the application for CDA:
      | Full name         | HOf test       |
      | Email address     | Tester@hof.com |
      | UK contact number |    01616958563 |
##Add any extra information you think might help your application (optional) page
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Add any extra information you think might help your application (optional)" page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Extra information about your application must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Add any extra information you think might help your application (optional)" page for CDA
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
    And I select Confirm Submission on Check Your Answers Page CDA
#Declaration page
#No data entered in any of the fields
    When I select confirm and submit button
    Then I should see "There is a problem" error message displayed
    And I should see "You must confirm you agree with this declaration to submit the application" error summary





#   *************************** Existing licensee renewing or changing a currently licensed site ***************************
#  Has your Companies House reference number changed since your last application? page
#  Has your registered name at Companies House changed since your last application? page
#  Upload company registration certificate as evidence of name change page
#  Are you requesting a change in authorised witness for this site only? page
#  Are you requesting additional schedules? page
#  Are you requesting a change of activity? page

  @CslRegression
  Scenario: CDA Test-5 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Has your Companies House reference number changed since your last application?" page for CDA
#Has your Companies House reference number changed since your last application? page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if your Companies House reference number has changed since your last application" error summary
    When I choose to select "No" on "Has your Companies House reference number changed since your last application?" page and choose to continue for CDA
#Has your registered name at Companies House changed since your last application? page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if your registered name at Companies House has changed since your last application" error summary
    When I choose to select "Yes" on "Has your registered name at Companies House changed since your last application?" page and choose to continue for CDA
#Upload company registration certificate as evidence of name change page
#No file selected
    And I select save and continue on upload photo
    Then I should see "There is a problem" error message displayed
    And I should see "Select a file" error summary
#Upload a photo of yourself page: Upload the same file name again
    When I choose to upload "yourself1.JPEG" file
    And I choose to upload another "yourself1.JPEG" file
    Then I should see "There is a problem" error message displayed
    And I should see "A file with this name was already uploaded" error summary
#Upload a photo of yourself page: File size too large when file size is greater than 20MB
    When I choose to upload "yourself25Mb.pdf" file
    Then I should see "The selected files must be smaller than 25MB" error for max upload file
#Upload a photo of yourself page: Incorrect file type, your photo must be a JPG, PNG, GIF,  JPEG or PDF file
    When I choose to upload "text.txt" file
    Then I should see "The selected file must be a PNG, PDF, JPEG or Microsoft Word or Excel file" error for type of uploaded file
    When I choose to upload "yourself1.JPEG" file
    And I select save and continue on upload photo
#Are you requesting a change in authorised witness for this site only? page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you are requesting a change in authorised witness for this site only" error summary
    When I choose to select "Yes" on "Are you requesting a change in authorised witness for this site only?" page and choose to continue for CDA
#Are you requesting additional schedules? page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you are requesting additional schedules" error summary
    When I choose to select "Yes" on "Are you requesting additional schedules?" page and choose to continue for CDA
#Are you requesting a change of activity? page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you are requesting a change of activity" error summary
    When I choose to select "Yes" on "Are you requesting a change of activity?" page and choose to continue for CDA




#******************************************************************* Test-6 *****************************************************************************************#
#************************************ Existing licensee applying for a new site ************************************
#  Why are you requesting a new licence? page
#  When are you moving site? page

  Scenario: CDA Test-6 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Why are you requesting a new licence?" page for CDA
#Why are you requesting a new licence? page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select why you are requesting a new licence" error summary
    When I choose to select "We are moving site" on "Why are you requesting a new licence?" page and choose to continue for CDA
#When are you moving site? page:
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a moving date" error summary
##Enter today date error
    When I enter "Today's date" into "When are you moving site?" field and page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Moving date must be in the future" error summary
##Enter date in the past error
    When I enter "Yesterday's date" into "When are you moving site?" field and page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Moving date must be in the future" error summary
##Enter invalid date error
    When I enter "d1/10/2026" into "When are you moving site?" field and page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a moving date in the correct format" error summary




#******************************************************************* Test-7 *****************************************************************************************#
#  Is the new site part of a contractual agreement? page
#  When does the contract start? page
#  Tell us more about the contract and how it affects your licence application page

  Scenario: CDA Test-7 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Is the new site part of a contractual agreement?" page for CDA
#Is the new site part of a contractual agreement page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the new site is part of a contractual agreement" error summary
    When I choose to select "Yes" on "Is the new site part of a contractual agreement?" page and choose to continue for CDA
#When does the contract start page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a date" error summary
#Enter 100 year in the past date error
    When I enter "more than 1 year in the past" into "When does the contract start?" field and page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Contract start date must be within the past year" error summary
#Enter 100 year in the past in the future date error
    When I enter "more than 1 year in the future" into "When does the contract start?" field and page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Contract start date must be within the next year. Come back and re-apply later if you are applying for a new site more than 1 year in the future" error summary
#Enter invalid date error
    When I enter "dd/dd/11" into "When does the contract start?" field and page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a date in the correct format" error summary
    When I enter "Tomorrow's date" into "When does the contract start?" field and page for CDA
#Tell us more about the contract and how it affects your licence application page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details about the contract and how it affects your licence application" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2100" characters in the text area box field on "Tell us more about the contract and how it affects your licence application" page for CDA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details about the contract must be 2,000 characters or less" error summary
    And I should see "You have 100 characters too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "120" characters in the text area box field on "Tell us more about the contract and how it affects your licence application" page for CDA
    Then I should see "You have 1,880 characters remaining" count message displayed on the text area field