@CSL @PCA @PCA-V
Feature: CSL - Precursor chemicals application form
#
#
#************************************************************ Test-1 *************************************************************************
# What type of licence are you applying for? page
# How are you applying for your precursor chemicals licence? page
# Enter your application reference number page
# Licence holder details page
# Licence holder address page
# Is the premises address the same as the licence holder address page
# Premises address page
# Premises contact details page
# Responsible officer details page
# DBS information for the responsible officer page
# Has the responsible officer subscribed to DBS updates page

  @CslRegression
  Scenario: PCA Test-1 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "How would you like to apply?" page for PCA
#What type of licence are you applying for? page:
#No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select what type of licence are you applying for" error summary
    When I choose to select "Precursor chemicals" on "What type of licence are you applying for?" page and choose to continue for PCA
#How are you applying for your precursor chemicals licence? page:
#No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select how you are applying for your precursor chemicals licence" error summary
    When I choose to select "Amend a pending application" on "How are you applying for your precursor chemicals licence?" page and choose to continue for PCA
#Enter your application reference number page:
#No data entered in application reference number fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter an application reference number" error summary
#Application reference number is less than 2 digits
    When I choose to enter "1" as application reference number on "How are you applying for your precursor chemicals licence?" page and choose to continue for PCA
    Then I should see "There is a problem" error message displayed
    And I should see "Application reference number must be between 2 and 8 numeral characters" error summary
#Application reference number has letter
    When I choose to enter "112A" as application reference number on "How are you applying for your precursor chemicals licence?" page and choose to continue for PCA
    Then I should see "There is a problem" error message displayed
    And I should see "Application reference number must not include letters a to z or special characters" error summary
    When I choose to enter "11223344" as application reference number on "How are you applying for your precursor chemicals licence?" page and choose to continue for PCA
#  Licence holder details page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a company name¬Enter a UK telephone number¬Enter an email address" error summary
#Enter less than 2 charters in Company name, invalid UK telephone number, invalid Email and invalid Website URL
    When I complete the fields below with Licence holder details for PCA:
      | Company name        | H              |
      | Company number      |                |
      | UK telephone number | $48081570192   |
      | Email address       | TesterTlf.com@ |
      | Website URL         | www.cikicyr.c  |
    Then I should see "There is a problem" error message displayed
    And I should see "Company name must be between 2 and 200 characters¬Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address¬Enter a real website URL" error summary
#Enter invalid UK telephone number and Email address short Contact email address is less than 6 characters
    When I complete the fields below with Licence holder details for PCA:
      | Company name        | HO              |
      | Company number      |                 |
      | UK telephone number |      0161329600 |
      | Email address       | T@t.c           |
      | Website URL         | www.cikicyr.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address" error summary
#Enter a real email address email does not have @ symbol
    When I complete the fields below with Licence holder details for PCA:
      | Company name        | HO              |
      | Company number      |                 |
      | UK telephone number |     01613296000 |
      | Email address       | TesterTlf.com   |
      | Website URL         | www.cikicyr.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
    When I complete the fields below with Licence holder details for PCA:
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
    When I complete the fields below with "Licence" holder address details for PCA:
      | Address line 1 |        12 |
      | Address line 2 | less than |
      | Town or City   | Leeds     |
      | Postcode       |    2L 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
#Postcode entered contains special characters (not including whitespace)
    When I complete the fields below with "Licence" holder address details for PCA:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L1! 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
    When I complete the fields below with "Licence" holder address details for PCA:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L11 1PP |
# Is the premises address the same as the licence holder address page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if your contact details are the same for your licence and business address" error summary
    When I choose to select "No" on "Is the premises address the same as the licence holder address?" page and choose to continue for PCA
    And I select save and continue
#Premises address page
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a premises address¬Enter a town or city¬Enter a postcode" error summary
#Postcode entered in an invalid UK format
    When I complete the fields below with "Premises" address details for PCA:
      | Address line 1 |        12 |
      | Address line 2 | less than |
      | Town or City   | Leeds     |
      | Postcode       |    2L 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
