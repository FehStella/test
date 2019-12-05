const mongoose = require ('mongoose');
const mongoosePaginate = require ('mongoose-paginate');

const DevocionalSchema = new mongoose.Schema({
    titlePray: {
        type: String,
        required: true,
    },
    authorPray: {
        type: String,
        required: true,
    },
    textPray: {
        type: String,
        required: true,
    },
});

DevocionalSchema.plugin(mongoosePaginate);

mongoose.model('Devocional', DevocionalSchema);