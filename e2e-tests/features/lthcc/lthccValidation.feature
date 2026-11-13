@CSL @LTHCC @LTHCC-V
Feature: CSL - Low THC Cannabis Application form


#************************************************************ Test-1 *************************************************************************
# Sign in to apply for a domestic licence to produce, supply or possess controlled drugs page
# What type of licence are you applying for page
# How are you applying for your low THC cannabis license? page
# Enter your application reference number page
# Licence holder details page
# Licence holder address page
# Address of the growing location where the low THC cannabis will be cultivated page
# Growing location contact details page
# Details of the responsible person for the site page
# DBS information for the responsible person
# Has the responsible person subscribed to DBS updates?
# Do you require somebody within your company to be authorised to witness the destruction of the plant?
# How will the leaves and flowers be destroyed?
# Authorised witness details page
# DBS information for authorised witness page
# Has the responsible person subscribed to DBS updates? page
# Has anyone in your organisation ever been subject to legal business proceedings? page
# Provide details of the legal business proceedings page
# Has anyone in your organisation ever received a criminal conviction? page
# Do you hold any Home Office or other regulatory licenses? page
# Licence details page
# Has your organisation ever been refused a licence?
# Details of why you were refused a licence
# What type of company is your organisation
# Upload company registration certificate

  @CslRegression
  Scenario: LTHCC Test-1 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "What type of licence are you applying for?" page for LTHCC
#What type of licence are you applying for? page:
#No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select what type of licence are you applying for" error summary
    When I choose to select "Low THC cannabis (industrial hemp)" on "What type of licence are you applying for?" page and choose to continue for LTHCC
#How are you applying for your low THC cannabis license? page:
#No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select how you are applying for your low THC cannabis licence" error summary
    When I choose to select "Amend a pending application" on "How are you applying for your low THC cannabis license?" page and choose to continue for LTHCC
#Enter your application reference number page:
#No data entered in application reference number fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter an application reference number" error summary
#Application reference number is less than 2 digits
    When I choose to enter "1" as application reference number on "How are you applying for your low THC cannabis license?" page and choose to continue for LTHCC
    Then I should see "There is a problem" error message displayed
    And I should see "Application reference number must be between 2 and 8 numeral characters" error summary
#Application reference number has letter
    When I choose to enter "112A" as application reference number on "How are you applying for your low THC cannabis license?" page and choose to continue for LTHCC
    Then I should see "There is a problem" error message displayed
    And I should see "Application reference number must not include letters a to z or special characters" error summary
    When I choose to enter "11223344" as application reference number on "How are you applying for your low THC cannabis license?" page and choose to continue for LTHCC
#Licence holder details page    
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a company name¬Enter a UK telephone number¬Enter an email address" error summary
#Enter less than 2 charters in Company name, invalid UK telephone number, invalid Email and invalid Website URL
    When I complete the fields below with Licence holder details for LTHCC:
      | Company name        | H              |
      | Company number      |                |
      | UK telephone number | $48081570192   |
      | Email address       | TesterTlf.com@ |
      | Website URL         | www.cikicyr.c  |
    Then I should see "There is a problem" error message displayed
    And I should see "Company name must be between 2 and 200 characters¬Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address¬Enter a real website URL" error summary
#Enter invalid UK telephone number and Email address short Contact email address is less than 6 characters
    When I complete the fields below with Licence holder details for LTHCC:
      | Company name        | HO              |
      | Company number      |                 |
      | UK telephone number |      0161329600 |
      | Email address       | T@t.c           |
      | Website URL         | www.cikicyr.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address" error summary
#Enter a real email address email does not have @ symbol
    When I complete the fields below with Licence holder details for LTHCC:
      | Company name        | HO              |
      | Company number      |                 |
      | UK telephone number |     01613296000 |
      | Email address       | TesterTlf.com   |
      | Website URL         | www.cikicyr.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
    When I complete the fields below with Licence holder details for LTHCC:
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
    When I complete the fields below with "Licence" holder address details for LTHCC:
      | Address line 1 |     12 |
      | Address line 2 |        |
      | Town or City   | Leeds  |
      | Postcode       | 2L 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
#Postcode entered contains special characters (not including whitespace)
    When I complete the fields below with "Licence" holder address details for LTHCC:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L1! 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
    When I complete the fields below with "Licence" holder address details for LTHCC:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L12 1PP |
#Address of the growing location where the low THC cannabis will be cultivated page:
# No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter an address¬Enter a town or city¬Enter a postcode" error summary
#Postcode entered in an invalid UK format
    When I complete the fields below with "Address of the growing location where the low THC cannabis will be cultivated" details for LTHCC:
      | Address line 1 |     12 |
      | Address line 2 |        |
      | Town or City   | Leeds  |
      | Postcode       | 2L 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
#Postcode entered contains special characters (not including whitespace)
    When I complete the fields below with "Address of the growing location where the low THC cannabis will be cultivated" details for LTHCC:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L1! 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
    When I complete the fields below with "Address of the growing location where the low THC cannabis will be cultivated" details for LTHCC:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L10 1PP |