#Postcode entered contains special characters (not including whitespace)
    When I complete the fields below with "Premises" address details for PCA:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L1! 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
    When I complete the fields below with "Premises" address details for PCA:
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
    When I complete the fields below with Premises contact details for PCA:
      | UK telephone number |   -48081570192 |
      | Email address       | TesterTlf.com@ |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address" error summary
#Enter invalid UK telephone number 12 digits and Email address short less than 6 characters
    When I complete the fields below with Premises contact details for PCA:
      | UK telephone number | 016148081588 |
      | Email address       | T@t.c        |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address" error summary
#Enter invalid UK telephone number and email does not have @ symbol
    When I complete the fields below with Premises contact details for PCA:
      | UK telephone number |  01614808158F |
      | Email address       | TesterTlf.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address" error summary
    When I complete the fields below with Premises contact details for PCA:
      | UK telephone number |    01614808158 |
      | Email address       | Tester@Tlf.com |
    And I select save and continue
# Responsible officer details page    
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the responsible officer’s name¬Enter the responsible officer’s email¬Confirm if the Responsible Officer has applied for or currently holds a DBS certificate" error summary
#Enter Email address @ symbol at the end and confirmation box not ticked
    When I complete the fields below with "Responsible officer details" for PCA:
      | Full name         | H              |
      | Email address     | TesterTlf.com@ |
      | Confirm check box | Not ticked     |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Confirm if the Responsible Officer has applied for or currently holds a DBS certificate" error summary
#Enter email address short less than 6 characters and confirmation box not ticked
    When I complete the fields below with "Responsible officer details" for PCA:
      | Full name         | H          |
      | Email address     | T@t.c      |
      | Confirm check box | Not ticked |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Confirm if the Responsible Officer has applied for or currently holds a DBS certificate" error summary
#Enter email does not have @ symbol and confirmation box not ticked
    When I complete the fields below with "Responsible officer details" for PCA:
      | Full name         | H             |
      | Email address     | TesterTlf.com |
      | Confirm check box | Not ticked    |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Confirm if the Responsible Officer has applied for or currently holds a DBS certificate" error summary
    When I complete the fields below with "Responsible officer details" for PCA:
      | Full name         | HOF            |
      | Email address     | Tester@Tlf.com |
      | Confirm check box | Ticked         |
    And I select save and continue
#DBS information for the responsible officer page
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the name as it appears on the DBS certificate¬Enter a DBS reference¬Enter a date of issue or application" error summary
#Full name and DBS reference are less than 3 characters, More 3 years entered in the Day month year field
    When I complete the fields below with "DBS information" for the responsible officer for PCA:
      | Full name      | Ho                    |
      | DBS reference  |                    12 |
      | Day month year | More than 3 years ago |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬DBS reference must be between 3 and 25 characters¬Date of issue or application must be within the last 3 years" error summary
#Entere special character in DBS reference and date fields
    When I complete the fields below with "DBS information" for the responsible officer for PCA:
      | Full name      | Hof        |
      | DBS reference  | %A12       |
      | Day month year | !1/01/2009 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real DBS certificate number or application reference number¬Enter a date of issue or application in the correct format" error summary
    When I complete the fields below with "DBS information" for the responsible officer for PCA:
      | Full name      | Hof Test                |
      | DBS reference  |                11234556 |
      | Day month year | Within the last 3 years |
    And I select save and continue
#Has the responsible officer subscribed to DBS updates? page
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the responsible officer has subscribed to DBS updates" error summary
#
#
#************************************************************ Test-2 *************************************************************************
# Guarantor details page
# Guarantor DBS information page
# Has the guarantor subscribed to DBS updates page
# Has anyone employed by your company ever received criminal convictions page
# Invoicing address page
# Invoicing contact details page
# Section: About the licence
# Which category is the substance?
# Which chemical are you applying for? page
# Which operation applies to this licence for X?
# What Other Operations Applies To The Licence page

  Scenario: PCA Test-2 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Guarantor details" page for PCA
    And I select save and continue
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Enter guarantor’s name¬Enter an email address¬Confirm if the Guarantor has applied for or currently holds a DBS certificate" error summary
#Full name entered is less than 3 characters and enter Email address @ symbol at the end and confirmation box not ticked
    When I complete the fields below with "Guarantor details" for PCA:
      | Full name         | Ho             |
      | Email address     | TesterTlf.com@ |
      | Confirm check box | Not ticked     |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬Enter a real email address¬Confirm if the Guarantor has applied for or currently holds a DBS certificate" error summary
