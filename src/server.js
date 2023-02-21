const express = require('express')
//const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app =express()

//conexao com banco de dados
db.connect()


//habilita server para receber dados json
app.use(express.json())


//definindo rotas
app.use('/api', routes)


//executando servidor
const port = process.env.PORT || 1010
app.listen(port, () => console.log(`Server is listening on port ${port}`))
 