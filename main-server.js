const fs = require('fs')
const express = require('express')
const app = express()
const port = 8000

app.use(express.static('main-static'))

app.get('*', (req, res) => {
    fs.readFile('./main-static/index.html', 'utf-8', (err, html) => {
        res.send(html)
    })
})

app.listen(port, () => {
    console.log(`main app listening at http://localhost:${port}`)
})