#Enter email address short less than 6 characters and confirmation box not ticked
    When I complete the fields below with "Guarantor details" for PCA:
      | Full name         | Hof Test   |
      | Email address     | T@t.c      |
      | Confirm check box | Not ticked |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Confirm if the Guarantor has applied for or currently holds a DBS certificate" error summary
#Enter email does not have @ symbol and confirmation box not ticked
    When I complete the fields below with "Guarantor details" for PCA:
      | Full name         | Hof           |
      | Email address     | TesterTlf.com |
      | Confirm check box | Not ticked    |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Confirm if the Guarantor has applied for or currently holds a DBS certificate" error summary
    When I complete the fields below with "Guarantor details" for PCA:
      | Full name         | Hof Test       |
      | Email address     | Tester@hof.com |
      | Confirm check box | ticked         |
    And I select save and continue
#Guarantor DBS information page
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a name as it appears on the guarantor’s DBS certificate¬Enter a DBS reference¬Enter a date of issue or application" error summary
#Full name entered is less than 3 characters, DBS is less than 3 chars and More 3 years entered in the Day month year field
    When I complete the fields below with "Guarantor DBS" information for PCA:
      | Full name      | Ho                    |
      | DBS reference  |                    98 |
      | Day month year | More than 3 years ago |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬DBS reference must be between 3 and 25 characters¬Date of issue or application must be within the last 3 years" error summary
#Enter special character in DBS reference and date fields
    When I complete the fields below with "Guarantor DBS" information for PCA:
      | Full name      | Hof        |
      | DBS reference  | "A12       |
      | Day month year | *1/01/2009 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real DBS certificate number or application reference number¬Enter a date of issue or application in the correct format" error summary
    When I complete the fields below with "Guarantor DBS" information for PCA:
      | Full name      | Hof                     |
      | DBS reference  |                     123 |
      | Day month year | Within the last 3 years |
    And I select save and continue
#Has the guarantor subscribed to DBS updates? page
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the guarantor has subscribed to DBS updates" error summary
    When I choose to select "Yes" on "Has the guarantor subscribed to DBS updates?" page and choose to continue for PCA
    And I select save and continue
#  Has anyone employed by your company ever received criminal convictions page    
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Select if anyone in your company has received criminal convictions" error summary
    When I choose to select "Yes" option on the "Has anyone employed by your company ever received criminal convictions?" page for PCA
#Invoicing address page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter an invoicing address¬Enter a town or city¬Enter a postcode" error summary
#Postcode entered in an invalid UK format
    When I complete the fields below with "Invoicing" address details for PCA:
      | Address line 1 |        12 |
      | Address line 2 | less than |
      | Town or City   | Leeds     |
      | Postcode       |    2L 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
#Postcode entered contains special characters (not including whitespace)
    When I complete the fields below with "Invoicing" address details for PCA:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L1! 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
    When I complete the fields below with "Invoicing" address details for PCA:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L12 1PP |
#Invoicing contact details page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a full name¬Enter an email address¬Enter a UK telephone number" error summary
#Enter invalid UK telephone number and Email address short Contact email address is less than 6 characters
    When I complete the fields below with Invoicing contact details for PCA:
      | Full name             | HO         |
      | Email address         | T@t.c      |
      | UK telephone number   | 0161329600 |
      | Purchase order number |            |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192" error summary
