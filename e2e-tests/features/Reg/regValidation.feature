@CSL @REG @REG-V
Feature: CSL - Registration Form
#
#
# ****************************************************** Test-1 *************************************************************#
# Licence holder details page
# Licence holder address page
# Is the business a registered charity? page:
# Has your legal identity changed at Companies House in the last 3 years? page
# Under your previous legally registered identity, did you hold a controlled drugs licence? page
# Previous licence details page
# Business Type page
# Specify your business Type page
# What type of company is your organisation page
# Describe your business model page

  @CslRegression
  Scenario: Registration Test-1 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Licence holder details" page for REG
#No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a company name¬Enter the name of the person who will be responsible for the licence¬Enter a UK telephone number¬Enter an email address" error summary
#Enter less than 2 charters in Company name, invalid UK telephone number, invalid Email and invalid Website URL
    When I complete the fields below with Licence holder details for REG:
      | Company name               | H              |
      | Name of responsible person | H              |
      | Company number             |                |
      | UK telephone number        | $48081570192   |
      | Email address              | TesterTlf.com@ |
      | Website URL                | www.cikicyr.c  |
    Then I should see "There is a problem" error message displayed
    And I should see "Company name must be between 2 and 200 characters¬Name of the responsible person must between 3 and 200 characters¬Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address¬Enter a real website URL" error summary
#The Enter invalid UK telephone number and Email address short Contact email address is less than 6 characters
    When I complete the fields below with Licence holder details for REG:
      | Company name               | HO              |
      | Name of responsible person | HOFF            |
      | Company number             |          123456 |
      | UK telephone number        |      0161329600 |
      | Email address              | T@t.c           |
      | Website URL                | www.cikicyr.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real company number, like 16850062¬Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address" error summary
#Enter a real email address email does not have @ symbol
    When I complete the fields below with Licence holder details for REG:
      | Company name               | HO              |
      | Name of responsible person | HOF TEST        |
      | Company number             | AB123456        |
      | UK telephone number        |     01613296000 |
      | Email address              | TesterTlf.com   |
      | Website URL                | www.cikicyr.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
    When I complete the fields below with Licence holder details for REG:
      | Company name               | HO              |
      | Name of responsible person | HOF TEST        |
      | Company number             |        12345678 |
      | UK telephone number        |     01613296000 |
      | Email address              | Tester@hTlf.com |
      | Website URL                | www.cikicyr.com |
#Licence holder address page:
# No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a licence holder address¬Enter a town or city¬Enter a postcode" error summary
#Postcode entered in an invalid UK format
    When I complete the fields below with "Licence" holder address details for REG:
      | Address line 1 |        12 |
      | Address line 2 | less than |
      | Town or City   | Leeds     |
      | Postcode       |    2L 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
#Postcode entered contains special characters (not including whitespace)
    When I complete the fields below with "Licence" holder address details for REG:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L1! 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
    When I complete the fields below with "Licence" holder address details for REG:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L12 1PP |
# Is the business a registered charity? page
# No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the business is a registered charity" error summary
    When I choose to select "Yes" on "Is the business a registered charity?" page and choose to continue for REG
# Has your legal identity changed at Companies House in the last 3 years? page
# No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if your legal identity has changed in the last 3 years" error summary
    When I choose to select "Yes" on "Has your legal identity changed at Companies House in the last 3 years?" page and choose to continue for REG
# Under your previous legally registered identity, did you hold a controlled drugs licence? page
# No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you held a controlled drugs licence under your previous legal identity" error summary
    When I choose to select "Yes" on "Under your previous legally registered identity, did you hold a controlled drugs licence?" page and choose to continue for REG
#Previous Licence details page
#No data entered in any of the fields
    When I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter your previous licence number¬Enter the name of the company that held the previous licence¬Enter the date the previous licence was issued" error summary
#Previous licence number less than 3 chars, Licence holder name entered is less than 2 chars and date entered lowest value - 01/01/1925
    When I complete the fields below with Previous licence details for REG:
      | Previous licence number | Ho         |
      | Licence holder name     | D          |
      | Day month year          | 31/12/1924 |
    Then I should see "There is a problem" error message displayed
    And I should see "Previous licence number must be between 3 and 50 characters¬Previous licence holder name must be between 2 and 250 characters¬Date when the previous licence was issued must be within the last 100 years" error summary
