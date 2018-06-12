const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RecipeSchema = new Schema({
    label: {
        type: String,
        required: true
    },
    uri: {
        type: String,
        default: ""
    },
    ingredientLines: {
        type: String,
        required: true
    },
    directions: {
        type: String,
        required: true
    },
    dietLabels: {
        type: String,
        required: true
    },
    cautions: {
        type: String,
        required: true
    },
    healthLabels: {
        type: String,
        required: true
    },
    calories: {
        type: String,
        required: true
    },
    totalWeight: {
        type: String,
        required: true
    },
    imgFile: {
        type: String,
        required: true
    },
    totalTime: {
        type: String
    },
    servings: {
        type: String
    },
    yield: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('recipes', RecipeSchema);