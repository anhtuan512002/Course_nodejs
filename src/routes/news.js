const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController'); // Change the import statement to use the correct casing

// nên để cái /:slug trước bởi vì trong javascirpt nó chạy từ trên xuống dưới nên nếu đã match với nhau
// thì nó sẽ không chạy cái dưới nữa
// ví dụ:
//router.use('/', newsController.index);  nó sẽ chạy lênh này trước nên sẽ không truy cập vào file đuôi được
//router.use('/:slug', newsController.show); sẽ không thưc hiện được
router.use('/:slug', newsController.show); 
router.use('/', newsController.index); 


module.exports = router;