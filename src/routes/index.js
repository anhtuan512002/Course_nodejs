const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');
function route(app){
    // đặt cho view engine là handlebars
    //sử dụng site gồm có home, search (không cần tạo một trang mới)
    app.use('/',siteRouter);
    // sử dụng đối số 1 là tuyến đường => nếu truy cập vào website có /news thì sẽ chạy file news.js
    app.use('/news', newRouter);
    app.use('/courses', courseRouter);
    
}
module.exports = route;