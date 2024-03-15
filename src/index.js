const path=require('path')
const express = require('express')
const morgan=require('morgan')
const handlebars  = require('express-handlebars');
const app = express()
const port = 3000
const route = require('./routes')
const db=require('./config/db/')
//connect db

db.connect();

//express sẽ kiểm tra đường dẫn tới thư mục public
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
app.use(express.static(path.join(__dirname, '/public/')))

console.log(__dirname)
app.use(morgan('combined'))

// template engine
app.engine('hbs', handlebars.engine(
{
extname: '.hbs',
}
));
// đặt cho view engine là handlebars

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, './resource/views/'));
// xuất ra các file nằm trong thư mục view

// route init
route(app);


// in ra màn hình port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
