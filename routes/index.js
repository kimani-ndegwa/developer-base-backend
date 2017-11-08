const express = require('express');
const DeveloperActions = require('../controllers/developer');

// Include Configuration for cors and bodyparser


const Router = express.Router();


// Initial Routes for the developer

Router.get('/developers', DeveloperActions.getDevelopers);
Router.get('/developer/:_id', DeveloperActions.getSingleDeveloper);
Router.put('/developer/:_id', DeveloperActions.updateSingleDeveloper);
Router.delete('/developer/:_id', DeveloperActions.deleteSingleEmployee);
Router.post('/developers', DeveloperActions.createDeveloper);






module.exports = Router;