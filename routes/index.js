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

// // GET Post Submission Form
// router.get('/post', (req, res) => {
//   res.render('new-post', {title: "Submit Post"})
// })
//
// // POST New Post
// router.post('/post', (req, res) => {
//   console.log(req.body)
//   res.send({content: "All good!"})
// })


module.exports = router;
