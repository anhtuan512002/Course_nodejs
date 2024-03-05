const express = require('express')
const app = express()
const port = 3000
//get / is the path of the url
//res is a function that send back the respones to the cilents
//
app.get('/tin-tuc', (req, res) => {
  var a=1;
  var b=2;
  var c=a+b;
  return res.send('Tôi tên là tuấn');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})