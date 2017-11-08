const Skill = require('../models/skill');

const SkillActions = {
    getAllSkills : (req, res)=>{
        let developerId = req.params._id;
        Skill.find({developer: developerId}).then(skills=>{
            res.send(skills);
        }).catch(e=>{
            console.log(e);
        })
    },

    createSingleSkill : (req, res)=>{
        let developerId = req.params._id;
        // We dont have to pass the actual developer this skill belongs to
        req.body.developer = developerId;
        Skill.create(req.body).then(skill=>{
            res.send(skill);
        }).catch(e=>{
            console.log(e);
        })
    },


    getSingleSkill : (req, res) =>{
        let skillId = req.params._skillId;
        Skill.find({_id:skillId}).then(skill=>{
            res.send(skill)
        }).catch(e=>{
            console.log(e);
        })
    },

    updateSingleSkill: (req,res) => {
        let skillId = req.params._skillId;

        Skill.findOneAndUpdate(skillId, req.body, {new: true}).then(skill=>{
            res.send(skill);
        }).catch(e=>{
            console.log(e);
        })
    },

    deleteSingleSkill: (req, res)=>{
        let skillId = req.params._skillId;

        Skill.findOneAndRemove({_id: skillId}).then(()=>{
            res.status(204).send({message: 'Skill Deleted'})
        }).catch(e=>{
            console.log(e);
        })
    }

}

module.exports = SkillActions;