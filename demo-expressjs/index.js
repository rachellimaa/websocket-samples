const express = require('express')
const app = express()
const port = 3000

const logMiddleware = function(req, res, next){
    console.log("API recebeu alguma informação")

    next()
}

app.use(express.static("./site"))

app.use(logMiddleware)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pt', (req, res) => {
    res.send('Ola mundo!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})