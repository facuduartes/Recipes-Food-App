
const axios = require('axios');
const { Recipe, DietType } = require('../db');
const { RECIPIES_URL } = require('../const');
const { number } = require('../const')
const { API_KEY } = process.env;
const { Op } = require('sequelize');

const getAllRecipes = async (title) => {

    if (title) {

        const recipesAPI = await axios.get(`${RECIPIES_URL}number=${number}&query=${title}&apiKey=${API_KEY}`);
        const recipesDB = await Recipe.findAll({ where: { title: { [Op.like]: `%${title}%` } } });

        const recipes = recipesAPI.data.results.concat(recipesDB);
        let recipesTotal = recipes.map(//hago un mapeo para traerme unicamente las propiedades  que necesito 
            r => {
                return {
                    id: r.id,
                    title: r.title,
                    image: r.image,
                    DietTypes: r.diets
                };
            })

        return recipesTotal
    } else {


        let recipesAPI = await axios.get(`${RECIPIES_URL}number=${number}&apiKey=${API_KEY}`);

        let recipes = recipesAPI.data.results.map(//hago un mapeo para traerme unicamente las propiedades  que necesito 
            r => {
                return {
                    id: r.id,
                    title: r.title,
                    image: r.image,
                    DietTypes: r.diets,
                };
            })

        let recipesDB = await Recipe.findAll({
            include: {

                model: DietType,
                attributes: ['name'],
                // through: {
                //     attributes: [],
                // },
               
            }

        });

        let recipesTotal = recipes.concat(recipesDB);


        return recipesTotal

    }

};


module.exports = getAllRecipes;

