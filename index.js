require('dotenv').config()

const cors = require('cors')
const express = require('express')

const productCtrl = require('./controllers/product.controller')

const massive = require('massive')

const {CONNECTION_STRING, SERVER_PORT} = process.env

const app = express()

//top-level middle ware
app.use(express.json())
app.use(cors())

massive(CONNECTION_STRING).then((dbResponse)=>{
    app.set('db', dbResponse)
    console.log('Connected to Database!')
})

//end points
app.get('/api/products', productCtrl.getProducts)
app.get('/api/products/:id', productCtrl.getProduct)
app.post('/api/products', productCtrl.createProduct)
app.put('/api/products/:id', productCtrl.updateProduct)
app.delete('/api/products/:id', productCtrl.deleteProduct)

app.listen(SERVER_PORT, () => {
    console.log('Server Is Running!')
})