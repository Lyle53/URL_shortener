const express = require('express')
const app = express()
const port = 3000
// set router
app.get('/', (req, res) =>{
  res.redirect('/URL_Shortener')
})
app.get('/URL_Shortener',(req, res) =>{
  res.render('index')
})

app.listen(port,(req,res)=>{
  console.log(`express sever is running on http://localhost:${port}`)
})