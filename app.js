const express = require('express')
const app = express()
const port = 3000
// View:樣版引擎負責畫面呈現
app.engine('.hbs',engine({extname:'.hbs'}))
app.set('view engine','.hbs')
app.set('views','./views')

// Model:載入靜態文件
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


// Controller:set router
app.get('/', (req, res) =>{
  res.redirect('/URL_Shortener')
})
app.get('/URL_Shortener',(req, res) =>{
  res.render('index')
})

app.listen(port,(req,res)=>{
  console.log(`express sever is running on http://localhost:${port}`)
})