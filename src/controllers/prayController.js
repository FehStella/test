const mongoose = require ('mongoose');

const Pray = mongoose.model('Pray');

module.exports = {
    async index(req, res){
        const { page = 1} = req.query;
        const prays = await Pray.paginate({}, { page, limit: 3 });

        return res.json(prays);
    },

    async show(req, res){
        const pray = await Pray.findById(req.params.id);

        return res.json(pray);
    },

    async store(req, res){
        const pray = await Pray.create(req.body);

        return res.json(pray);
    },

    async destroy(req, res){
        await Pray.findByIdAndRemove(req.params.id);

        return res.send();
    }

};