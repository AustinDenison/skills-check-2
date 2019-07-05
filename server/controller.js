module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        console.log(req.body)
        const {productName, productPrice, imageUrl} = req.body

        db.create_products(productName, productPrice, imageUrl)
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: 'err'});
        
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
    }
}