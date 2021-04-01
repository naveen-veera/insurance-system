# Insurance Quotation - Angular - Services

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

## Project Summary

It is a example project for understanding the Angular services. I have just implemented the services to calculate the Insurance Quotation.

Generate Insurance Quote for a qiven customer based on following condition
- Base Price - 1000 Rs
- Additional premium 10% if age is > 30, 20% if age is > 40, and 45% if age is > 55.
- Additional premium 25% if Smoking & Drinks, 0% for Tee Toddler.
- Additional premium 5% if user lives in Urban area, and 10% if user lives in Rural area.
- Additional premium 10% if user lives near western international border.
- Additional premium 20% if Diabetic.
- And 18% GST on Final Cost.

The input to the service is Customer objects that has above attributes using which the function/service should calculate the Insurance Quotation.