#Growing location contact details page
# No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a UK telephone number" error summary
#Enter invalid Email and invalid UK telephone number
    When I complete the fields below with LGrowing location contact details for LTHCC:
      | Email address       | TesterTlf.com@ |
      | UK telephone number | $48081570192   |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192" error summary
#Email address short Contact email address is less than 6 characters and less than 11 digits are entered for telephone number
    When I complete the fields below with LGrowing location contact details for LTHCC:
      | Email address       | T@t.c      |
      | UK telephone number | 0161329600 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192" error summary
#Enter a real email address does not have @ symbol
    When I complete the fields below with LGrowing location contact details for LTHCC:
      | Email address       | TesterTlf.com |
      | UK telephone number |   01613296000 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
  #Email field is blank and more than 11 digits for telephone number
    When I complete the fields below with LGrowing location contact details for LTHCC:
      | Email address       |              |
      | UK telephone number | 016132960001 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192" error summary
    When I complete the fields below with LGrowing location contact details for LTHCC:
      | Email address       | Test@t.com  |
      | UK telephone number | 01612211652 |
#Details of the responsible person for the site page    
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the name of the responsible person for the site¬Enter a UK telephone number¬Enter an email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter invalid UK telephone number, email address @ symbol at the end and confirmation box not ticked
    And I complete the fields below with "Details of the responsible person for the site" for LTHCC:
      | Full name           | H              |
      | UK telephone number | $48081570192   |
      | Email address       | TesterTlf.com@ |
      | Confirm check box   | Not ticked     |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter less than 11 digits are entered for telephone number, email address short less than 6 characters and confirmation box not ticked
    When I complete the fields below with "Details of the responsible person for the site" for LTHCC:
      | Full name           | HH         |
      | UK telephone number | 0161329600 |
      | Email address       | T@t.c      |
      | Confirm check box   | Not ticked |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter more than 11 digits for telephone number, enter email does not have @ symbol and confirmation box not ticked
    When I complete the fields below with "Details of the responsible person for the site" for LTHCC:
      | Full name           | HOF           |
      | UK telephone number |  016132960001 |
      | Email address       | TesterTlf.com |
      | Confirm check box   | Not ticked    |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
    When I complete the fields below with "Details of the responsible person for the site" for LTHCC:
      | Full name           | HOF            |
      | UK telephone number |    01613296000 |
      | Email address       | Tester@Tlf.com |
      | Confirm check box   | Ticked         |
# DBS information for the responsible person
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the name of the responsible person as it appears on the DBS certificate¬Enter a DBS reference, for example a certificate number or an application reference number¬Enter the DBS date of issue or application for the responsible person" error summary
#Full name less than 3 chars, DBS reference entered is less than 3 chars and date entered more 3 years entered in the Day month year field
    When I complete the fields below with DBS "information for the responsible person" for LTHCC:
      | Full name      | Ho                    |
      | DBS reference  | A1                    |
      | Day month year | More than 3 years ago |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬DBS reference must be between 3 and 25 characters¬DBS certificates cannot be more than 3 years old. This person must apply for a new DBS certificate" error summary
#Date entered is in a future date
    When I complete the fields below with DBS "information for the responsible person" for LTHCC:
      | Full name      | Hof             |
      | DBS reference  | A12             |
      | Day month year | Tomorrow's date |
    Then I should see "There is a problem" error message displayed
    And I should see "DBS date of issue or application must not be in the future" error summary
#Entere special character in DBS reference and date fields
    When I complete the fields below with DBS "information for the responsible person" for LTHCC:
      | Full name      | Hof        |
      | DBS reference  | %A12       |
      | Day month year | !1/01/2009 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real DBS certificate number or application reference number¬Enter a real date of issue or application" error summary
    When I complete the fields below with DBS "information for the responsible person" for LTHCC:
      | Full name      | Hof                     |
      | DBS reference  |                  123456 |
      | Day month year | Within the last 3 years |
#Has the responsible person subscribed to DBS updates?
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the responsible person has subscribed to DBS updates" error summary
    When I choose to select "Yes" on "Has the responsible person subscribed to DBS updates?" page and choose to continue for LTHCC
# Do you require somebody within your company to be authorised to witness the destruction of the plant?
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you need someone to be authorised to witness the destruction of the plant" error summary
    When I choose to select "Yes" on "Do you require somebody within your company to be authorised to witness the destruction of the plant?" page and choose to continue for LTHCC
#How will the leaves and flowers be destroyed?
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter how the leaves and flowers will be destroyed" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "How will the leaves and flowers be destroyed?" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of how the leaves and flowers will be destroyed must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "How will the leaves and flowers be destroyed?" page for LTHCC
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    And I select save and continue
#Authorised witness details
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the name of the authorised witness¬Enter a UK telephone number for the authorised witness¬Enter an email address for the authorised witness¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter invalid UK telephone number, email address @ symbol at the end and confirmation box not ticked
    And I complete the fields below with "Authorised witness details" for LTHCC:
      | Full name           | H              |
      | UK telephone number | $48081570192   |
      | Email address       | TesterTlf.com@ |
      | Confirm check box   | Not ticked     |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter less than 11 digits are entered for telephone number, email address short less than 6 characters and confirmation box not ticked
    When I complete the fields below with "Authorised witness details" for LTHCC:
      | Full name           | HH         |
      | UK telephone number | 0161329600 |
      | Email address       | T@t.c      |
      | Confirm check box   | Not ticked |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
