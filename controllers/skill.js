const Skill = require('../models/skill');

const SkillActions = {
    getAllSkills : (req, res, next)=>{
        let developerId = req.params._id;
        Skill.find({developer: developerId}).then(skills=>{
            res.send(skills);
        }).catch(next)
    },

    createSingleSkill : (req, res, next)=>{
        let developerId = req.params._id;
        // We dont have to pass the actual developer this skill belongs to
        req.body.developer = developerId;
        Skill.create(req.body).then(skill=>{
            res.send(skill);
        }).catch(next);
    },


    getSingleSkill : (req, res, next) =>{
        let skillId = req.params._skillId;
        Skill.find({_id:skillId}).then(skill=>{
            res.send(skill)
        }).catch(next);
    },

    updateSingleSkill: (req,res, next) => {
        let skillId = req.params._skillId;
        
        Skill.findOneAndUpdate({_id:skillId}, req.body, {new: true}).then(skill=>{
            res.send(skill);
        }).catch(next);
    },

    deleteSingleSkill: (req, res, next)=>{
        let skillId = req.params._skillId;

        Skill.findOneAndRemove({_id: skillId}).then((message)=>{
            res.send(message);
        }).catch(next);
    }

}

module.exports = SkillActions;