
# Project Hackspace - Plant App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Table of contents
* [About the project](#about-the-project)
* [Tools, Libraries and more](#tools-libraries-and-more)
* [Requeriments](#requeriments)
* [Deploy Local](#deploy-local)
* [Deploy Production](#deploy-production)

### About the project

It is a plant management system, which includes login by email and password or other 2 options such as Google or Facebook. Therefore, it allows you to log out.

Once logged in, it allows managing each plant, allowing data such as name, description and image to be entered.

Plant management allows you to create, delete and update your record that you want to store or is already stored.

When there is a record, it allows the information to be loaded into the application according to the user.

Allows you to view the list of plants stored in the application. And it also allows you to view the image stored in the plant.

The development was carried out with the implemented technologies, even the application is responsive.

### Tools, libraries and more

  - Firestore: Cloud Firestore is a NoSQL document database that lets you easily store, sync, and query data for your mobile and web apps - at global scale.
  - ReactJS: Is an open-source, front end, JavaScript library for building user interfaces or UI components.
  - Moment: ⏱ A library for working with dates and times in JS
  - Tailwindcss: Is the only framework that I've seen scale on large teams. It's easy to customize, adapts to any design, and the build size is tiny
  - Cloudinary: Streamline media management and improve user experience by automatically delivering images and videos, enhanced and optimized for every user.
  - PurgeCSS: PurgeCSS is a tool for removing CSS that you're not actually using in your project. It can be used as part of your development workflow. Used for Tailwindcss to production.
  - Redux: Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. You can use Redux together with React, or with any other view library.
  - Redux Thunk: Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the function's body once the asynchronous operations have been completed.

### Requeriments

```
  npm install -g postcss-cli postcss postcss-import
```

### Deploy Local
Pre deploy 
```
  npm run install
```
Runs the app in the development mode.

```
  npm run build
  npm run start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Deploy Production

Important: PurgeCSS added in package.json and tailwind.config.js, configured to make sure your production builds.

Public project in branch gh-pages

```
  npm run predeploy
  npm run deploy
```
View page demo in:
* [Link gh-pages](https://glisselisbeth.github.io/plantapp/)
