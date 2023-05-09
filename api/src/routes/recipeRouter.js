const { Router } = require("express");
const { getAllRecipes } = require("../controllers/controllers.js");
const { Recipe, Diets } = require("../db");
const router = Router();

// por nombre

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const recipesTotal = await getAllRecipes();
    if (name) {
      let recipesName = await recipesTotal.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      recipesName.length
        ? res.status(200).send(recipesName)
        : res.status(404).send("No recipe with this name");
    } else {
      res.status(200).send(recipesTotal);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// por ID

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const recipesTotal = await getAllRecipes();
    if (isNaN(id)) {
      let recipeNaN = recipesTotal.find((el) => el.id == id);
      recipeNaN
        ? res.status(200).json(recipeNaN)
        : res.status(404).send("Recipe not found");
    } else {
      let recipeId = recipesTotal.find((el) => el.id === Number(id));
      recipeId
        ? res.status(200).json(recipeId)
        : res.status(404).send("Recipe not found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    let { name, image, resumenPlato, healthScore, pasos, createInDb, diets } =
      req.body;

    let recipeCreated = await Recipe.create({
      name,
      image,
      resumenPlato,
      healthScore,
      pasos,
      createInDb,
    });
    let dietsDb = await Diets.findAll({
      where: { name: diets },
    });
    recipeCreated.addDiets(dietsDb);
    res.send("Recipe created succesfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
