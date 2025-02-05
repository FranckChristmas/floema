
require('dotenv').config() // Load .env file
console.log(process.env.PRISMIC_ENDPOINT, process.env.PRISMIC_CLIENT_ID) // Output: https://your-repo-name.prismic.io/api/v2


const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('pages/home')
})

app.get('/about', (req, res) => {
  res.render('page/about')
})

app.get('/detail/:id', (req, res) => {
  res.render('pages/detail')
}) 

app.get('/collections/:id', (req, res) => {
  res.render('pages/collections')
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})