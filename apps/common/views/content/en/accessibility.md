# Accessibility statement for {{#t}}journey.serviceName{{/t}}

This service is run by the Home Office. We want as many people as possible to be able to use this website. For example, that means you should be able to:

 - change colours, contrast levels and fonts
 - zoom in up to 400% without the text spilling off the screen
 - navigate most of the website using just a keyboard
 - navigate most of the website using speech recognition software
 - listen to most of the website using a screen reader (including the most recent versions of JAWS, NVDA and VoiceOver)

We have also made the website text as simple as possible to understand. [AbilityNet](https://mcmw.abilitynet.org.uk/) has advice on making your device easier to use if you have a disability.

## Reporting accessibility problems with this website

We are always looking to improve the accessibility of this website. If you find any problems not listed on this page or think we're not meeting accessibility requirements, contact us at [hof-accessibility@digital.homeoffice.gov.uk](mailto:hof-accessibility@digital.homeoffice.gov.uk).

[Read tips on contacting organisations about inaccessible websites](https://www.w3.org/WAI/teach-advocate/contact-inaccessible-websites/).

## Enforcement procedure

The Equality and Human Rights Commission (EHRC) is responsible for enforcing the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 (the 'accessibility regulations'). If you're not happy with how we respond to your complaint, [contact the Equality Advisory and Support Service (EASS).](https://www.equalityadvisoryservice.com/)

If you are in Northern Ireland and are not happy with how we respond to your complaint you can contact the Equalities Commission for Northern Ireland who are responsible for enforcing the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 (the ‘accessibility regulations’) in Northern Ireland.

## Technical information about this website's accessibility

The Home Office is committed to making its website accessible, in accordance with the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.

## Compliance status

This website is partially compliant with the [Web Content Accessibility Guidelines version 2.2](https://www.w3.org/TR/WCAG22/) AA standard.

## Non-accessible content

The content listed below is non-accessible for the following reasons.

## Non-compliance with the accessibility regulations

On all pages, a timeout message does not appear after a period of inactivity, which does not meet WCAG standards and guidelines: WCAG 2.2 - 2.2.1 - Timing adjustable (Level A), as a pop-up should appear informing the user when the page has been idle for 30 minutes and would thus close soon.

On several pages, an aria-labelledby or aria-describedby reference exists, but the target for the reference does not exist. An element has an aria-labelledby or aria-describedby value that does not match the id attribute value of another element in the page. This does not meet accessibility standards as all interactive components must have an accessible name and role, and the state of the component must be communicated to assistive technologies. This fails to meet WCAG standards and guidelines: 4.1.2 - Ensure an element's role supports its ARIA attributes (#application-form-type-amend-application).

On the Low THC Cannabis license application pages 'Will the regulatory affairs and compliance officer discharge all licence responsibilities?' and 'Add any extra info you think will affect your application (optional)', the textarea fields do not meet accessibility standards for the following reasons:

1. aria-describedby = 'officer-non-compliance-reason-hint', this should match up with an existing id on the compliance officer page.

2. aria-describedby = 'extra-information-hint', this should match up with an existing id on the extra info optional page.

Screen readers would not be able to understand relationships between elements.

There is a Gov.uk design system pattern.

This fails to meet WCAG standards and guidelines: 2.5.3 - For user interface components with labels that include text or images of text, the name contains the text that is presented visually.

And 1.3.1 - Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

These are both in terms of the accessibility text (aria).

If you find an issue that we have yet to identify, please contact us using one of the routes described in the ‘Reporting accessibility problems with this website’ section of this statement.

## Preparation of this accessibility statement

This statement was prepared on 19 June 2025. It was last reviewed on 19 June 2025.

This website was last tested on 18 June 2025. The test was carried out internally by the Home Office.

We tested the service based on a user’s ability to complete key journeys. All parts of the chosen journeys were tested, including documents. Journeys were chosen on a number of factors including usage statistics, risk assessments and subject matter.
