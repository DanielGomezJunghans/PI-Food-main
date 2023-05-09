const {Recipe, Diets} = require('../db')
const axios = require('axios')
const {API_KEY} = process.env;

const getApiInfo = async() => {
   //const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
   const apiUrl = await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)
   const apiInfo = await apiUrl.data.results.map(el =>{
       return {
           id: el.id,
           name: el.title,
           image: el.image,
           resumenPlato: el.summary,
           healthScore: el.healthScore,
           diets: el.diets,
           steps: (el.analyzedInstructions[0] && el.analyzedInstructions[0].steps ? el.analyzedInstructions[0].steps.map(e => e.step).join("|") : 'No steps')
       };

   });
   return apiInfo;
};

const getDBInfo = async() =>{
   const results = await Recipe.findAll({
       include: {
           model: Diets,
           attributes: ['name'],
           through: {
               attributes: [],
           }
       }
   })
   const datBmap = results.map((el)=>({
       ...el.toJSON(),
       diets: el.diets.map((e)=>e.name)
   }))
   return datBmap;
}


const getAllRecipes = async () => {
   const apiInfo = await getApiInfo();
   const dbInfo = await getDBInfo(); 
   const infoTotal = apiInfo.concat(dbInfo);
   return infoTotal;
}

const getAllDiets = async () => {
    try {
        const allDiets = await Diets.findAll();
        if (allDiets.length) {
            return allDiets
        }
        const dietTypes = [
            "gluten free",
            "dairy free",
            "ketogenic",
            "lacto ovo vegetarian",
            "vegan",
            "pescatarian",
            "paleolithic",
            "primal",
            "fodmap friendly",
            "whole 30",
        ];

        dietTypes.forEach(diet => {
            Diets.findOrCreate({
                where: { name: diet }
            });
        });

        let diets = await Diets.findAll();
        return diets;

    } catch (error) {
        console.log('error', error)
    }
}

module.exports = {getAllDiets, getAllRecipes, getApiInfo, getDBInfo}