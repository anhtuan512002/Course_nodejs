const express = require('express')
const morgan=require('morgan')
const app = express()
const port = 3000
//get / is the path of the url
//res is a function that send back the respones to the cilents
//

app.use(morgan('combined'))

app.get('/tin-tuc', (req, res) => {

  return res.send(`
  <h1 style="color:red">hello</h1>
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})