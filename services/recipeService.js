const Recipe = require("../models/Recipe");

const getAllRecipes = async (category) => {

    let filter = {};

    if(category){
        filter.category = category;
    }

    return await Recipe.find(filter);
};

const createRecipe = async (recipeData) => {

    if(recipeData.cookingTime <= 0){
        throw new Error("Cooking time must be positive");
    }

    return await Recipe.create(recipeData);
};

const updateRecipe = async (id, data) => {

    return await Recipe.findByIdAndUpdate(
        id,
        data,
        { new: true }
    );
};

const deleteRecipe = async (id) => {

    return await Recipe.findByIdAndDelete(id);
};

module.exports = {
    getAllRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe
};