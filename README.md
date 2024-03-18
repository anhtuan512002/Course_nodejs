Xây dựng trang web sử dụng NodeJS & ExpressJS để tạo nên một trang khóa học có các chức năng là tạo khóa học, xóa khóa học, chỉnh sửa thông tin khóa học.

/course_nodejs
    ├── src
    │   ├── app
    │   │   ├── controllers
    │   │   │   ├── CourseController.js
    │   │   │   ├── MeController.js
    │   │   │   ├── NewsController.js
    │   │   │   └── SiteController.js
    │   │   └── models
    │   │       └── Course.js
    │   ├── config
    │   │   └── db
    │   │       └── index.js
    │   ├── public
    │   │   ├── css
    │   │   │   └── app.css
    │   │   └── img
    │   └── resource
    │       ├── scss
    │       │   ├── _variables.scss
    │       │   └── app.scss
    │       └── views
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
    ├── routes
    │   ├── courses.js
    │   ├── index.js
    │   ├── me.js
    │   ├── news.js
    │   └── site.js
    ├── util
    │   └── mongoose.js
    └── index.js
