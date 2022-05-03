const express = require('express')
const router = express.Router()
const validUrl = require('valid-url')
const regex = require('regex')
const match = require('nodemon/lib/monitor/match')
const Link = require('../models/link.js')

router.get('/:code', async (req, res) => {
    const code = req.params.code

    const resultado = await Link.findOne({ where: { code } })
    if (!resultado) return res.sendStatus(404)

    await resultado.save()

    res.redirect(resultado.url)
})

router.get('/', (req, res) => {
    if(validUrl.isUri(req.headers.url)){
        console.log(req.headers.url)
    }
    else {
        console.log('Not a URL')
    }
    res.header(201)
    res.end()
})

function generateUrl() {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for(let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))
    return text
}
generateUrl()

router.post('/new', async (req, res) => {
    const url = req.body.url
    const code = generateUrl()
    console.log(code)

    const resultado = await Link.create({
        url,
        code
    })
    res.send(resultado)
})

module.exports = router