#Enter more than 11 digits for telephone number, enter email does not have @ symbol and confirmation box not ticked
    When I complete the fields below with "Authorised witness details" for LTHCC:
      | Full name           | HOF           |
      | UK telephone number |  016132960001 |
      | Email address       | TesterTlf.com |
      | Confirm check box   | Not ticked    |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a UK telephone number in the correct format, like 01632 960001 or +44 808 157 0192¬Enter a real email address¬You must confirm this person has applied for or currently holds a DBS certificate" error summary
    When I complete the fields below with "Authorised witness details" for LTHCC:
      | Full name           | HOF            |
      | UK telephone number |    01613296000 |
      | Email address       | Tester@Tlf.com |
      | Confirm check box   | Ticked         |
# DBS information for authorised witness page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the name of the authorised witness as it appears on the DBS certificate¬Enter a DBS reference, for example a certificate number or an application reference number¬Enter the DBS date of issue or application for the authorised witness" error summary
#Full name less than 3 chars, DBS reference entered is less than 3 chars and date entered more 3 years entered in the Day month year field
    When I complete the fields below with DBS "information for authorised witness" for LTHCC:
      | Full name      | Ho                    |
      | DBS reference  | A1                    |
      | Day month year | More than 3 years ago |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬DBS reference must be between 3 and 25 characters¬DBS certificates cannot be more than 3 years old. This person must apply for a new DBS certificate" error summary
#Date entered is in a future date
    When I complete the fields below with DBS "information for authorised witness" for LTHCC:
      | Full name      | Hof             |
      | DBS reference  | A12             |
      | Day month year | Tomorrow's date |
    Then I should see "There is a problem" error message displayed
    And I should see "DBS date of issue or application must not be in the future" error summary
#Entere special character in DBS reference and date fields
    When I complete the fields below with DBS "information for authorised witness" for LTHCC:
      | Full name      | Hof        |
      | DBS reference  | %A12       |
      | Day month year | !1/01/2009 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real DBS certificate number or application reference number¬Enter a real date of issue or application" error summary
    When I complete the fields below with DBS "information for authorised witness" for LTHCC:
      | Full name      | Hof                     |
      | DBS reference  |                  123456 |
      | Day month year | Within the last 3 years |
#Has the responsible person subscribed to DBS updates?
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the authorised witness has subscribed to DBS updates" error summary
    When I choose to select "Yes" on "Has the authorised witness subscribed to DBS updates?" page and choose to continue for LTHCC
#Has anyone in your organisation ever been subject to legal business proceedings??
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if anyone has ever been subject to legal business proceedings" error summary
    When I choose to select "Yes" on "Has anyone in your organisation ever been subject to legal business proceedings?" page and choose to continue for LTHCC
#Provide details of the legal business proceedings? page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Provide details of the legal business proceedings" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide details of the legal business proceedings" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of legal business proceedings must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide details of the legal business proceedings" page for LTHCC
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Has anyone in your organisation ever received a criminal conviction? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if anyone in your organisation has ever received a criminal conviction" error summary
    When I choose to select "Yes" on "Has anyone in your organisation ever received a criminal conviction?" page and choose to continue for LTHCC
#Do you hold any Home Office or other regulatory licenses? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you hold any Home Office or other regulatory licences" error summary
    When I choose to select "Yes" on "Do you hold any Home Office or other regulatory licenses?" page and choose to continue for LTHCC
#Licence details page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the licence type, for example the name of the licence¬Enter the licence number or a reference number¬Enter the date of issue or application" error summary
#Eneter less than 2 characters in the Licence type and Licence number field
    When I complete the fields below with Licence details for LTHCC:
      | Licence type   | H                |
      | Licence number |                1 |
      | Day month year | Yesterday's date |
    Then I should see "There is a problem" error message displayed
    And I should see "Licence type must be between 2 and 200 characters¬Licence number must be between 2 and 50 characters" error summary
#Enter special character in Licence number field and enter in Future date in the date field
    When I complete the fields below with Licence details for LTHCC:
      | Licence type   | Ho              |
      | Licence number | A1*             |
      | Day month year | Tomorrow's date |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real licence number or application reference number¬Date of issue or application must be today's date or in the past" error summary
#Enter special character in the date field
    When I complete the fields below with Licence details for LTHCC:
      | Licence type   | Ho         |
      | Licence number | A1         |
      | Day month year | !2/02/2025 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real date of issue or application" error summary
#Enter more than 50 years ago in the date field
    When I complete the fields below with Licence details for LTHCC:
      | Licence type   | Ho                     |
      | Licence number | A1                     |
      | Day month year | more than 50 years ago |
    Then I should see "There is a problem" error message displayed
    And I should see "Date of issue or application must be in the past 50 years" error summary
    When I complete the fields below with Licence details for LTHCC:
      | Licence number | Hof123456        |
      | Licence type   | Ab123456         |
      | Day month year | Yesterday's date |
#Has your organisation ever been refused a licence? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if your organisation has ever been refused a licence" error summary
    When I choose to select "Yes" on "Has your organisation ever been refused a licence?" page and choose to continue for LTHCC
