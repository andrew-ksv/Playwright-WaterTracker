# Automated tests for Water Tracker

## Description
This repository contains automated tests for the Water Tracker web app, using Playwright 🎭. The tests cover both frontend and backend functionality to ensure the core features work correctly.

## Installation
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies: npm install

## Running Tests
- Run all tests: npx playwright test
- Run a specific test: npx playwright test tests/frontend/test-name.spec.ts
- Run in UI mode: npx playwright test --ui
- Run frontend tests in browsers:

    -npx playwright test --project=frontend-chromium

    -npx playwright test --project=frontend-firefox

    -npx playwright test --project=frontend-webkit

- Run backend tests:

    -npx playwright test --project=backend

## Project Structure

- 📁 **tests/** – Test files.
    - 📁 **frontend/** – Contains tests for the frontend.
        - 📄 **<test-name>.spec.ts** – Test file.
    - 📁 **backend/** – Contains tests for the backend.
        - 📄 **<test-name>.spec.ts** – Test file.
    - 📁 **pages/** – Page object pattern (POP) files.
    - 📁 **utils/** – Utility functions for reusable tasks.

- ⚙️ **playwright.config.ts** – Playwright configuration file.