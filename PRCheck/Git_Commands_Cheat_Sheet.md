# Git Commands Cheat Sheet

This document shows the Git commands that correspond to each action performed in Visual Studio Code.

---

## Initialize a Repository

```bash
git init
```

---

## Check Current Branch

```bash
git branch
```

---

## Create and Switch to a Feature Branch

```bash
git checkout -b feature/registration-test
```

---

## View Repository Status

```bash
git status
```

---

## Stage the Playwright Script

```bash
git add tests/registration.spec.ts
```

---

## Commit the Changes

```bash
git commit -m "feat: add registration happy-path test"
```

---

## Add a GitHub Remote (if needed)

```bash
git remote add origin https://github.com/<your-username>/<repository>.git
```

---

## Verify the Remote

```bash
git remote -v
```

---

## Push the Feature Branch

```bash
git push -u origin feature/registration-test
```

---

## Check Commit History

```bash
git log --oneline
```

---

## Switch Back to Main

```bash
git checkout main
```

---

## Pull the Latest Changes

```bash
git pull origin main
```

---

## Helpful Commands

Show modified files:

```bash
git status
```

List branches:

```bash
git branch
```

Show differences:

```bash
git diff
```

Show configured remotes:

```bash
git remote -v
```