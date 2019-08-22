const getProducts = (req, res) => {
    const db = req.app.get('db')
    db.read_products().then((products) => {
        res.status(200).send(products)
    }).catch(error => {
        res.status(500).send('Error')
        console.log(error)
    })

}

const getProduct = (req, res) => {
    const {id} = req.param
    const db = req.app.get('db')

    db.read_product([id]).then((product) => {
        res.status(200).send(product)
    }).catch(error => {
        res.status(500).send('Error')
        console.log(error)
    })
}

const createProduct = (req, res) => {
    const {name, description, price, image_url} = req.body
    const db = req.app.get('db')
    db.create_product([name, description, price, image_url]).then(() => {
        res.sendStatus(200)
    }).catch(error => {
        res.status(500).send('Error')
        console.log(error)
    })
}

const updateProduct = (req, res) => {
    const {id} = req.params
    const {desc} = req.query
    const db = req.app.get('db')
    db.update_product([desc, id]).then(()=>{
        res.sendStatus(200)
    }).catch(error => {
        res.status(500).send('Error')
        console.log(error)
    })
}

const deleteProduct = (req, res) => {
    const {id} = req.params
    const db = req.app.get('db')
    db.delete_product([id]).then(()=>{
        res.sendStatus(200)
    }).catch(error => {
        res.status(500).send('Error')
        console.log(error)
    })
}

module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct

}