#Details of why you were refused a licence page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of why you were refused a licence" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Details of why you were refused a licence" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of why you were refused a licence must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Details of why you were refused a licence" page for LTHCC
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#What type of company is your organisation? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select your organisation's company type" error summary
    When I choose to select "Private company" on "What type of company is your organisation" page and choose to continue for LTHCC
#Upload company registration certificate
#No file selected
    And I select continue on upload photo
    Then I should see "There is a problem" error message displayed
    And I should see "Select a file to upload" error summary
#Upload a photo of yourself page: Upload the same file name again
    When I choose to upload "yourself1.JPEG" file
    And I choose to upload another "yourself1.JPEG" file
    Then I should see "There is a problem" error message displayed
    And I should see "A file with this name was already uploaded" error summary
#Upload a photo of yourself page: File size too large when file size is greater than 20MB
    When I choose to upload "yourself25Mb.pdf" file
    Then I should see "The selected file must be 25MB or less" error for max upload file
#Upload a photo of yourself page: Incorrect file type, your photo must be a PNG, JPEG, PDF, Microsoft Word or Excel file
    When I choose to upload "text.txt" file
    Then I should see "The selected file must be a PNG, PDF, JPEG or Microsoft Word or Excel file" error for type of uploaded file
    When I choose to upload "yourself1.JPEG" file



#************************************************************ Test-2 *************************************************************************
# Describe your business model page
# Is the licence needed to cultivate and possess low THC cannabis (industrial hemp)? page
# Where will you be cultivating the low THC cannabis? page
# What is the total acreage of the fields? page
# How many fields are you proposing to cultivate low THC cannabis in page
# Details of cultivation fields page
# Upload aerial photos and site maps page
# Does your company own all the fields? page
# Who owns the fields? page
# Do you have permission from the owner to carry out your intended activities? page
# Are there any other businesses operating from your intended cultivation site? page
# Do you own any other businesses operating from your intended cultivation site? page
# Details of businesses adjacent to or operating from your cultivation site
# Businesses adjacent or operating from your cultivation site

  Scenario: LTHCC Test-2 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Describe your business model" page for LTHCC
#Describe your business model page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a description of your business model" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Describe your business model" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Description of your business model must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Describe your business model" page for LTHCC
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Is the licence needed to cultivate and possess low THC cannabis (industrial hemp)? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the licence is needed to cultivate and possess low THC cannabis" error summary
    When I choose to select "Yes" on "Is the licence needed to cultivate and possess low THC cannabis (industrial hemp)?" page and choose to continue for LTHCC
#Where will you be cultivating the low THC cannabis? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select where you will be cultivating the low THC cannabis" error summary
    When I choose to select "Outside" on "Where will you be cultivating the low THC cannabis?" page and choose to continue for LTHCC
#What is the total acreage of the fields? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the total acreage of the fields" error summary
    When I choose to select "120" on "What is the total acreage of the fields?" page and choose to continue for LTHCC
#How many fields are you proposing to cultivate low THC cannabis in? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the number of fields you will cultivate low THC cannabis in" error summary
#User enters a value below 1
    When I choose to select "0" on "How many fields are you proposing to cultivate low THC cannabis in?" page and choose to continue for LTHCC
    Then I should see "There is a problem" error message displayed
    And I should see "Number of fields must be at least 1" error summary
#User enters a value above 1,000
    When I choose to select "1001" on "How many fields are you proposing to cultivate low THC cannabis in?" page and choose to continue for LTHCC
    Then I should see "There is a problem" error message displayed
    And I should see "Number of fields must be less than 1,000" error summary
#User enters characters other than numbers
    When I choose to select "1,000" on "How many fields are you proposing to cultivate low THC cannabis in?" page and choose to continue for LTHCC
    Then I should see "There is a problem" error message displayed
    And I should see "Number of fields must only contain numbers" error summary
    When I choose to select "1000" on "How many fields are you proposing to cultivate low THC cannabis in?" page and choose to continue for LTHCC
#Details of cultivation fields page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of the fields you plan to cultivate low THC cannabis in" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Details of cultivation fields" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of the fields you plan to cultivate low THC cannabis in must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Details of cultivation fields" page for LTHCC
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    And I select save and continue
#Upload aerial photos and site maps page
#No file selected
    And I select continue on upload photo
    Then I should see "There is a problem" error message displayed
    And I should see "Select a file to upload" error summary
#Upload a photo of yourself page: Upload the same file name again
    When I choose to upload "yourself1.JPEG" file
    And I choose to upload another "yourself1.JPEG" file
    Then I should see "There is a problem" error message displayed
    And I should see "A file with this name was already uploaded" error summary
#Upload a photo of yourself page: File size too large when file size is greater than 20MB
    When I choose to upload "yourself25Mb.pdf" file
    Then I should see "The selected file must be 25MB or less" error for max upload file
#Upload a photo of yourself page: Incorrect file type, your photo must be a PNG, JPEG, PDF, Microsoft Word or Excel file
    When I choose to upload "text.txt" file
    Then I should see "The selected file must be a PNG, PDF, JPEG or Microsoft Word file" error for type of uploaded file
    When I choose to upload "yourself1.JPEG" file
    And I select continue on upload photo
