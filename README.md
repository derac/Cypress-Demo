# IEEE 829 Test Plan


## Test Plan Identifier

Front-End Testing TP_1.0


## References

* FrontEndChallenge.pdf details the requirements for this front-end app.
* [Manual Test Cases](https://docs.google.com/spreadsheets/d/1rEhoSg23ble09EFPadVTebpKhmCLXDrMQ5Y7UvaTqLc/edit#gid=0) is a spreadsheet which stores the test case information.
* [https://github.com/derac/Cypress-Demo](https://github.com/derac/Cypress-Demo) stores the Cypress test automation.


## Introduction

This test plan for front-end testing supports the following objectives:

1. To define the tools to be used throughout the testing process.
2. To communicate to the responsible parties the items to be tested, set expectations around schedule, and define environmental needs.
3. To define how the tests will be conducted.

## Test Items

The systems to be tested include the search function, breed picking button, results box, and any other minor features on the front page. This will include all features specified in the FrontEndChallenge.pdf document. These will be tested with a live connection to the external API. This is a single page application. It will be tested in the latest stable version of Chrome.

## Features To Be Tested

All features will be tested as an end user, including the following:

* A title is visible in the top left with the text “Dogs!”.
* An empty search input is visible in the top right with the placeholder text “Search”.
* A call is made to [https://dog.ceo/api/breeds/list/all](https://dog.ceo/api/breeds/list/all).
* A loading indicator is displayed until the list of breeds is loaded.
* 3 rows of 4 buttons are shown in the breed selection box after loading.
* Buttons are displayed in alphabetical order.
* When the breed button is clicked:
    * A pending style is applied to the button.
    * A call is made to [https://dog.ceo/api/breed/{breed_name}/images](https://dog.ceo/api/breed/{breed_name}/images)
    * A loading indicator is shown in the results box.
* After the call to [https://dog.ceo/api/breed/{breed_name}/images](https://dog.ceo/api/breed/{breed_name}/images) completes:
    * The loading indicator is removed from the results box.
    * A grid of images is shown in the results box.
* When a user types text into the search input, it will return a list of breeds whose name contains the search term and display them in the breed buttons box.
    * If 12 or more breeds match, display the first 12 breeds (sorted alphabetically).
    * If less than 12 breeds match, display all matching breeds (sorted alphabetically).
    * If no breeds match, display a message reading “No breed matches found.”.

## Features Not To Be Tested

These features will not be tested as they are not outlined in the requirements document:

* A button should appear at the end of the search results which loads more images (pagination).
* A box should appear at the beginning of the search results which displays the breed’s name.
* Results box displays an initial instructional message.

## Approach

All tests will have automation, this will be run before any PR is accepted. If any automated test case fails in this process, the PR will be rejected. \
 \
Tests will be manually conducted per the documented test cases stored in [Manual Test Cases](https://docs.google.com/spreadsheets/d/1rEhoSg23ble09EFPadVTebpKhmCLXDrMQ5Y7UvaTqLc/edit#gid=0) before deployment to production. The tester will execute the tests in the spreadsheet and mark each case as Pass / Fail / Skip. The tester should leave notes on actual results and any other relevant details when possible. 

When tests are marked as Fail, a bug report will be written in JIRA with full reproduction steps and environmental data.

Once complete, the test manager should review the test run reports in the spreadsheet and report back to the team accordingly.

## Pass/Fail Criteria

All core functionality of the systems should function as expected and outlined in the individual test cases. There must be no critical defects found and an end user must be able to search for a breed and bring up images of it successfully without any errors. 100% of all test cases should pass.

## Suspension Criteria

If any test cases fail, record the issue in JIRA and finish any test cases which do not rely on functionality of the failed test. Mark skipped tests with Skip in the Pass/Fail/Skip column. Report findings immediately to the test manager.

## Test Deliverables

Upon completion, the test run results will be saved in the spreadsheet and any bugs should be documented in JIRA.

## Testing Tasks

The following activities must be completed:

* Test plan prepared.
* Functional specifications written and delivered to the testing team
* Environment should be ready for testing.
* Perform the tests.
* Prepare test summary report.
* Log any bugs found in JIRA.

## Environmental Needs

There is no need to populate test data or set environmental flags. The latest version of Chrome should be installed on the tester’s machine. The tester should have access to the internet and should be able to access [https://dog.ceo/api](https://dog.ceo/api).


## Responsibilities

The Test Manager (Derek Olson) is responsible for facilitating the testing project, coordinating availability and schedule of testers and training them as needed. He will also write the automated tests. Each tester should understand the expectations on completion date and level of quality. The Test Manager should also communicate any risks to the team.

## Staffing And Training Needs

One tester will be used for manual tests. The test manager will fill this role. The tester should have an understanding of the basic functionality expected of the application.

## Schedule

Manual testing will take place 1 week prior to pushing the application to production. The first round of testing should be completed in 1 day. \
 \
Automated testing will be run before any PR is accepted.

## Risks And Contingencies

If the first round of testing is not completed within 2 days, it could delay bug fixes and final testing. If this happens, UAT would be pushed back and may affect the launch date.

If the testers don’t have an understanding of what the application does, testing could be delayed or not conducted properly.

## Approvals

The test manager and product manager both must agree on completion of the testing project and determine when it’s ready to proceed to the next step.