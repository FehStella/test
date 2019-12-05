const mongoose = require ('mongoose');
const mongoosePaginate = require ('mongoose-paginate');

const PraySchema = new mongoose.Schema({
    prayName: {
        type: String,
        required: true,
    },
    pray: {
        type: String,
        required: true,
    },
});

PraySchema.plugin(mongoosePaginate);

mongoose.model('Pray', PraySchema);