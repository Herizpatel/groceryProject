const express = require("express");
var router = express.Router();
var init_model = require('../models/init')
var grocery_model = require('../models/groceries')

// GET API Base
router.get('/', (req, res) => {
    res.send({
        msg: "You have reached the base of the api."
    })
});

// POST new grocery
router.post('/groceries', async (req, res) => {
    let groceryName = req.body.groceryName
    let groceryCost = req.body.groceryCost
    let totalCost = req.body.totalCost
    let added = await grocery_model.add_grocery(groceryName, groceryCost, totalCost)

    if(added) {
        res.send({msg: "Grocery added to database successfully"})
    } else {
        res.send({msg: "Something went wrong"})
    }
})


module.exports = router;
