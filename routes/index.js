var express = require('express');
var router = express.Router();
var groceries_model = require('../models/groceries')

// GET Home page groceries
router.get('/', async (req, res) => {
  let groceries = await groceries_model.get_all_groceries()
  if(groceries) {
    console.log("Added successfully"); // this will print the statement in run
    res.render('groceries', { // It is groceries.ejs page
      title: "Grocery Lists", // this will add Grocery list title
      groceries : groceries  // It will fetch all grocery
    })
  } else {
    res.render('404')
  }

})

// GET Post Submission Form
router.get('/addGrocery', (req, res) => {
  res.render('newGrocery', {title: "Add Grocery", msg: ""}) // this will render the newGrocewry.ejs page
})

// POST New Grocery
router.post('/addGrocery', async (req, res) => {
  let groceryName = req.body.groceryName
  let groceryCost = req.body.groceryCost
  let added = await groceries_model.add_grocery(groceryName, groceryCost)

  if(added) {
    res.redirect(`/`) // If user will enter the grocery name and grocery cost it will be added into the grocery table
  } else {
    res.render('newGrocery', {title: "Add Grocery", msg: "ERROR: Please refill form."}) // Else condition
  }
})

// POST del Grocery
// router.post('/delGrocery', async (req, res) => {
//   let groceryName = req.body.groceryName
//   let del = await groceries_model.del_grocery(groceryName)
// })

module.exports = router;
