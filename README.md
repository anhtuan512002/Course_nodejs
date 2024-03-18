# Course Node.js Application

This repository contains the source code for a Node.js application focused on course management.

## Directory Structure

```bash
/course_nodejs
    ├── src
    │   ├── app
    │   │   ├── controllers          # Contains all application controllers
    │   │   │   ├── CourseController.js
    │   │   │   ├── MeController.js
    │   │   │   ├── NewsController.js
    │   │   │   └── SiteController.js
    │   │   └── models              # Contains all application models
    │   │       └── Course.js
    │   ├── config
    │   │   └── db
    │   │       └── index.js         # Database configuration
    │   ├── public                  # Public assets
    │   │   ├── css
    │   │   │   └── app.css
    │   │   └── img
    │   └── resource
    │       ├── scss
    │       │   ├── _variables.scss
    │       │   └── app.scss
    │       └── views              # Handlebars view templates
    │           ├── courses
    │           │   ├── create.hbs
    │           │   ├── edit.hbs
    │           │   ├── show.hbs
    │           ├── layouts
    │           |   └── main.hbs
    │           ├── me
    │           │   ├── stored-courses.hbs
    │           │   └── trash-courses.hbs
    │           ├── partials
    │           │   ├── header.hbs
    │           │   ├── footer.hbs
    │           ├── home.hbs
    │           ├── news.hbs
    │           ├── search.hbs
    ├── routes                     # Application routes
    │   ├── courses.js
    │   ├── index.js
    │   ├── me.js
    │   ├── news.js
    │   └── site.js
    ├── util
    │   └── mongoose.js            # Mongoose utility functions
    └── index.js                  # Application entry point