#Does your company own all the fields? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if your company owns all the fields" error summary
    When I choose to select "No" on "Does your company own all the fields?" page and choose to continue for LTHCC
#Who owns the fields? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of who owns the fields" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Who owns the fields?" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of who owns the fields must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Who owns the fields?" page for LTHCC
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Do you have permission from the owner to carry out your intended activities? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you have permission from the owner to carry out your intended activities" error summary
    When I choose to select "Yes" on "Do you have permission from the owner to carry out your intended activities?" page and choose to continue for LTHCC
#Are there any other businesses operating from your intended cultivation site? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if there are any other businesses operating from your intended cultivation site" error summary
    When I choose to select "Yes" on "Are there any other businesses operating from your intended cultivation site?" page and choose to continue for LTHCC
#Do you own any other businesses operating from your intended cultivation site? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you own any other businesses operating from your intended cultivation site" error summary
    When I choose to select "Yes" on "Do you own any other businesses operating from your intended cultivation site?" page and choose to continue for LTHCC
#Details of businesses adjacent to or operating from your cultivation site
#No data selected
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the name of the business adjacent to or operating from your site¬Enter the type of business¬Enter details of who owns the business¬Describe your involvement in this business¬Enter the ordnance survey grid reference of the business location" error summary
#Enter less than 3 characters in Business name, Type of business and Who owns the business? fields
    When I complete the fields below with Details of businesses adjacent to or operating from your cultivation site:
      | Business name                              | IT        |
      | Type of business                           | Te        |
      | Who owns the business?                     | HO        |
      | Describe your involvement in this business | Tester    |
      | Ordnance survey grid reference             | ST1234567 |
    Then I should see "There is a problem" error message displayed
    And I should see "Name of business must be between 3 and 200 characters¬Type of business must be between 3 and 200 characters¬Details of who owns the business must be between 3 and 200 characters" error summary
#Enter more than 2000 characters Describe your involvement in this business field
    When I complete the fields below with Details of businesses adjacent to or operating from your cultivation site:
      | Business name                              | ITS                   |
      | Type of business                           | Ted                   |
      | Who owns the business?                     | HOF                   |
      | Describe your involvement in this business | Enter 2001 characters |
      | Ordnance survey grid reference             |                     1 |
    Then I should see "There is a problem" error message displayed
    And I should see "Description of your involvement in this business must be 2,000 characters or less" error summary





#************************************************************ Test-3 *************************************************************************

# Are there any business adjacent to your intended cultivation site? page
# Are any of the fields in a different postcode to the site address? page
# Provide the addresses of the fields that are in a different postcode page
# What is adjacent to each of the fields you intend cultivate? page
# Perimeter details page
# Upload images of the perimeter page
# Provide details of your record keeping
# Upload images of your record keeping documents
# Provide details of your customer base
# Provide details of your end products
# Provide details of how you produce your end products
# Provide details of the seed types you will use to grow low THC cannabis
# Provide the THC content level
  Scenario: LTHCC Test-3 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Are there any business adjacent to your intended cultivation site?" page for LTHCC
#Are there any business adjacent to your intended cultivation site?
#No data selected
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if there are any businesses adjacent to your intended cultivation site" error summary
    When I choose to select "No" on "Are there any business adjacent to your intended cultivation site?" page and choose to continue for LTHCC
#Are any of the fields in a different postcode to the site address?
#No data selected
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if any of the fields are in a different postcode to the site address" error summary
    When I choose to select "Yes" on "Are any of the fields in a different postcode to the site address?" page and choose to continue for LTHCC
#Provide the addresses of the fields that are in a different postcode
#No data selected
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the addresses of the fields that are in a different postcode" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide the addresses of the fields that are in a different postcode" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Addresses of the fields that are in a different postcode must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide the addresses of the fields that are in a different postcode" page for LTHCC
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
# What is adjacent to each of the fields you intend cultivate? page
#No data selected
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter what is adjacent to each of the fields you intend to cultivate" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "What is adjacent to each of the fields you intend to cultivate?" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of what is adjacent to each of the fields you intend to cultivate must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "What is adjacent to each of the fields you intend to cultivate?" page for LTHCC
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Perimeter details page
#No data selected
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of the growing location's perimeter" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Perimeter details" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Perimeter details must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Perimeter details" page for LTHCC
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Upload images of the perimeter page
#No file selected
    And I select continue on upload photo
    Then I should see "There is a problem" error message displayed
    And I should see "Select a file to upload" error summary
#Upload a photo of yourself page: Upload the same file name again
    When I choose to upload "yourself1.JPEG" file
    And I choose to upload another "yourself1.JPEG" file
    Then I should see "There is a problem" error message displayed
    And I should see "A file with this name was already uploaded" error summary
#Upload a photo of yourself page: File size too large when file size is greater than 20MB
    When I choose to upload "yourself25Mb.pdf" file
    Then I should see "The selected file must be 25MB or less" error for max upload file
#Upload a photo of yourself page: Incorrect file type, your photo must be a PNG, JPEG, PDF, Microsoft Word or Excel file
    When I choose to upload "text.txt" file
    Then I should see "The selected file must be a PNG, PDF, JPEG or Microsoft Word file" error for type of uploaded file
    When I choose to upload "yourself1.JPEG" file
    And I select save and continue
