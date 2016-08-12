# Meal Tracker

#### By _**George Olson**_

## Description

_Track meals you've eaten and calories consumed with this AngularJS 2 application._

## Specifications

* It can add a new meal
  * _Example Input: "Bagel with cream cheese", "A warm, toasted bagel with tasty cream cheese on it", 380_
  * _Example Output: Bagel with cream cheese, Details: A warm, toasted bagel with tasty cream cheese on it, Calories: 380_
* It can list out multiple meals that have been submitted
    * _Example Input: currently existing meal: Bagel with cream cheese, new meal: "Oatmeal", "Delicious oats with fruits & nuts", 300_
    * _Example Output: Today's meals: Bagel with cream cheese, Oatmeal_
* It can show a list of high calorie meals.
  * _Example Input: Today's meals: Bagel with cream cheese (380 calories), Chocolate hazelnut milkshake (600 calories)_
  * _Example Output: High calorie meals: Chocolate hazelnut milkshake (600 calories)_  
* It can show a list of low calorie meals.
  * _Example Input: Today's meals: Bagel with cream cheese (380 calories), Chocolate hazelnut milkshake (600 calories)_
  * _Example Output: Low calorie meals: Bagel with cream cheese (380 calories)_  
* It can edit a meal to change specific values.
  * _Example Input: "Bagel with cream cheese", "A warm, toasted bagel with tasty cream cheese on it", 380 (change to 300)_
  * _Example Output: Bagel with cream cheese, Details: A warm, toasted bagel with tasty cream cheese on it, Calories: 300_

## Setup/Installation Requirements
  * Use terminal to clone git repository to your computer._
  * Ensure you have Node.JS installed <a href="https://www.learnhowtoprogram.com/javascript/introduction-to-javascript/introducing-npm-and-gulp">(Guide to setting up)</a>
  * Run "$ npm install" in console to ensure packages are installed
  * Run "$ bower install" in console to ensure front-end elements will be installed and functioning
  * Run "$ gulp build" in console to compile all components
  * Run "$ gulp serve" in console to run gulp tasks and open local server in your default browser
  * Web page should appear automatically, if not open the web browser of your choice and view "http://localhost:3000/" to use the web page

## Known Bugs
 _No known bugs in the current version._

## Technologies Used
_AngularJS 2, JavaScript, TypeScript, NodeJS, Bower, Gulp, Bootstrap, HTML_

### License
*Open GPL*

### Copyright
_2016. George Olson._
