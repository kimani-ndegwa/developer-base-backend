const express = require('express');
const DeveloperActions = require('../controllers/developer');
const SkillActions = require('../controllers/skill');

// Include Configuration for cors and bodyparser


const Router = express.Router();


// Initial Routes for the developer

Router.get('/developers', DeveloperActions.getDevelopers);
Router.get('/developer/:_id', DeveloperActions.getSingleDeveloper);
Router.put('/developer/:_id', DeveloperActions.updateSingleDeveloper);
Router.delete('/developer/:_id', DeveloperActions.deleteSingleEmployee);
Router.post('/developers', DeveloperActions.createDeveloper);

// Initial Routes for the skills.

Router.get('/developer/:_id/skills', SkillActions.getAllSkills);
Router.post('/developer/:_id/skills', SkillActions.createSingleSkill);

Router.get('/developer/:_id/skill/:_skillId', SkillActions.getSingleSkill);

Router.put('/developer/:_id/skill/:_skillId', SkillActions.updateSingleSkill);

Router.delete('/developer/:_id/skill/:_skillId', SkillActions.deleteSingleSkill);







module.exports = Router;