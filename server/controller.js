module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get("db");
    db.get_inventory().then((inv) => {
      res.status(200).send(inv);
    });
  },
  addProduct: (req, res) => {
    const db = req.app.get("db");
    const { name, price, imgurl } = req.body;
    db.add_product([name, price, imgurl]).then((inv) => {
       res.status(200).send(inv);
    });
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.delete_product(id).then(inv => {
            res.status(200).send(inv)
        })
        
  },
  updateProduct: (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    db.
    }
  
};
