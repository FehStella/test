const mongoose = require ('mongoose');

const Devocional = mongoose.model('Devocional');

module.exports = {
    async index(req, res){
        const { page = 1} = req.query;
        const devocionals = await Devocional.paginate({}, { page, limit: 3 });

        return res.json(devocionals);
    },

    async show(req, res){
        const devocional = await Devocional.findById(req.params.id);

        return res.json(devocional);
    },

    async store(req, res){
        const devocional = await Devocional.create(req.body);

        return res.json(devocional);
    },

    async update(req, res){
        const devocional = await Devocional.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(devocional);
    },

    async destroy(req, res){
        await Devocional.findByIdAndRemove(req.params.id);

        return res.send();
    }

};