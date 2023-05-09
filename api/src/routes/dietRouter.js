const { Router } = require('express');
const { getAllDiets } = require('../controllers/controllers.js');

const router = Router();

router.get('/', async (req, res) => { 
    try {
        let diets = await getAllDiets();
        res.status(200).send(diets);

    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
})

module.exports = router;
