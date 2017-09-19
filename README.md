# simple-gallery
Reusable gallery component using HTML, SCSS and JS
## Specifications
The basic functionality needed for this component is to load and display a list of images in a carousel style which can be navigated through by the user.

## Installing the application
To install the application using npm
```
npm install
```
## Running the application
To run the application locally
```
npm run start
```
## Deploy the application
To deploy the application
```
npm run build
```
The production built hasn't been fully optimized.
## Built with
* [React](https://facebook.github.io/react/) - JavaScript library.
* [Webpack](https://webpack.js.org/) - Module bundler.
* [Alt](http://alt.js.org/) - State manager.
* [Babel](https://babeljs.io/) - JavaScript compiler.
* SASS in conjunction with [CSS Modules](https://github.com/css-modules/css-modules).
* ESLint adopting [airbnb](https://www.npmjs.com/package/eslint-config-airbnb)'s config.
* CSS lint adopting [stylelint](https://github.com/stylelint/stylelint).

## TODO (improvements)
* Resize Carousel to use the width of its parent not 100%
* Implement infinite scrolling
* Implement lazy loading (the Carousel is already set-up for it)
* Add pagination to the Carousel
* Add full width on GalleryImage's click
* Improve design and UX
* Add nicer images
