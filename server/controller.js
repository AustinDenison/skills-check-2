module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        console.log(req.body)
        const {productName, productPrice, imageUrl} = req.body

        db.create_products(productName, productPrice, imageUrl)
        .then(products => {
            res.status(200).send(products)})
        .catch(err => {
            res.status(500).send({errorMessage: 'err'});
            console.log(err)
        })
    },
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: 'err'});
        console.log(err)
        })
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        console.log(id)

        db.delete(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'err'});
        console.log(err)
        })
    }
}