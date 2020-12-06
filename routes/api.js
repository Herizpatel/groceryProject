const express = require("express");
var router = express.Router();
var init_model = require('../models/init')
var groceries_model = require('../models/groceries')

// GET API Base
router.get('/', (req, res) => {
    res.send({
        msg: "You have reached the base of the api."
    })
});

router.get('/init', async (req, res) => {
    let result = await init_model.init_DB()

    if(result) {
        res.send({msg: "Database has been set up!"})
    } else {
        res.send({msg: "Database encountered an error!"})
    }
});

// POST new grocery
router.post('/grocery', async (req, res) => {
    let groceryName = req.body.groceryName
    let groceryCost = req.body.groceryCost
    let added = await groceries_model.add_grocery(groceryName, groceryCost)

    if(added) {
        res.send({msg: "Grocery added to database successfully"})
    } else {
        res.send({msg: "Something went wrong"})
    }
})

// Get all groceries
router.get('/groceries', async (req, res) => {
    let results = await groceries_model.get_all_groceries()
    if(results) {
        res.send(results)
    } else {
        res.send({msg: "Something went wrong."})
    }
})

module.exports = router;
