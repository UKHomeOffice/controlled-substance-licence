# Controlled Substance Licence E2E Tests

This directory contains the Playwright BDD end-to-end tests for the Controlled
Substance Licence (CSL) service. The tests use the UAT service by default when
configured as below; they do not build or start the application locally.

## Run Locally Against UAT

### Prerequisites

- Node.js `24.21.x` (the version range in the root `package.json` is `>=24.21.0 <25.0.0`).
- Yarn and access to the CSL UAT service.
- Approved UAT test accounts and a test mailbox authorized for these scenarios.

From the repository root, install dependencies and the Chromium browser:

```powershell
yarn install
yarn playwright install chromium
```

Create or update the **root** `.env` file (next to `package.json`), not a file
inside `e2e-tests`. Set the UAT URL and the required test secrets:

```dotenv
PLAYWRIGHT_BASE_URL=https://csl.uat.sas-notprod.homeoffice.gov.uk/
PASSWORD_CDA=your-cda-test-password
PASSWORD_LTHCC=your-lthcc-test-password
PASSWORD_PCA=your-pca-test-password
PASSWORD_PENDING=your-pending-test-password
SAS_HOF_EMAIL=your-approved-test-mailbox@example.com
```

Use the passwords and mailbox issued for your team's UAT test accounts. Test
usernames are currently defined in `utility-helper/constants-lib.ts`; they are
not read from `.env`. Keep `.env` local and never commit credentials.

`playwright.config.ts` loads `.env` and uses `PLAYWRIGHT_BASE_URL` as the
browser base URL. When this variable is set, Playwright skips starting the local
web server and navigates to UAT. If it is missing, the config instead targets
`http://localhost:8080` and starts `yarn start:dev`.

### Generate and Run Tests

Run these steps from the repository root:

1. Generate Playwright tests from the Gherkin feature files. The generated
  tests are written to `.features-gen`:

  ```powershell
  yarn bddgen
  ```

2. List the generated tests without running them. Use the output to find a
  test's generated file path and line number:

  ```powershell
  yarn playwright test --list
  ```

3. Run one scenario or Examples row by replacing the path and line placeholders
  with values from the list. `--workers=1` runs tests serially, and
  `--retries=0` prevents automatic reruns after a failure:

  ```powershell
  yarn playwright test '<generated-spec-path>:<line>' --workers=1 --retries=0
  ```

4. Optionally run one journey project. This example runs only `cda`; the other
  projects are `lthcc`, `pca`, and `reg`:

  ```powershell
  yarn playwright test --project=cda --workers=1 --retries=0
  ```

5. After checking individual scenarios, run the full suite serially without
  retries. This script runs `bddgen` before Playwright:

  ```powershell
  yarn test:e2e --workers=1 --retries=0
  ```

These tests create or update real UAT registrations, uploads, saved drafts, and
submissions. Use only the authorized test accounts, and run serially because
scenarios may share account state. The `--retries=0` option avoids automatically
repeating a failed state-changing test.


## Test Structure

- `features/`: Gherkin scenarios, organized by journey (`cda`, `lthcc`, `pca`,
  and `Reg`), plus `smokeTest.feature`.
- `steps/`: journey-specific step definitions and shared CSL navigation/actions.
- `pages/`: typed page objects and locators; `base-page.ts` contains shared
  page interactions. Journey-specific page objects are grouped in subfolders.
- `fixture/fixtures.ts`: Playwright BDD fixture setup and page-object instances.
- `utility-helper/constants-lib.ts`: shared scenario data and required
  environment-variable reads.
- `test-data/user-upload-files/`: upload files used by the scenarios.

BDD-generated tests are written to `.features-gen`. Playwright reports and test
artifacts are written to the configured report/result directories in the
repository root.
