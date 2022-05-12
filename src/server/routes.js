const express = require('express')
const router = express.Router()
const Link = require('../db/sql/models/link.js')
const generator = require('./url-generator')
const validate = require('./validations')

router.get('/:code', async (req, res) => {
  const { code } = req.params
  const resultado = await Link.findOne({ where: { code } })

  res.sendStatus(validate.resultValid())

  await resultado.save()

  res.redirect(resultado.url)
})

router.get('/', (req, res) => {
  res.header(validate.validate(req.headers.url))
  res.end()
})

router.post('/new', async (req, res) => {
  const url = req.body.url
  const code = generator.generateUrl()
  console.log(code)

  const resultado = await Link.create({
    url,
    code
  })
  res.send(resultado)
})

module.exports = router