#Provide details of your record keeping page
#No file selected
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of your record keeping" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide details of your record keeping" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of your record keeping must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide details of your record keeping" page for LTHCC
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Upload images of your record keeping documents page
#No file selected
    And I select continue on upload photo
    Then I should see "There is a problem" error message displayed
    And I should see "Select a file to upload" error summary
#Upload a photo of yourself page: Upload the same file name again
    When I choose to upload "yourself1.JPEG" file
    And I choose to upload another "yourself1.JPEG" file
    Then I should see "There is a problem" error message displayed
    And I should see "A file with this name was already uploaded" error summary
#Upload a photo of yourself page: File size too large when file size is greater than 20MB
    When I choose to upload "yourself25Mb.pdf" file
    Then I should see "The selected file must be 25MB or less" error for max upload file
#Upload a photo of yourself page: Incorrect file type, your photo must be a PNG, JPEG, PDF, Microsoft Word or Excel file
    When I choose to upload "text.txt" file
    Then I should see "The selected file must be a PNG, PDF, JPEG or Microsoft Word or Excel file" error for type of uploaded file
    When I choose to upload "yourself1.JPEG" file
    And I select continue on upload photo
#Provide details of your seed suppliers page
#No file selected
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of your seed suppliers" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide details of your seed suppliers" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of your seed suppliers must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide details of your seed suppliers" page for LTHCC
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Provide details of your customer base page
#No file selected
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of your customer base" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide details of your customer base" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of your customer base must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide details of your customer base" page for LTHCC
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Provide details of your end products page
#No file selected
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of your end products" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide details of your end products" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of your end products must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide details of your end products" page for LTHCC
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Provide details of how you produce your end products page
#No file selected
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of how you produce your end products" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide details of how you produce your end products" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of how you produce your end products must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide details of how you produce your end products" page for LTHCC
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Provide details of the seed types you will use to grow low THC cannabis page
#No file selected
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details of the seed types you will use to grow low THC cannabis" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide details of the seed types you will use to grow low THC cannabis" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details of the seed types you will use to grow low THC cannabis must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide details of the seed types you will use to grow low THC cannabis" page for LTHCC
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field
    When I select save and continue
#Provide the THC content level page
#No file selected
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the THC content level" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2001" characters in the text area box field on "Provide the THC content level" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "THC content level must be 2,000 characters or less" error summary
    And I should see "You have 1 character too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "250" characters in the text area box field on "Provide the THC content level" page for LTHCC
    Then I should see "You have 1,750 characters remaining" count message displayed on the text area field




#************************************************************ Test-4 *************************************************************************
# Invoicing address page
# Invoicing contact details page
# Which email address should we send the licence to? page
# Who is completing the application? page
# Will the regulatory affairs and compliance officer discharge all licence responsibilities? page
# Add any extra information you think might help your application (optional) page
# Declaration page
Scenario: LTHCC Test-4 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Invoicing address" page for LTHCC
# Invoicing address page:
# No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter address line 1, typically the building and street¬Enter a town or city¬Enter a postcode" error summary
#Postcode entered in an invalid UK format
    When I complete the fields below with "Invoicing" address details for LTHCC:
      | Address line 1 |        12 |
      | Address line 2 | less than |
      | Town or City   | Leeds     |
      | Postcode       |    2L 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
#Postcode entered contains special characters (not including whitespace)
    When I complete the fields below with "Invoicing" address details for LTHCC:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L1! 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
    When I complete the fields below with "Invoicing" address details for LTHCC:
      | Address line 1 |      12 |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L12 1PP |
#Invoicing contact details page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter an invoicing contact name¬Enter an invoicing contact email address¬Enter an invoicing contact number¬Enter your refund account details" error summary
#Enter Full name is less than 3 characters, Email address short Contact email address is less than 6 characters and invalid UK telephone number
    When I complete the fields below with Invoicing contact details for LTHCC:
      | Full name              | HO           |
      | Email address          | T@t.c        |
      | Contact number         |   0161329600 |
      | Purchase order number  |              |
      | Refund account details | Testing 1234 |
    Then I should see "There is a problem" error message displayed
    And I should see "Invoicing contact name must be between 3 and 200 characters¬Enter a real email address¬Enter a real telephone number, like 07700 900000" error summary
#Enter invalid UK telephone number and Enter a real email address email does not have @ symbol
    When I complete the fields below with Invoicing contact details for LTHCC:
      | Full name              | HOf           |
      | Email address          | TesterHof.com |
      | Contact number         |    0161329600 |
      | Purchase order number  |       1234562 |
      | Refund account details | Testing 1234  |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Enter a real telephone number, like 07700 900000" error summary
#Enter invalid UK telephone number and Email address @ symbol at the end and confirmation box not ticked
    When I complete the fields below with Invoicing contact details for LTHCC:
      | Full name              | HOf test       |
      | Email address          | Testerhof.com@ |
      | Contact number         |   -48081570192 |
      | Purchase order number  |        1234562 |
      | Refund account details | Testing 1234   |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Enter a real telephone number, like 07700 900000" error summary
