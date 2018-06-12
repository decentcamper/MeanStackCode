var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/*router.post('/post/recipe', function(req, res, next) {
  console.log(req.body);
  res.json({"message" : "ok"});
});*/


// Load Idea Model
const mongoose = require('mongoose');
require('../models/Recipe');
const Recipe = mongoose.model('recipes');



/**
 * Server Side Validations
 */
router.post('/post/recipe', function(req, res, next) {
    let errors = [];
    if(!req.body.label){
        errors.push({text: "Please enter a label"})
    }else if(!req.body.ingredientLines){
        errors.push({text: "Please enter a ingredientLines"})
    }else if(!req.body.directions){
        errors.push({text: "Please enter a directions"})
    }else if(!req.body.dietLabels){
        errors.push({text: "Please enter a dietLabels"})
    }else if(!req.body.cautions){
        errors.push({text: "Please enter a cautions"})
    }else if(!req.body.calories){
        errors.push({text: "Please enter a calories"})
    }else if(!req.body.totalWeight){
        errors.push({text: "Please enter a totalWeight"})
    }else if(!req.body.imgFile){
        errors.push({text: "Please enter a imgFile"})
    }
    if(errors.length>0){
        res.json(500,errors);
    }else{
        new Recipe(req.body).save().then(recipe=>{
            res.json({recipe});

        });

    }

});


/**
 * Code to delete the Recipes....
 */
router.delete('/delete/recipe/:id', function(req, res, next) {
    Recipe.remove({_id: req.params.id})
        .then((recipe) => {
            res.json(recipe);
        });
});





/**
 * Code to add the Recipes
 */
router.get('/get/myRecipes', function(req, res, next) {
    Recipe.find({}).
    sort({date:'desc'}).
    then(recipes =>{
        res.json(recipes);
    }, err =>{
        res.json(500, err);

    })
});





module.exports = router;