#Enter invalid UK telephone number and Enter a real email address email does not have @ symbol
    When I complete the fields below with Invoicing contact details for PCA:
      | Full name             | HO            |
      | Email address         | TesterHof.com |
      | UK telephone number   |    0161329600 |
      | Purchase order number |       1234562 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192" error summary
#Enter invalid UK telephone number and Email address @ symbol at the end and confirmation box not ticked
    When I complete the fields below with Invoicing contact details for PCA:
      | Full name             | HO             |
      | Email address         | Testerhof.com@ |
      | UK telephone number   |   -48081570192 |
      | Purchase order number |        1234562 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192" error summary
    When I complete the fields below with Invoicing contact details for PCA:
      | Full name             | HO             |
      | Email address         | Tester@hof.com |
      | UK telephone number   |    01612544586 |
      | Purchase order number |        1234562 |
    And I select save and continue
#  What Other Operations Applies To The Licence page    
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Select a category for the new substance" error summary
    When I choose to select "Category 1" on "Which category is the substance?" page and choose to continue for PCA
    And I select save and continue
#Which chemical are you applying for? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select a chemical from the list" error summary
    When I enter "Safrole (2932 9400)" into "Which chemical are you applying for?" field and page for PCA
    And I select save and continue
#Which operation applies to this licence for X? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select the operation this licence is for" error summary
    When I choose to select "Other" on "Which operation applies to this licence for X" page and choose to continue for PCA
#What Other Operations Applies To The Licence page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter an operation" error summary
#
#
#************************************************************ Test-3 *************************************************************************
#Which chemical are you applying for? page - own chemical path

  @CslRegression
  Scenario: PCA Test-3 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Which category is the substance" page for PCA
    And I choose to select "Category 1" on "Which category is the substance?" page and choose to continue for PCA
#Which chemical are you applying for? page - own chemical path
#No data entered in any of the fields
    And "View our full list of" link is displayed on the page for PCA
    When I select "View our full list of" link on page
    Then the link opens in a new tab and URL is loaded
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select a chemical from the list" error summary
    When I select "I want to enter my own chemical name" checkbox on "Which chemical are you applying for?" page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the chemical name" error summary

#
#
#************************************************************ Test-4 *************************************************************************
# Upload company registration certificate page
# Tell us about your main customers page
# Tell us about your main suppliers page
# What security measures do you have in place at the premises page
# Describe how you make sure chemicals are stored and handled securely page

  @CslRegression
  Scenario: PCA Test-4 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Upload company registration certificate" page for PCA
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
#Upload a photo of yourself page: Incorrect file type, your photo must be a JPG, PNG, GIF,  JPEG or PDF file
    When I choose to upload "text.txt" file
    Then I should see "The selected file must be a PNG, PDF, JPEG or Microsoft Word or Excel file" error for type of uploaded file
    When I choose to upload "yourself1.JPEG" file
    And I select continue on upload photo
#Upload company registration certificate page
#No file selected
    And I select continue on upload photo
    Then I should see "There is a problem" error message displayed
    And I should see "Select a file" error summary
#Upload a photo of yourself page: Upload the same file name again
    When I choose to upload "yourself.png" file
    And I choose to upload another "yourself.png" file
    Then I should see "There is a problem" error message displayed
    And I should see "A file with this name was already uploaded" error summary
#Upload a photo of yourself page: File size too large when file size is greater than 20MB
    When I choose to upload "yourself25Mb.pdf" file
    Then I should see "The selected files must be smaller than 25MB" error for max upload file
#Upload a photo of yourself page: Incorrect file type, your photo must be a JPG, PNG, GIF,  JPEG or PDF file
    When I choose to upload "text.txt" file
    Then I should see "The selected file must be a PNG, PDF, JPEG or Microsoft Word or Excel file" error for type of uploaded file
    When I choose to upload "yourself.png" file
    And I select save and continue
