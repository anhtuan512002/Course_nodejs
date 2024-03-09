const path=require('path')
const express = require('express')
const morgan=require('morgan')
const handlebars  = require('express-handlebars');
const app = express()
const port = 3000
//get / is the path of the url
//res is a function that send back the respones to the cilents
//
//http logger
app.use(morgan('combined'))

// template engine
app.engine('handlebars', handlebars.engine());
// đặt cho view engine là handlebars
app.set('view engine', 'handlebars');


app.set('views', path.join(__dirname, './resources/views/'));
// xuất ra các file nằm trong thư mục view

app.get('/', (req, res) => {
  res.render('home.handlebars')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
