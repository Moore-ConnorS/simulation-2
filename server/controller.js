module.exports = {

    readAll: (req, res) => {
        const db = req.app.get('db')

        db.read_houser().then(houses => res.send(houses))
            .catch(err => {
                res.status(500).send(console.log('Error on readAll', err))
            })
    },

    addHouse: (req, res) => {
        const db = req.app.get('db')

        db.add_house([
            req.body.name,
            req.body.address,
            req.body.city,
            req.body.state,
            req.body.zip
        ]).then(() => res.send(200))
            .catch(err => {
                res.status(500).send(console.log('Error on addHouse', err))
            })
    },

    delete: (req, res) => {
        const db = req.app.get('db')

        db.delete_houser(req.params.id).then(houses => res.status(200).send(houses))
            .catch(err => {
                res.status(500).send(console.log('Error on delete', err))
            })
    }
}