#Date entered is in the Future date
    When I complete the fields below with Previous licence details for REG:
      | Previous licence number | Hof             |
      | Licence holder name     | DE              |
      | Day month year          | Tomorrow's date |
    Then I should see "There is a problem" error message displayed
    And I should see "Date the previous licence was issued must be in the past" error summary
#Enter special character in the date field
    When I complete the fields below with Previous licence details for REG:
      | Previous licence number | Hof        |
      | Licence holder name     | A12        |
      | Day month year          | !2/02/2025 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real date" error summary
    When I complete the fields below with Previous licence details for REG:
      | Previous licence number | Hof123456    |
      | Licence holder name     | Hof Test     |
      | Day month year          | today's date |
# Business type page
# No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a business type" error summary
    When I choose to select "Other" on "Business type" page and choose to continue for REG
# Specify your business Type page
# No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter your specific business type" error summary
# Enter less than 2 characters in Specify your business type field
    When I choose to select "H" on "Specify your business type" page and choose to continue for REG
    Then I should see "There is a problem" error message displayed
    And I should see "Business type must be between 2 and 250 characters" error summary
    When I choose to select "HO" on "Specify your business type" page and choose to continue for REG
    And I select continue on the What your business does page for REG
# What type of company is your organisation page
# No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select your organisation's company type" error summary
    When I choose to select "Other" on "What type of company is your organisation" page and choose to continue for REG
# Describe your business model page
#No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a description of your business model" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Describe your business model" page for REG
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Description of your business model must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Describe your business model" page for REG
    Then I should see "You have 1750 characters remaining" count message displayed on the text area field
#
#
# ****************************************************** Test-2 *************************************************************#
# Upload company registration certificate page
# Does your business possess any licences issued by the Medicines and Healthcare products Regulatory Agency (MHRA)? page
# Medicines and Healthcare Products Regulatory Agency (MHRA) licence details page
# Is your business registered with the Care Quality Commission or Scottish and Welsh equivalents? page
# Registration details for the Care Quality Commission (CQC) or Scottish and Welsh equivalents page
# Provide details of any other regulatory bodies you are registered with (optional) page
# Invoicing contact details page
# Invoicing address page
# Declaration page

  @CslRegression
  Scenario: Registration Test-2 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Upload company registration certificate" page for REG
#Upload company registration certificate page
#No file selected
    And I select continue on upload photo
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
#Upload a photo of yourself page: Incorrect file type, your photo must be a PNG, JPEG, PDF, Microsoft Word or Excel file
    When I choose to upload "text.txt" file
    Then I should see "The selected file must be a PNG, PDF, JPEG or Microsoft Word or Excel file" error for type of uploaded file
    When I choose to upload "yourself1.JPEG" file
    And I select continue on upload photo
#Does your business possess any licences issued by the Medicines and Healthcare products Regulatory Agency (MHRA)? page
#No file selected
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you have any licences issued by the Medicines and Healthcare Products Regulatory Agency" error summary
    When I choose to select "Yes" on "Does your business possess any licences issued by the Medicines and Healthcare products Regulatory Agency (MHRA)?" page and choose to continue for REG
#Medicines and Healthcare Products Regulatory Agency (MHRA) licence details page
#No data entered in any of the fields
    When I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a Medicines and Healthcare products Regulatory Agency licence number¬Enter a Medicines and Healthcare products Regulatory Agency licence type¬Enter the date the MHRA licence was issued" error summary
#Licence number less than 3 chars, Licence type entered is less than 3 chars and date entered is before 01/01/1925
    When I complete the fields below with Licence details for REG:
      | Licence number | Ho         |
      | Licence type   | A          |
      | Day month year | 31/12/1924 |
    Then I should see "There is a problem" error message displayed
    And I should see "Medicines and Healthcare products Regulatory Agency licence number must be between 3 and 50 characters¬Licence type must be between 3 and 250 characters¬MHRA licence must have been issued within the last 100 years" error summary
#Date entered is in the Future date
    When I complete the fields below with Licence details for REG:
      | Licence number | Hof             |
      | Licence type   | A12             |
      | Day month year | Tomorrow's date |
    Then I should see "There is a problem" error message displayed
    And I should see "MHRA licence date of issue must be in the past" error summary
