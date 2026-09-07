# playwright-automation-project
# playwright-automation-project
Playwright Test Automation Framework

A Playwright + TypeScript test automation project demonstrating UI test automation, Page Object Model (POM), reusable fixtures, data-driven testing, and API testing.

Project Overview

This project is built as a learning and portfolio automation framework. It uses Playwright with TypeScript to automate functional tests for a web application and to demonstrate common QA automation practices.

The framework is organized to keep test cases readable while moving page-specific actions, reusable setup, and test data into dedicated modules.

What This Project Demonstrates

End-to-end UI automation with Playwright

TypeScript-based test development

Page Object Model (POM)

Reusable Playwright fixtures

Data-driven testing

Login and authentication-related scenarios

Positive and negative test cases

Shopping-cart workflows

Checkout and order-completion workflows

Product sorting and removal scenarios

API testing with Playwright's API request capabilities

Assertions and response validation

Test reporting and Playwright test artifacts

Git/GitHub-based project management

Project Structure

PW with GPT/
│
├── data/
│   └── logindata.ts
│
├── fixtures/
│   └── pages.fixtures.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── AddToCartPage.ts
│   ├── CheckOutDetails.ts
│   ├── ProcessOrder.ts
│   ├── RemoveProducts.ts
│   └── Invalid_user.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── invalidLogin.spec.ts
│   ├── Loginwith_locked_user.spec.ts
│   ├── Datadriven.spec.ts
│   ├── Addtocart.spec.ts
│   ├── removeProduct.spec.ts
│   ├── sortProducts.spec.ts
│   ├── CheckOutInfo.spec.ts
│   ├── Checkout.spec.ts
│   ├── Complete order.spec.ts
│   └── api/
│       └── users.api.spec.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md

Framework Architecture

Page Object Model

Page classes contain locators and page-specific actions so that test cases focus on business behavior instead of implementation details.

For example, instead of placing login selectors directly inside every test, the test can use the LoginPage abstraction:

await loginPage.goto();

await loginPage.login(
    'standard_user',
    'secret_sauce'
);

This reduces duplicated selectors and makes the test suite easier to maintain.

Custom Fixtures

fixtures/pages.fixtures.ts provides reusable page objects to tests.

This allows tests to receive the required page objects directly through Playwright's fixture system rather than repeatedly constructing them inside every test.

Conceptually:

test('Order Completed', async ({
    page,
    loginPage,
    inventoryPage,
    addtocart,
    checkoutdetails,
    processorder
}) => {
    // test steps
});

Test Data

Reusable test data is separated from test implementation.

data/logindata.ts contains login-related data used by data-driven or parameterized tests.

This makes it easier to add additional test scenarios without duplicating test logic.

Test Coverage

The current suite includes scenarios around:

Authentication

Successful login

Invalid login validation

Locked-user login behavior

Data-driven login validation

Inventory and Products

Inventory page validation

Product visibility

Product sorting

Adding products to the cart

Removing products from the cart

Checkout

Checkout information

Checkout workflow

Completing an order

Order completion validation

API Testing

The project also contains an API test under:

tests/api/users.api.spec.ts

This demonstrates Playwright's API request functionality, including concepts such as:

const response = await request.get(...);

and:

const body = await response.json();

The test suite therefore covers both browser-based UI automation and API-level testing.

Prerequisites

Install the following before running the project:

Node.js

npm

Git

Installation

Clone the repository:

git clone <your-repository-url>
cd "PW with GPT"

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

Running Tests

Run the complete test suite:

npx playwright test

Run tests with the browser visible:

npx playwright test --headed

Run a specific test file:

npx playwright test tests/login.spec.ts

Run the API tests:

npx playwright test tests/api/users.api.spec.ts

Test Reports

Playwright generates test artifacts and reports that can be inspected after a test run.

To open the HTML report:

npx playwright show-report

Technologies

TypeScript

Playwright

Node.js

npm

Git / GitHub

Learning Progression

This project has been developed progressively while learning Playwright automation concepts.

The framework currently demonstrates:

TypeScript
    ↓
Locators & Assertions
    ↓
Page Object Model
    ↓
Test Data
    ↓
Data-Driven Testing
    ↓
Hooks
    ↓
Custom Fixtures
    ↓
UI Test Automation
    ↓
API Testing
    ↓
State Management        ← Next learning topic
    ↓
Authentication State
    ↓
Advanced Fixtures
    ↓
Helpers / Utilities
    ↓
Network Mocking
    ↓
CI/CD

Future Improvements

Planned improvements include:

Authentication state management with storageState

Reusable authentication setup

Browser/session state management

Additional API coverage

Shared helper utilities

Advanced fixture design

Network interception and mocking

Improved test configuration and environment management

CI/CD integration

Expanded reporting and test artifacts

Further framework refactoring for scalability

Purpose

The purpose of this project is to demonstrate practical knowledge of modern test automation using Playwright and TypeScript, while continuously improving the framework toward a maintainable, scalable QA automation architecture.

Author

Phillip Val Cabalo

QA / Test Automation portfolio project.
