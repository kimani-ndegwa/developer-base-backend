const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
    title : {
        type: String,
        required: true
    },

    developer: {type: Schema.Types.ObjectId, ref: 'Developer'}

})

const Skill = mongoose.model('skill', SkillSchema);


module.exports = Skill