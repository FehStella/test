const mongoose = require ('mongoose');

const Register = mongoose.model('Register');

module.exports = {
    async index(req, res){
        const { page = 1} = req.query;
        const registers = await Register.paginate({}, { page, limit: 3 });

        return res.json(registers);
    },

    async show(req, res){
        const register = await Register.findById(req.params.id);

        return res.json(register);
    },

    async store(req, res){
        const register = await Register.create(req.body);

        return res.json(register);
    },

    async update(req, res){
        const register = await Register.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(register);
    },

    async destroy(req, res){
        await Register.findByIdAndRemove(req.params.id);

        return res.send();
    }

};