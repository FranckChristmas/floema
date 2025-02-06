require('dotenv').config() // Load .env file

if (!process.env.PRISMIC_ENDPOINT || !process.env.PRISMIC_ACCESS_TOKEN) {
  throw new Error('Missing required environment variables PRISMIC_ENDPOINT or PRISMIC_ACCESS_TOKEN')
}
console.log(process.env.PRISMIC_ENDPOINT, process.env.PRISMIC_ACCESS_TOKEN) // Output: https://your-repo-name.prismic.io/api/v2

const express = require('express')
const app = express()
const path = require('path')
const port = 3000

const { createClient } = require('@prismicio/client')
var PrismicDOM = require('prismic-dom')
const { access } = require('fs')

function initApi(req) {
  return createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetch: req
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

app.use((req, res, next) => {  //middleware to inject prismic context
  res.locals.ctx = {
    endpoint: process.env.PRISMIC_ENDPOINT,
    linkResolver: handleLinkResolver
  }
  res.locals.PrismicDOM = PrismicDOM
  next()
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const handleRequest = async api => {
  const [home, about, meta, { results: collections }] = await Promise.all([
    api.getSingle('home'),
    api.getSingle('about'),
    api.getSingle('meta'),
    api.getByType('collection', { fetchLinks: 'product.image' })
  ])
  
  const assets = []

  home.data.gallery.forEach((item) => {
    assets.push(item.image.url)
  })

  about.data.gallery.forEach((item) => {
    assets.push(item.image.url)
  })

  about.data.body.forEach((section) => {
    if (section.slice_type === 'gallery') {
      section.items.forEach((item) => {
        assets.push(item.image.url)
      })
    }
  })
      if (item.products_product && item.products_product.data && item.products_product.data.image) {
        assets.push(item.products_product.data.image.url)
      }
  collections.forEach((collection) => {
    collection.data.products.forEach((item) => {
      assets.push(item.products_product.data.image.url)
    })
  })

  return {
    assets,
    meta,
    home,
    collections,
    about,
  }
}

app.get('/', async (req, res) => {
  try {
    const api = initApi(req)
    const defaults = await handleRequest(api)
    res.render('./pages/home', {
      ...defaults,
    })
  } catch (error) {
    console.error('Error in / route:', error)
    res.status(500).send('Error fetching data')
  }
})

app.get('/about', async (req, res) => {
  try {
    const api = initApi(req)
    const defaults = await handleRequest(api)
    res.render('pages/about', {
      ...defaults,
    })
  } catch (error) {
    console.error('Error in /about route:', error)
    res.status(500).send('Error fetching data')
  }
})

app.get('/collections', async (req, res) => {
  try {
    const api = initApi(req)
    const defaults = await handleRequest(api)
    res.render('pages/collections', {
      ...defaults,
    })
  } catch (error) {
    console.error('Error in /collections route:', error)
    res.status(500).send('Error fetching data')
  }
})

app.get('/detail/:uid', async (req, res) => {
  try {
    const api = initApi(req)
    const defaults = await handleRequest(api)

    const product = await api.getByUID('product', req.params.uid, {
      fetchLinks: 'collection.title',
    })

    res.render('pages/detail', {
      ...defaults,
      product,
    })
  } catch (error) {
    console.error('Error in /detail/:uid route:', error)
    res.status(500).send('Error fetching data')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})