#Enter in the text area field characters is over 500 which is the max value
    When I complete the fields below with Invoicing contact details for LTHCC:
      | Full name              | HOf test             |
      | Email address          | Tester@hof.com       |
      | Contact number         |        +448081570192 |
      | Purchase order number  |                    1 |
      | Refund account details | Enter 501 characters |
    Then I should see "There is a problem" error message displayed
    And I should see "Refund account details must be 500 characters or less" error summary
    When I complete the fields below with Invoicing contact details for LTHCC:
      | Full name              | HOf test       |
      | Email address          | Tester@hof.com |
      | Contact number         |  +448081570192 |
      | Purchase order number  |        1234562 |
      | Refund account details | Testing 1234   |
    And I select save and continue
#Which email address should we send the licence to? page
#No data entered in any of the fields
    Then I should see "There is a problem" error message displayed
    And I should see "Enter an email address where we should send the licence" error summary
#Enter Email address @ symbol at the end
    When I enter "TesterTlf.com@" into the email field on "Which email address should we send the licence to?" page for LTHCC
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
#Enter email address short less than 6 characters
    When I enter "T@t.c" into the email field on "Which email address should we send the licence to?" page for LTHCC
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
#Enter email does not have @ symbol
    When I enter "TesterTlf.com" into the email field on "Which email address should we send the licence to?" page for LTHCC
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
    When I enter "Tester@Tlf.com" into the email field on "Which email address should we send the licence to?" page for LTHCC
#Who is completing the application? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the full name of the person completing the application¬Enter an email address where we should send the licence¬Enter a UK telephone number for the person completing the form" error summary
#Enter Full name is less than 3 characters, Email address short Contact email address is less than 6 characters and invalid UK telephone number 10 digits
    When I complete the fields below with Who is completing the application for LTHCC:
      | Full name         | HO         |
      | Email address     | T@t.c      |
      | UK contact number | 0161329600 |
    Then I should see "There is a problem" error message displayed
    And I should see "Full name must be between 3 and 200 characters¬Enter a real email address¬Enter a real UK telephone number, like 01632 960 001 or 07700 900 982" error summary
#Enter invalid UK telephone number and Enter a real email address email does not have @ symbol
    When I complete the fields below with Who is completing the application for LTHCC:
      | Full name         | HOf           |
      | Email address     | TesterHof.com |
      | UK contact number |    0161329600 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Enter a real UK telephone number, like 01632 960 001 or 07700 900 982" error summary
#Enter invalid UK telephone number and Email address @ symbol at the end and confirmation box not ticked
    When I complete the fields below with Who is completing the application for LTHCC:
      | Full name         | HOf test       |
      | Email address     | Testerhof.com@ |
      | UK contact number |   -48081570192 |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address¬Enter a real UK telephone number, like 01632 960 001 or 07700 900 982" error summary
    When I complete the fields below with Who is completing the application for LTHCC:
      | Full name         | HOf test       |
      | Email address     | Tester@hof.com |
      | UK contact number |    01616958563 |
#Will the regulatory affairs and compliance officer discharge all licence responsibilities? page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the regulatory affairs officer will discharge all licence responsibilities" error summary
#No data entered in any of the fields
    When I complete the fields below with Will the regulatory affairs and compliance officer discharge all licence responsibilities details for LTHCC:
      | Radio Option | No |
      | Text Area    |    |
    Then I should see "There is a problem" error message displayed
    And I should see "Explain why the officer will not discharge all licence responsibilities" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2100" characters in the text area box field on "Will the regulatory affairs and compliance officer discharge all licence responsibilities?" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Reason why the officer will not discharge all licence responsibilities must be 2,000 characters or less" error summary
    And I should see "You have 100 characters too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "120" characters in the text area box field on "Will the regulatory affairs and compliance officer discharge all licence responsibilities?" page for LTHCC
    Then I should see "You have 1,880 characters remaining" count message displayed on the text area field
    When I select save and continue
##Add any extra information you think might help your application (optional) page
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2100" characters in the text area box field on "Add any extra information you think might help your application (optional)" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Extra information about your application must be 2,000 characters or less" error summary
    And I should see "You have 100 characters too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "150" characters in the text area box field on "Add any extra information you think might help your application (optional)" page for LTHCC
    Then I should see "You have 1,850 characters remaining" count message displayed on the text area field
#No data entered in any of the fields
    When I enter "0" characters in the text area box field on "Add any extra information you think might help your application (optional)" page for LTHCC
    And I select save and continue
    Then I am navigated to "Check your answers" page
    When I select Confirm Submission on Check Your Answers page for LTHCC
#Declaration page
#No data entered in any of the fields
    Then I am navigated to "Declaration" page
    When I select confirm and submit button
    Then I should see "There is a problem" error message displayed
    And I should see "You must confirm you agree with this declaration to submit the application" error summary



#************************************************************ Test-5 *************************************************************************
#*************************** Existing licensee renewing or changing a currently licensed site ***************************
#  Has your Companies House reference number changed since your last application? page
#  Has your registered name at Companies House changed since your last application? page
#  Upload company registration certificate as evidence of name change page
#  Are you requesting a change in authorised witness for this site only? page
#  Are you requesting additional schedules? page
#  Are you requesting a change of activity? page

  Scenario: LTHCC Test-5 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Has your Companies House reference number changed since your last application?" page for LTHCC
