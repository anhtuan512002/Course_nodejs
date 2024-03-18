# Ứng dụng Node.js quản lý khóa học

Sử dụng NodeJS và ExpresJS để tạo ra một trang khóa học gồm có các chức năng như tạo mới, xóa, cập nhập các khóa học mới.

Một dự án ứng dụng Node.js với các thư viện sau đã được cài đặt:

## Các thư viện phụ thuộc (dependencies)

1. [express@4.18.3](https://github.com/expressjs/express): Framework web cho Node.js.
2. [express-handlebars@7.1.2](https://github.com/ericf/express-handlebars): Middleware để tích hợp Handlebars vào Express.js.
3. [method-override@3.0.0](https://github.com/expressjs/method-override): Middleware cho phép sử dụng HTTP phương thức khác ngoài GET và POST.
4. [mongoose@8.2.1](https://github.com/Automattic/mongoose): ODM library cho MongoDB và Node.js.
5. [mongoose-delete@1.0.2](https://github.com/dsanseviero/mongoose-delete): Plugin cho Mongoose để xóa một tài liệu mà không xóa nó khỏi cơ sở dữ liệu.
6. [mongoose-slug-generator@1.0.4](https://github.com/johanhagalund/mongoose-slug-generator): Plugin cho Mongoose để tạo slug (URL tĩnh) cho các tài liệu.

## Các thư viện phụ thuộc phát triển (devDependencies)

1. [morgan@1.10.0](https://github.com/expressjs/morgan): Middleware để ghi log các yêu cầu HTTP.
2. [node-sass@9.0.0](https://github.com/sass/node-sass): Biên dịch SASS cho Node.js.
3. [nodemon@3.1.0](https://github.com/remy/nodemon): Công cụ theo dõi các thay đổi trong mã nguồn và tự động khởi động lại ứng dụng.


## Cấu trúc thư mục

```bash
/course_nodejs
    ├── src
    │   ├── app
    │   │   ├── controllers          # Chứa tất cả các controller (dùng để điều hướng trang)
    │   │   │   ├── CourseController.js
    │   │   │   ├── MeController.js
    │   │   │   ├── NewsController.js
    │   │   │   └── SiteController.js
    │   │   └── models              # sử dụng để kết nối với database Mongodb
    │   │       └── Course.js
    │   ├── config
    │   │   └── db
    │   │       └── index.js        # Kết nối dữ liệu
    │   ├── public                  # Tài nguyên
    │   │   ├── css
    │   │   │   └── app.css
    │   │   └── img
    │   └── resource
    │       ├── scss
    │       │   ├── _variables.scss
    │       │   └── app.scss
    │       └── views              # Các giao diện Handlebars cho trang web
    │           ├── courses        # Trang web của khóa học
    │           │   ├── create.hbs
    │           │   ├── edit.hbs
    │           │   ├── show.hbs
    │           ├── layouts        #giao diện chính
    │           |   └── main.hbs
    │           ├── me             #giao diện cho trang cá nhân
    │           │   ├── stored-courses.hbs
    │           │   └── trash-courses.hbs
    │           ├── partials       #header và footer
    │           │   ├── header.hbs
    │           │   ├── footer.hbs
    │           ├── home.hbs       #trang home
    │           ├── news.hbs       #trang news
    │           ├── search.hbs     #trang tìm kiếm
    ├── routes                     # Các tuyến đường của ứng dụng
    │   ├── courses.js
    │   ├── index.js
    │   ├── me.js
    │   ├── news.js
    │   └── site.js
    ├── util
    │   └── mongoose.js           # Hàm dùng để kết nối với Mongoose
    └── index.js                  # index vào trong ứng dụng