#Tell us about your main customers page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of your main customers" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Tell us about your main customers" page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "You have exceeded the 2000 character limit" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Tell us about your main customers" page for PCA
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Tell us about your main suppliers page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of your main suppliers" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2002" characters in the text area box field on "Tell us about your main suppliers" page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "You have exceeded the 2000 character limit" error summary
    And I should see "You have 2 characters too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "150" characters in the text area box field on "Tell us about your main suppliers" page for PCA
    Then I should see "You have 1,850 characters remaining" count message displayed on the text area field
    When I select save and continue
#What security measures do you have in place at the premises page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select which security measures you have in place" error summary
    When I choose to select "CCTV system (centrally monitored)" on "What security measures do you have in place at the premises?" page and choose to continue for PCA
#Describe how you secure your premises page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of how you secure your premises" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Describe how you secure your premises" page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "You have exceeded the 2000 character limit" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Describe how you secure your premises" page for PCA
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Describe how you make sure chemicals are stored and handled securely page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of how you make sure chemicals are stored and handled correctly" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Describe how you make sure chemicals are stored and handled securely" page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "You have exceeded the 2000 character limit" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "2" characters in the text area box field on "Describe how you make sure chemicals are stored and handled securely" page for PCA
    Then I should see "You have 1,998 characters remaining" count message displayed on the text area field

#
#
#************************************************************ Test-5 *************************************************************************
# Describe how you manage chemical stock control page
# Describe how you work to make sure end products are used legitimately page
# Summarise your standard operating procedures and auditing practices for the use or disposal of chemicals page
#Section: Finalize application
# Which email address should the licence be sent to page
# Who is completing the application page
# Will the regulatory affairs and compliance officer discharge all licence responsibilities page
# Add any extra information you think might help your application (optional) page
# Declaration page

  Scenario: PCA Test-5 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Describe how you manage chemical stock control" page for PCA
#Describe how you manage chemical stock control page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of how you manage chemical stock control" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2100" characters in the text area box field on "Describe how you manage chemical stock control" page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "You have exceeded the 2000 character limit" error summary
    And I should see "You have 100 characters too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "1" characters in the text area box field on "Describe how you manage chemical stock control" page for PCA
    Then I should see "You have 1,999 characters remaining" count message displayed on the text area field
    When I select save and continue
#Describe how you work to make sure end products are used legitimately page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of how you make sure end products are used legitimately" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2100" characters in the text area box field on "Describe how you work to make sure end products are used legitimately" page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "You have exceeded the 2000 character limit" error summary
    And I should see "You have 100 characters too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "2000" characters in the text area box field on "Describe how you work to make sure end products are used legitimately" page for PCA
    Then I should see "You have 0 characters remaining" count message displayed on the text area field
    When I select save and continue
#Summarise your standard operating procedures and auditing practices for the use or disposal of chemicals page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a summary of your standard operating procedures and auditing practices for the use and disposal of chemicals" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    And I select save and continue
    When I enter "2100" characters in the text area box field on "Summarise your standard operating procedures and auditing practices for the use or disposal of chemicals" page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "You have exceeded the 2000 character limit" error summary
    And I should see "You have 100 characters too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "120" characters in the text area box field on "Summarise your standard operating procedures and auditing practices for the use or disposal of chemicals" page for PCA
    Then I should see "You have 1,880 characters remaining" count message displayed on the text area field
    And I select save and continue
#  Which email address should the licence be sent to page    
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter an email address" error summary
#Enter Email address @ symbol at the end
    When I enter "TesterTlf.com@" into the email field on "Which email address should the licence be sent to?" page for PCA
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
#Enter email address short less than 6 characters
    When I enter "T@t.c" into the email field on "Which email address should the licence be sent to?" page for PCA
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
#Enter email does not have @ symbol
    When I enter "TesterTlf.com" into the email field on "Which email address should the licence be sent to?" page for PCA
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
#Enter email does not have @ symbol
    When I enter "Tester@Tlf.com" into the email field on "Which email address should the licence be sent to?" page for PCA
#Who is completing the application? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a full name¬Enter a UK telephone number¬Enter an email address" error summary
#Full name entered is less than 3 characters and Enter invalid UK telephone number and email address @ symbol at the end
    When I complete the fields below with Who is completing the application details for PCA:
      | Full name           | HO             |
      | UK telephone number |   -48081570192 |
      | Email address       | Testerhof.com@ |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address" error summary
