# amexsamplefw
a UI testing framework to test for UI elements validation 

## **Overview:**

This is a sample test automation framework developed using **Playwright**
**Playwright** is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.
## Features
 Supports execution of tests in different browsers.
- Supports running scenarios in parallel mode. It runs 2 scenarios in parallel by default.
- Flaky scenario can be Retried multiple times until either it passes or the maximum number of attempts is reached. You can enable this via the retry configuration option.
- Supports rerun of the failed scenarios.
  
 ## Supported Browsers

1. Chrome - default browser
2. Firefox
3. MS Edge
4. WebKit - web browser engine used by Safari

#### Steps to use
##### 1. Installation

Playwright framework requires [Node.js](https://nodejs.org/) v14+ to run.
Installing the dependencies.
```sh
npm ci
##### 2. Execution
To run test scenarios use below command.
1. Headed mode
  npx playwright test --headed
2. Headless mode
  npx playwright test
##### 3. Report
  npx playwright show-report
