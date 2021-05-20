const express = require('express')
const serveStatic = require('serve-static')
const axios = require('axios')
const path = require('path')
const history = require('connect-history-api-fallback')

require('dotenv').config()

const app = express()

const port = process.env.PORT || 3000

const staticFileMiddleware = express.static(path.join(__dirname + '/dist'))

if (process.env.NODE_ENV == 'production') {
  /* app.use(staticFileMiddleware)
  app.use(
    history({
      disableDotRule: true,
      verbose: true
    })
  )
  app.use(staticFileMiddleware) */

  app.use('/', serveStatic(path.join(__dirname, '/dist')))
  app.use(
    history({
      disableDotRule: true,
      verbose: true
    })
  )
  app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
  })
}

app.get('/api/coins', function (req, res) {
  axios
    .get(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      {
        qs: {
          start: '1',
          limit: '10',
          convert: 'USD'
        },
        headers: {
          'X-CMC_PRO_API_KEY': process.env.coinmarketApiKey
        },
        json: true,
        gzip: true
      }
    )
    .then(function (response) {
      res.setHeader('Cache-Control', 'no-cache')
      res.json(response.data)
    })

    .catch(function (err) {
      console.log(`API call error: ${err.message}`)
    })
})

app.get('/api/market_data', function (req, res) {
  axios
    .get('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest', {
      qs: {
        start: '1',
        limit: '10',
        convert: 'USD'
      },
      headers: {
        'X-CMC_PRO_API_KEY': process.env.coinmarketApiKey
      },
      json: true,
      gzip: true
    })
    .then(function (response) {
      res.setHeader('Cache-Control', 'no-cache')
      res.json(response.data)
    })
    .catch(function (error) {
      console.log('api call failed :(', error.message)
    })
})

app.listen(port, function () {
  console.log(`The Server is running at http://localhost:${port}`)
})
