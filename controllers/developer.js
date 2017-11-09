const Developer = require('../models/developer');


const DeveloperActions = {
    getDevelopers : (req, res) => {
        Developer.find().then(developers=>{
            res.send(developers);
        }).catch(err=>{
            res.send(err);
        })
        
    },

    createDeveloper: (req, res) => {
        Developer.create(req.body).then(developer=>{
            res.send(developer);
        }).catch(err=>{
            console.log(err)
        })
    },

    getSingleDeveloper: (req, res)=>{
        let developerId = req.params._id; // Define this in routes;

        Developer.findById({_id: developerId}).then(developer=>{
            res.send(developer)
        }).catch(err=>{
            console.log(e)
        })
    },
    
    updateSingleDeveloper:(req, res)=>{
        let developerId =req.params._id;

        Developer.findByIdAndUpdate(developerId, req.body, {new: true})
            .then(developer=>{
                res.send(developer);
            })
            .catch(e=>{
                console.log(e);
            })
    },
    deleteSingleDeveloper: (req, res)=>{
        let developerId = req.params._id;

        Developer.findByIdAndRemove(developerId).then((message)=>{
            res.send(message)
        }).catch(e=>{
            console.log(e);
        })
    }


}


module.exports = DeveloperActions;