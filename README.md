# Digital Assistant Testing Suite

## Overview

This repository contains automated tests for both frontend and backend components.

## Test Types

### Frontend Tests
Automated UI tests for the Digital Assistant's web application. These tests ensure the correct functionality and user experience of the web interface.

### Backend Tests
API tests for verifying the functionality of the PokeAPI. These tests ensure that the backend endpoints respond as expected and handle different scenarios correctly.

## Test Files

- **Frontend Tests:**
  - **File:** `cypress/e2e/ottonova_insurance_calculator.cy.js`
  - **Description:** Contains automated tests for the frontend functionality of the Digital Assistant's web application.

- **Backend Tests:**
  - **File:** `cypress/e2e/pokeapi_backend.cy.js`
  - **Description:** Contains automated tests for the PokeAPI endpoints.

- **Test Data:**
  - **File:** `cypress/fixtures/testData.json`
  - **Description:** Contains hardcoded test data used in the tests.

- **Reusable Functions:**
  - **File:** `cypress/support/commands.js`
  - **Description:** Contains reusable Cypress commands used across the test files.


### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) - For running tests and managing dependencies
- [Cypress](https://www.cypress.io/) - For running frontend and backend tests


#### Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Ankita1312/digital-assistant.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd path
    ```


3. **Open Cypress Test Runner:**

    ```bash
    npx cypress open
    ```

   This will open the Cypress Test Runner, where you can run the frontend tests interactively.

4. **Run the frontend tests/backend tests in headless mode:**

    ```bash
    npx cypress run --spec cypress/e2e/ottonova_insurance_calculator.cy.js
    ```

    ```bash
    npx cypress run --spec cypress/e2e/pokeapi_backend.cy.js
    ```


