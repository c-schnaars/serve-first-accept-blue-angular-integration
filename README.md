# Serve First/Accept Blue/Angular Tokenization integration

This project shows you how to integrate a bare bones Angular 17 application with the Serve First/Accept Blue hosted
tokenization payment gateway. Specifically, this code shows you how to incorporate the JavaScript provided by Accept
Blue and use it to mount an iframe that will collect credit card information and return a nonce token. You then can use
that token in lieu of a credit card number to make a payment. In this manner, your code never touches the credit card
information and could allow you to remain SAQ-A compliant.

Please note that this project houses just the initial steps for a bare bones integration. You still need to create
fields to capture other fields necessary to actually make the payment, add error handling and so on. The assumption is
you have a backend API that will use this additional information as well as the nonce token returned by this code to
make the payment.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application reloads automatically if you
change any source files.

## Build

Run `npm install` to install all packages.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Getting Started

`index.html` houses a development version of the tokenization `script`. You may need to upgrade this script for
development if a more recent version is available, and you definitely need to upgrade this URL for production.

In `angular.json`, add `src/assets/acceptBlue.js` to `projects.ServeFirst.architect.build.options.scripts`.

In the `assets` folder, update `acceptBlue.js` to house your tokenization key. Even for development, you must create
and use a valid key or you will not get back a nonce token. Serve First can help you with this.
