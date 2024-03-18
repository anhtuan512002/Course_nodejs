# Ứng dụng Node.js quản lý khóa học

This is a Node.js application for managing courses that allows creating, deleting, and updating courses. The application uses NodeJS and ExpressJS to create a course management website.

## Dependent libraries

1. [express@4.18.3](https://github.com/expressjs/express): Framework for building web applications with Node.js.
2. [express-handlebars@7.1.2](https://github.com/ericf/express-handlebars): Middleware to integrate Handlebars with Express.js.
3. [method-override@3.0.0](https://github.com/expressjs/method-override): Middleware to allow the use of HTTP methods other than GET and POST.
4. [mongoose@8.2.1](https://github.com/Automattic/mongoose): Object Data Modeling (ODM) library for MongoDB and Node.js.
5. [mongoose-delete@1.0.2](https://github.com/dsanseviero/mongoose-delete): Plugin for Mongoose to delete a document without removing it from the database.
6. [mongoose-slug-generator@1.0.4](https://github.com/johanhagalund/mongoose-slug-generator): Plugin for Mongoose to generate slugs (static URLs) for documents.

## Dev Dependencies libraries

1. [morgan@1.10.0](https://github.com/expressjs/morgan): Middleware for logging HTTP requests.
2. [node-sass@9.0.0](https://github.com/sass/node-sass): SASS compiler for Node.js.
3. [nodemon@3.1.0](https://github.com/remy/nodemon): Tool to monitor changes in the code and automatically restart the application.


## Directory Structure


```bash
/course_nodejs
    ├── src
    │   ├── app
    │   │   ├── controllers          # Contains all the controllers (used for routing)
    │   │   │   ├── CourseController.js
    │   │   │   ├── MeController.js
    │   │   │   ├── NewsController.js
    │   │   │   └── SiteController.js
    │   │   └── models              # Used to connect with MongoDB database
    │   │       └── Course.js
    │   ├── config
    │   │   └── db
    │   │       └── index.js        # Database connection
    │   ├── public                  # Assets
    │   │   ├── css
    │   │   │   └── app.css
    │   │   └── img
    │   └── resource
    │       ├── scss
    │       │   ├── _variables.scss
    │       │   └── app.scss
    │       └── views              # Handlebars templates for the website
    │           ├── courses        # Website pages for courses
    │           │   ├── create.hbs
    │           │   ├── edit.hbs
    │           │   ├── show.hbs
    │           ├── layouts        #Main layout
    │           |   └── main.hbs
    │           ├── me             #Layout for personal page
    │           │   ├── stored-courses.hbs
    │           │   └── trash-courses.hbs
    │           ├── partials       #Header and footer
    │           │   ├── header.hbs
    │           │   ├── footer.hbs
    │           ├── home.hbs       #Home page
    │           ├── news.hbs       #News page
    │           ├── search.hbs     
    ├── routes                     # Application routes
    │   ├── courses.js
    │   ├── index.js
    │   ├── me.js
    │   ├── news.js
    │   └── site.js
    ├── util
    │   └── mongoose.js           # Function to connect with Mongoose
    └── index.js                  # Application entry point
