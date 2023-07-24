# React Graphl Nest Auth

This project is a web application that allows the user to create posts using graphql and jwt auth

# Table of Contents

- [React Graphl Nest Auth](#react-graphl-nest-auth)
- [Table of Contents](#table-of-contents)
- [Methodologies](#methodologies)
- [UI Components Breakdown](#ui-components-breakdown)
    - [Atoms](#atoms)
    - [Molecules](#molecules)
    - [Organisms](#organisms)
    - [Templates](#templates)
    - [Pages](#pages)
- [State Management](#state-management)
- [Code Quality](#code-quality)
  - [Test Driven Development](#test-driven-development)
  - [Linting](#linting)
  - [Conventions](#conventions)
- [Getting Started](#getting-started)
  - [Available Scripts](#available-scripts)
    - [`npm run start`](#npm-run-start)
    - [`npm run test`](#npm-run-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)
    - [`npm run commit`](#npm-run-commit)
    - [`npm run format`](#npm-run-format)
    - [`npm run lint`](#npm-run-lint)
  
# Methodologies

- Atomic Design: https://bradfrost.com/blog/post/atomic-web-design/
- Test Driven Development: https://en.wikipedia.org/wiki/Test-driven_development
- SMACSS: https://smacss.com/

# UI Components Breakdown
By following the [Atomic design Methodology]( https://bradfrost.com/blog/post/atomic-web-design/), we can break down the UI components into 5 categories: Atoms, Molecules, Organisms, Templates and Pages.

![image](./docs/ui-components.drawio.svg)
### Atoms
- Button
- Input
- Label
- Container
- Link
- h2
  
### Molecules
- FormHeading
- InputGroup
- Alert
- Preloader
- Toast
  
### Organisms
- ChangePasswordForm
- CreatePostForm
- RecoverPasswordForm
- SignInForm
- signUpForm
- Header
- PostsList
- PrivateRoute


### Templates
- AuthPageTemplate
  
### Pages
- changePassword
- home
- login
- recoverPassword
- signUp


# State Management

The state is divided into 2:
- Auth: Contains the user data.
- Posts: Contains the posts data.


# Code Quality


## Test Driven Development

Using Jest and React Testing Library for unit testing and Cypress for end to end testing.

## Linting

Using ESLint, StyleLint and Prettier with Husky to enforce code quality and consistency.


## Conventions

- Conventional Commits: https://www.conventionalcommits.org/en/v1.0.0/
- git flow: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow


# Getting Started 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run commit`

Runs the [commitizen CLI](https://github.com/commitizen/cz-cli) to help you write conventional commit messages.

### `npm run format`

Runs [Prettier](https://prettier.io/) to format your code.

### `npm run lint`

Runs [ESLint](https://eslint.org/) to check your code for errors and warnings.
