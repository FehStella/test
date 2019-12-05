const mongoose = require ('mongoose');
const mongoosePaginate = require ('mongoose-paginate');

const RegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    data_nasc: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    celular: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

});

RegisterSchema.plugin(mongoosePaginate);

mongoose.model('Register', RegisterSchema);