#Enter invalid UK telephone number short number and email address short less than 6 characters
    When I complete the fields below with Who is completing the application details for PCA:
      | Full name           | HOF       |
      | UK telephone number | 016115701 |
      | Email address       | a@b.c     |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address" error summary
#Enter invalid UK telephone number more than 11 numbers and email address does not have @ symbol
    When I complete the fields below with Who is completing the application details for PCA:
      | Full name           | Hof Test      |
      | UK telephone number |  016162662622 |
      | Email address       | Testerhof.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address" error summary
    When I complete the fields below with Who is completing the application details for PCA:
      | Full name           | Hof Test       |
      | UK telephone number |    01616266262 |
      | Email address       | Tester@hof.com |
#Will the regulatory affairs and compliance officer discharge all licence responsibilities? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the regulatory affairs and compliance officer will discharge all licence responsibilities" error summary
#No data entered in any of the fields
    When I complete the fields below with Will the regulatory affairs and compliance officer discharge all licence responsibilities details for PCA:
      | Radio Option | No |
      | Text Area    |    |
    Then I should see "There is a problem" error message displayed
    And I should see "You must explain why the officer will not discharge all licence responsibilities" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2100" characters in the text area box field on "Will the regulatory affairs and compliance officer discharge all licence responsibilities?" page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Reason why the officer will not discharge all licence responsibilities must be 2,000 characters or less" error summary
    And I should see "You have 100 characters too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "120" characters in the text area box field on "Will the regulatory affairs and compliance officer discharge all licence responsibilities?" page for PCA
    Then I should see "You have 1,880 characters remaining" count message displayed on the text area field
    When I select save and continue
##Add any extra information you think might help your application (optional) page
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2100" characters in the text area box field on "Add any extra information you think might help your application (optional)" page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Extra information must be 2,000 characters or less" error summary
    And I should see "You have 100 characters too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "150" characters in the text area box field on "Add any extra information you think might help your application (optional)" page for PCA
    Then I should see "You have 1,850 characters remaining" count message displayed on the text area field
#No data entered in any of the fields
    When I enter "0" characters in the text area box field on "Add any extra information you think might help your application (optional)" page for PCA
    And I select save and continue
    Then I am navigated to "Summary" page
    When I select save and continue
#Declaration page
#No data entered in any of the fields
    Then I am navigated to "Declaration" page
    When I select confirm and submit button
    Then I should see "There is a problem" error message displayed
    And I should see "Confirm that you understand and accept this declaration" error summary
#
#    
#************************************************************ Test-6 *************************************************************************
#------------------------------- Start of Existing licensee renewing or changing a currently held licence -------------------------------#
#   Has your Companies House reference number changed since your last application page
#   Has your registered name at Companies House changed since your last application page
#   Upload company registration certificate as evidence of name change page

  Scenario: PCA Test-6 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Has your Companies House reference number changed since your last application?" page for PCA
#Has your Companies House reference number changed since your last application? page:
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if your Companies House reference number has changed since your last application" error summary
    When I choose to select "No" on "Has your Companies House reference number changed since your last application?" page and choose to continue for PCA
#Has your registered name at Companies House changed since your last application? page:
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if your registered name at Companies House has changed since your last application" error summary
    When I choose to select "Yes" on "Has your registered name at Companies House changed since your last application?" page and choose to continue for PCA
#Upload company registration certificate as evidence of name change page
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
#Upload a photo of yourself page: Incorrect file type, your photo must be a JPG, PNG, GIF,  JPEG or PDF file
    When I choose to upload "text.txt" file
    Then I should see "The selected file must be a PNG, PDF, JPEG or Microsoft Word or Excel file" error for type of uploaded file
