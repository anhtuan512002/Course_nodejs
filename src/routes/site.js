const express = require('express');
const router = express.Router();

const sitesController = require('../app/controllers/SitesController'); // Change the import statement to use the correct casing

router.get('/search', sitesController.search); 
router.get('/', sitesController.home); 


module.exports = router;