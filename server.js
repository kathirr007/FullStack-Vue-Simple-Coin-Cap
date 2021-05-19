const express = require("express")
const axios = require("axios")

const app = express()

const port = process.env.PORT || 3000

app.get("/api/coins", function (req, res) {
  axios
    .get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest")
    .then(function (response) {
      console.log(`API call response: ${response}`)
    })

    .catch(function (err) {
      console.log(`API call error: ${err.message}`)
    })
})

app.listen(port, function () {
  console.log(`The Server is running at http://localhost:${port}`)
})
