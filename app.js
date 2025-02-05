
require('dotenv').config() // Load .env file
console.log(process.env.PRISMIC_ENDPOINT, process.env.PRISMIC_CLIENT_ID) // Output: https://your-repo-name.prismic.io/api/v2


const express = require('express')
const app = express()
const path = require('path')
const port = 3000

const Prismic = require('@prismicio/client')
var PrismicDOM = require('prismic-dom')

const initApi = (req) => {
  return Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
    req
  })
}

const handleLinkResolver = doc => { // Define the URL depending on the document type
//   if (doc.type === 'product') {
//     return `/detail/${doc.id}`
//   } else if (doc.type === 'collection') {
//     return `/collections/${doc.id}`
//   }
  return '/'
}

app.use((req, res, next) => {
res.locals.ctx = {
  endpoint: process.env.PRISMIC_ENDPOINT,
  linkResolver: handleLinkResolver
}
res.locals.PrismicDOM = PrismicDOM
next()
})

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