#Has your Companies House reference number changed since your last application? page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if your Companies House reference number has changed since your last application" error summary
    When I choose to select "No" on "Has your Companies House reference number changed since your last application?" page and choose to continue for LTHCC
#Has your registered name at Companies House changed since your last application? page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if your registered name at Companies House has changed since your last application" error summary
    When I choose to select "Yes" on "Has your registered name at Companies House changed since your last application?" page and choose to continue for LTHCC
#Upload company registration certificate as evidence of name change page
#No file selected
    And I select continue on upload photo
    Then I should see "There is a problem" error message displayed
    And I should see "Select a file to upload" error summary
#Upload a photo of yourself page: Upload the same file name again
    When I choose to upload "yourself1.JPEG" file
    And I choose to upload another "yourself1.JPEG" file
    Then I should see "There is a problem" error message displayed
    And I should see "A file with this name was already uploaded" error summary
#Upload a photo of yourself page: File size too large when file size is greater than 20MB
    When I choose to upload "yourself25Mb.pdf" file
    Then I should see "The selected file must be 25MB or less" error for max upload file
#Upload a photo of yourself page: Incorrect file type, your photo must be a JPG, PNG, GIF,  JPEG or PDF file
    When I choose to upload "text.txt" file
    Then I should see "The selected file must be a PNG, PDF, JPEG or Microsoft Word or Excel file" error for type of uploaded file
    When I choose to upload "yourself1.JPEG" file
    And I select continue on upload photo
#Are you requesting a change in authorised witness for this site only? page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you are requesting a change in authorised witness for this site only" error summary
    When I choose to select "Yes" on "Are you requesting a change in authorised witness for this site only?" page and choose to continue for LTHCC
#Are you requesting additional schedules? page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you are requesting additional schedules" error summary
    When I choose to select "Yes" on "Are you requesting additional schedules?" page and choose to continue for LTHCC
#Are you requesting a change of activity? page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if you are requesting a change of activity" error summary



#************************************************************ Test-6 *************************************************************************
# ************************************ Existing licensee applying for a new site ************************************
#  Why are you requesting a new licence? page
#  When are you moving site? page

  Scenario: LTHCC Test-6 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Why are you requesting a new licence?" page for LTHCC
#Why are you requesting a new licence? page
#No data entered in any of the fields
    When I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select why you are requesting a new licence" error summary
    When I choose to select "We are moving site" on "Why are you requesting a new licence?" page and choose to continue for LTHCC
#When are you moving site? page:
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a moving date" error summary
##Enter today date error
    When I enter "Today's date" into "When are you moving site?" field and page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Moving date must be in the future" error summary
##Enter date in the past error
    When I enter "Yesterday's date" into "When are you moving site?" field and page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Moving date must be in the future" error summary
##Enter invalid date error
    When I enter "d1/10/2026" into "When are you moving site?" field and page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a moving date in the correct format" error summary




#************************************************************ Test-7 *************************************************************************
#  Is the new site part of a contractual agreement? page
#  When does the contract start? page
#  Tell us more about the contract and how it affects your licence application page

  @CslRegression
  Scenario: LTHCC Test-7 Validate the above pages
    Given I visit the Controlled substance licence application page
    When I choose to navigate to "Why are you requesting a new licence?" page for LTHCC
    And I choose to select "For another site" on "Why are you requesting a new licence?" page and choose to continue for LTHCC
#Is the new site part of a contractual agreement page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Select if the new site is part of a contractual agreement" error summary
    When I choose to select "Yes" on "Is the new site part of a contractual agreement?" page and choose to continue for LTHCC
#When does the contract start page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the contract start date" error summary
#Enter 1 year in the past date error
    When I enter "more than 1 year in the past" into "When does the contract start?" field and page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Contract start date must be within the past year" error summary
#Enter 1 year in the past in the future date error
    When I enter "more than 1 year in the future" into "When does the contract start?" field and page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Contract start date must be within the next year. Come back and re-apply later if you are applying for a new site more than 1 year in the future" error summary
#Enter invalid date error
    When I enter "dd/dd/11" into "When does the contract start?" field and page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real contract start date" error summary
    When I enter "Tomorrow's date" into "When does the contract start?" field and page for LTHCC
#Tell us more about the contract and how it affects your licence application page
#No data entered in any of the fields
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter details about the contract and how it affects your licence application" error summary
#Data entered in the text area field characters is over 2000 which is the max value
    When I enter "2100" characters in the text area box field on "Tell us more about the contract and how it affects your licence application" page for LTHCC
    And I select save and continue
    Then I should see "There is a problem" error message displayed
    And I should see "Details about the contract must be 2,000 characters or less" error summary
    And I should see "You have 100 characters too many" count error message displayed on the text area field
#Data entered in the text area field characters are countered correctly
    When I enter "120" characters in the text area box field on "Tell us more about the contract and how it affects your licence application" page for LTHCC
    Then I should see "You have 1,880 characters remaining" count message displayed on the text area field