const express = require('express');
const router = express.Router();
const Book = require('../model/book');

// get the list of existing books in database
router.get('/books',(req,res) => {
    Book.find({}).then((books) => {
      res.send(books);
    });
   });


// add a new item to database
router.post('/books',(req,res) => {    
    Book.create(req.body).then(book => {
       res.send(book);
    });
});

// update item in database
router.put('/books/:id',(req,res) => {
    Book.findByIdAndUpdate({_id:req.params.id},req.body).then(() => {
        Book.findOne({_id:req.params.id}).then(book => {
            res.send(book);
        });
    });
});

// delete an item from database
router.delete('/books/:id',(req,res) => {
    Book.findByIdAndRemove({_id:req.params.id}).then(book => {
      res.send(book);
    });
  });

module.exports = router;