const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
  res.send('express app')
})

app.listen(port,()=>{
  console.log(`express sever is running on http://localhost:${port}`)
})