#
#
#************************************************************ Test-7 *************************************************************************
#------------------------------- Start of Existing licensee renewing or changing a currently -------------------------------#
#  Upload your Companies House details
#  Are you requesting to change the responsible person or guarantor for this site only
#  Are you requesting an additional category
#  Are you requesting a change of substance or operation pages

  Scenario: PCA Test-7 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Has your Companies House reference number changed since your last application?" page for PCA
    And I choose to select "No" on "Has your Companies House reference number changed since your last application?" page and choose to continue for PCA
    And I choose to select "No" on "Has your registered name at Companies House changed since your last application?" page and choose to continue for PCA
#Upload your Companies House details page
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
#Upload a photo of yourself page: Incorrect file type, your photo must be a JPG, PNG, GIF,  JPEG or PDF file
    When I choose to upload "text.txt" file
    Then I should see "The selected file must be a PNG, PDF, JPEG or Microsoft Word or Excel file" error for type of uploaded file
    When I choose to upload "yourself1.JPEG" file
    And I select continue on upload photo
#Are you requesting to change the responsible person or guarantor for this site only? page
#No file selected
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you are requesting to change the responsible person or guarantor for this site only" error summary
    When I choose to select "Yes" on "Are you requesting to change the responsible person or guarantor for this site only?" page and choose to continue for PCA
#Are you requesting an additional category? page
#No file selected
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you are requesting an additional category" error summary
    When I choose to select "Yes" on "Are you requesting an additional category?" page and choose to continue for PCA
#Are you requesting a change of substance or operation? page
#No file selected
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you are requesting a change of substance or operation" error summary
    When I choose to select "Yes" on "Are you requesting a change of substance or operation?" page and choose to continue for PCA
#
#
#************************************************************ Test-8 *************************************************************************
#------------------------------- Start of Existing licensee applying for a new site -------------------------------#
#  Why are you requesting a new license
#  when are you moving site page

  @CslRegression
  Scenario: PCA Test-8 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Why are you requesting a new license?" page for PCA
#Why are you requesting a new license page:
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select why you are requesting a new licence" error summary
    When I choose to select "We are moving site" on "Why are you requesting a new license?" page and choose to continue for PCA
#When are you moving site? page:
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a moving date" error summary
##Enter today date error
    When I enter "Today's date" into "When are you moving site?" field and page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Moving date must be in the future" error summary
##Enter date in the past error
    When I enter "Yesterday's date" into "When are you moving site?" field and page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Moving date must be in the future" error summary
##Enter invalid date error
    When I enter "dd/dd/11" into "When are you moving site?" field and page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a moving date in the correct format" error summary
#
#
#************************************************************ Test-9 *************************************************************************
#  Is the new site part of a contractual agreement page
#  When does the contract start page
#  Tell us more about the contract and how it affects your licence application page

  Scenario: PCA Test-9 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Is the new site part of a contractual agreement?" page for PCA
#Is the new site part of a contractual agreement page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if it is part of a contractual agreement" error summary
    When I choose to select "Yes" on "Is the new site part of a contractual agreement?" page and choose to continue for PCA
#When does the contract start page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a date" error summary
#Enter 100 year in the past date error
    When I enter "more than 1 year in the past" into "When does the contract start?" field and page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Contract start date must be within the past year" error summary
#Enter 100 year in the past in the future date error
    When I enter "more than 1 year in the future" into "When does the contract start?" field and page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Contract start date must be within the next year. Come back and re-apply later if you are applying for a new site more than 1 year in the future" error summary
#Enter invalid date error
    When I enter "dd/dd/11" into "When does the contract start?" field and page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a date in the correct format" error summary
    When I enter "Tomorrow's date" into "When does the contract start?" field and page for PCA
#Tell us more about the contract and how it affects your licence application page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter more detail about the contract and how it affects your application" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2100" characters in the text area box field on "Tell us more about the contract and how it affects your licence application" page for PCA
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "You have exceeded the 2000 character limit" error summary
    And I should see "You have 100 characters too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "120" characters in the text area box field on "Tell us more about the contract and how it affects your licence application" page for PCA
    Then I should see "You have 1,880 characters remaining" count message displayed on the text area field
