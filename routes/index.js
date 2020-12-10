var express = require('express');
var router = express.Router();
var groceries_model = require('../models/groceries')

// GET Homepage
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// GET groceries
router.get('/groceries', async (req, res) => {
  let groceries = await groceries_model.get_all_groceries()
  if(groceries) {
    res.render('groceries', {
      title: "Grocery Lists",
      groceries : groceries
    })
  } else {
    res.render('404')
  }

})

// GET Post Submission Form
router.get('/grocery', (req, res) => {
  res.render('newGrocery', {title: "Add Grocery", msg: ""})
})

// POST New Grocery
router.post('/grocery', async (req, res) => {
  let groceryName = req.body.groceryName
  let groceryCost = req.body.groceryCost
  let added = await groceries_model.add_grocery(groceryName, groceryCost)

  if(added) {
    res.redirect(`/groceries`) // If user will enter the grocery name and grocery cost it will be added into the groceries table
  } else {
    res.render('newGrocery', {title: "Add Grocery", msg: "ERROR: Please refill form."})
  }
})


module.exports = router;
