const path=require('path')
const express = require('express')
const morgan=require('morgan')
const handlebars  = require('express-handlebars');
const app = express()
const port = 3000
//express sẽ kiểm tra đường dẫn tới thư mục public

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

app.get('/', (req, res) => {
  res.render('home')
})


app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
