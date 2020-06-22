const path = require('path')
const http = require('http')
const express = require('express')
const app = express()
const serveStatic = require('serve-static')
const compression = require('compression')
const history = require('connect-history-api-fallback')

const clientFolder = path.join(__dirname, './dist')
const PORT = process.env.PORT || 3000

app.use(compression())
app.use(history({
  disableDotRule: true,
  htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
}))
app.use(serveStatic(clientFolder))
http.Server(app).listen(PORT, () => {
  console.log(`This app listen on port ${PORT}`)
})
