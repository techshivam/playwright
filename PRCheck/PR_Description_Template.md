## Summary

This Pull Request adds an automated Playwright test for the MindBridge learner registration happy path.

\---

## What Changed

* Added `tests/registration.spec.ts`
* Automated the learner registration workflow
* Included validation that successful registration displays the welcome page and success message

\---

## How to Test

1. Install project dependencies.
2. Run:

```bash
npx playwright test tests/registration.spec.ts
```

3. Confirm the registration test passes.

\---

## Checklist

* \[ ] Test executes successfully
* \[ ] Code reviewed
* \[ ] No merge conflicts
* \[ ] Ready for approval

