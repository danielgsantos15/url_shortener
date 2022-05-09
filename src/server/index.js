(() => {
  const express = require('express')
  const morgan = require('morgan')
  const cors = require('cors')
  const bodyParser = require('body-parser')
  const router = require('./routes')
  const app = express()

  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(express.json())
  app.use(cors())
  app.use(router)

  app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
  })
})()
