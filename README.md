# hello-angular-1
A simple example of Hello World in Angular 1.x syntax.

##What is this?
This example shows how to take a model property defined in a Controller and populate it within an Angular view. 

###Within the application-controller.js
A model property `place` has been added to the controller instance via `this`. Why? Controllers in Angular are simply constructors.

###Within the index.html
Via a template: As a template all that needs to be done is to add `{{ac.place}}` within our index.html document. 

Via a directive: As a directive a new HTML tag is created `<di-hello></di-hello>`. This tag expects an attribute with the model property defined on it `<di-hello place="{{ac.place}}"></di-hello>` .

##Instructions
1. Install [NodeJS](nodejs.org)
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e. Angular and Express)
    * The Node/Express Web Server will start
4. Go to `http://localhost:8080` in your web browser