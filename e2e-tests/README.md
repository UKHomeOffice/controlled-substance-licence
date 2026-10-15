# Controlled substance licence end-to-end tests

These Playwright BDD tests migrate the CSL Selenium/Cucumber tests from
`hof-e2e-auto-tests/Function/src/main`. Source feature text, tags, scenario names,
Examples, page objects, and StepLib branches are retained. Page objects and
fixtures follow the LMR end-to-end test conventions.

## Setup

Use the Node version declared by the application and install the project:

```powershell
yarn install
yarn playwright install chromium
```

Configure the target URL and test accounts in the existing, ignored `.env` file:

```dotenv
PLAYWRIGHT_BASE_URL=https://your-csl-test-environment.example/
USER_NAME=your-approved-test-user
PASSWORD=your-approved-test-password
USER_NAME_PENDING=your-pending-test-user
PASSWORD_PENDING=your-pending-test-password
SAS_HOF_EMAIL=your-test-mailbox@example.com
```

Do not commit credentials. Approved and pending users must have the same roles
and application state required by the original CSL tests. Authentication, file
vault, saved-application storage, and submission/email services must be available.
The tests perform real registrations, uploads, saved drafts, and submissions:
use a dedicated test environment and test accounts.

Without `PLAYWRIGHT_BASE_URL`, the configuration starts the application at
`http://localhost:8080` (or `PLAYWRIGHT_PORT`). Its assets and dependent services
must already be built/configured; the harness does not provision infrastructure.

## Validation order

Generate and type-check before browser validation:

```powershell
yarn test:e2e:typecheck
yarn bddgen
yarn playwright test --list
```

Run **one generated scenario or Examples row at a time**, using the generated
file and line printed by `--list`:

```powershell
yarn playwright test '<generated-spec-path>:<line>' --workers=1 --retries=0
```

Check that each command selects exactly one test. Diagnose and fix migration
failures, rerun the affected scenario individually, and validate every remaining
scenario individually. Only after every isolated scenario passes, run:

```powershell
yarn test:e2e --workers=1 --retries=0
```

The configuration uses two workers with parallel scenarios as requested.
Saved drafts and submissions share external test accounts, so concurrent runs
can interfere; use `--workers=1` when diagnosing state-dependent failures.
Retries are disabled so a failed submission is not silently repeated.
Screenshots and video are always recorded; traces are kept
for failures. Generated tests, reports, and results are ignored by Git.

## Layout

- `features`: unchanged CSL feature files, including smoke and validation tests.
- `pages`: one typed page object per source CSL page, with source locators,
  expected titles, and methods; shared interactions are in `base-page.ts`.
- `fixture/fixture.ts`: explicit imports, types, and instances for every page.
- `steps`: source step bindings and StepLib methods/switches by journey, plus
  shared CSL navigation and assertions.
- `utility-helper/constants-lib.ts`: shared test values; credentials come only
  from the environment.
- `test-data/user-upload-files`: source upload fixtures used by the scenarios.

No source CSV data is needed by the CSL journeys; scenario variants remain in
the StepLib switch statements. Selenium-specific waits are replaced with
Playwright locator actions and retrying assertions, rather than fixed sleeps.

Character-count assertions explicitly permit an optional thousands separator
(for example `1750` or `1,750`), as approved during migration validation.
The numeric value and surrounding message must still match exactly; source
feature files are unchanged.
