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
        console.log('Gets here >>>>>>>.1')
        let developerId = req.params._id;
        let skillId = req.params._skillId;
        console.log('We got here>>>>>>>>>>>>')
        Skill.find({_id: skillId, developer: developerId }).then(skill=>{
            console.log('>>>>>>>>>>>>>', skill)
            res.send(skill)
        }).catch(e=>{
            console.log(e);
        })
    },

    updateSingleSkill: (req,res) => {
        let developerId = req.params._id;
        let skillId = req.params._skillId;

        Skill.findOneAndUpdate({_id: skillId, developer: developerId, new: true}).then(skill=>{
            res.send(skill);
        }).catch(e=>{
            console.log(e);
        })
    },

    deleteSingleSkill: (req, res)=>{
        let developerId = req.params._id;
        let skillId = req.params._skillId;

        Skill.findOneAndRemove({_id: skillId, developer: developerId}).then(()=>{
            res.status(204).send({message: 'Skill Deleted'})
        }).catch(e=>{
            console.log(e);
        })
    }

}

module.exports = SkillActions;