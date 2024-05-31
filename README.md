# WebDriverIO Introduction

This repository contains solutions for automated testing task 1 of the course Automated Testing in JavaScript using WebDriverIO, Mocha, and the Page Object Model pattern.

## Task Description

Open https://pastebin.com/ or a similar service in any browser.
Create 'New Paste' with the following attributes:
* Code: "Hello from WebDriver"
* Paste Expiration: "10 Minutes"
* Paste Name / Title: "helloweb"

## Installation

Before you begin, ensure you have the following installed:

- Node.js 
- npm or yarn

Clone the repository and install the dependencies:

git clone https://github.com/yourusername/webdriverio_introduction.git
cd webdriverio_introduction
npm install
# or
yarn install

## Running Tests
To run the tests, use the following command:
npm run wdio

To run the tests multiple times, you can use a loop in your terminal using Bash:
for i in {1..10}; do npm run wdio; done