#Enter special character in the date field
    When I complete the fields below with Licence details for REG:
      | Licence number | Hof        |
      | Licence type   | A12        |
      | Day month year | !2/02/2025 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real date when the MHRA licence was issued" error summary
    When I complete the fields below with Licence details for REG:
      | Licence number | Hof123456        |
      | Licence type   | Ab123456         |
      | Day month year | Yesterday's date |
# Is your business registered with the Care Quality Commission or Scottish and Welsh equivalents? page
#No data entered in any of the fields
    When I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you have registered with the Care Quality Commission or its Scottish and Welsh equivalents" error summary
    When I choose to select "Yes" on "Is your business registered with the Care Quality Commission or Scottish and Welsh equivalents?" page and choose to continue for REG
# Registration details for the Care Quality Commission (CQC) or Scottish and Welsh equivalents page
#No data entered in any of the fields
    When I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter your CQC or equivalent registration number¬Enter the date your organisation registered with the CQC or its equivalents" error summary
#Registration number less than 3 chars and date entered is before 01/01/1925
    When I complete the fields below with Registration details for REG:
      | Registration number | Ho         |
      | Day month year      | 31/12/2002 |
    Then I should see "There is a problem" error message displayed
    And I should see "Registration number must be between 3 and 50 characters¬Date of registration must be on or after 1 January 2003" error summary
#Date entered is in the Future date
    When I complete the fields below with Registration details for REG:
      | Registration number | Hof             |
      | Day month year      | Tomorrow's date |
    Then I should see "There is a problem" error message displayed
    And I should see "Date you registered with the CQC or its equivalents must be in the past" error summary
#Date entered is in the Future date
    When I complete the fields below with Registration details for REG:
      | Registration number | Hof        |
      | Day month year      | !2/02/2025 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real date when you registered with the CQC or its equivalents" error summary
    When I complete the fields below with Registration details for REG:
      | Registration number | Hof          |
      | Day month year      | Today's date |
# Provide details of any other regulatory bodies you are registered with (optional) page
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide details of any other regulatory bodies you are registered with (optional)" page for REG
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of other regulatory bodies you are registered with must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide details of any other regulatory bodies you are registered with (optional)" page for REG
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    And I select continue
#Invoicing contact details page
#No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter an invoicing contact name¬Enter an invoicing telephone number¬Enter an invoicing email address" error summary
#Enter Full name is less than 3 characters, Email address short Contact email address is less than 6 characters and invalid UK telephone number
    When I complete the fields below with Invoicing contact details for REG:
      | Contact name          | HO         |
      | Contact phone number  | 0161329600 |
      | Invoice email address | T@t.c      |
      | Purchase order number |            |
    Then I should see "There is a problem" error message displayed
    And I should see "Invoicing contact name must be between 3 and 200 characters¬Enter a real telephone number¬Enter a real email address" error summary
#Enter invalid UK telephone number and Enter a real email address email does not have @ symbol
    When I complete the fields below with Invoicing contact details for REG:
      | Contact name          | HOf           |
      | Contact phone number  |    0161329600 |
      | Invoice email address | TesterHof.com |
      | Purchase order number |       1234562 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real telephone number¬Enter a real email address" error summary
    When I complete the fields below with Invoicing contact details for REG:
      | Contact name          | HOf            |
      | Contact phone number  |    01613296000 |
      | Invoice email address | Tester@Hof.com |
      | Purchase order number |        1234562 |
# Invoicing address page:
# No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter address line 1, typically the building and street¬Enter town or city¬Enter a postcode" error summary
#Postcode entered in an invalid UK format
    When I complete the fields below with "Invoicing" address details for REG:
      | Address line 1 |        12 |
      | Address line 2 | less than |
      | Town or City   | Leeds     |
      | Postcode       |    2L 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
#Postcode entered contains special characters (not including whitespace)
    When I complete the fields below with "Invoicing" address details for REG:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L1! 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
    When I complete the fields below with "Invoicing" address details for REG:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L12 1PP |
    Then I am navigated to "Check your answers before submitting your registration" page
    When I select continue
#Declaration page
#No data entered in any of the fields
    Then I am navigated to "Declaration" page
    When I select submit registration button
    Then I should see "There is a problem" error message displayed
    And I should see "Confirm you have read and agree to this declaration" error summary
