const Developer = require('../models/developer');


const DeveloperActions = {
    getDevelopers : (req, res, next) => {
        Developer.find().then(developers=>{
            res.send(developers);
        }).catch(next);
        
    },

    createDeveloper: (req, res, next) => {
        Developer.create(req.body).then(developer=>{
            res.send(developer);
        }).catch(next);
    },

    getSingleDeveloper: (req, res, next)=>{
        let developerId = req.params._id;

        Developer.findById({_id: developerId}).then(developer=>{
            res.send(developer)
        }).catch(next);
    },
    
    updateSingleDeveloper:(req, res, next)=>{
        let developerId =req.params._id;

        Developer.findByIdAndUpdate(developerId, req.body, {new: true})
            .then(developer=>{
                res.send(developer);
            })
            .catch(next);
    },
    deleteSingleDeveloper: (req, res, next)=>{
        let developerId = req.params._id;

        Developer.findByIdAndRemove(developerId).then((message)=>{
            res.send(message)
        }).catch(next);
    }


}


module.exports = DeveloperActions;