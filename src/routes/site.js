const express = require('express');
const router = express.Router();

const sitesController = require('../app/controllers/SitesController'); // Change the import statement to use the correct casing

router.use('/search', sitesController.search); 
router.use('/', sitesController.home); 


module.exports = router;