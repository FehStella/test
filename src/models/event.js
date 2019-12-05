const mongoose = require ('mongoose');
const mongoosePaginate = require ('mongoose-paginate');

const EventSchema = new mongoose.Schema({
    titleEvent: {
        type: String,
        required: true,
    },
    dateEvent: {
        type: String,
        required: true,
    },
    timeEvent: {
        type: String,
        required: true,
    },
    descriEvent: {
        type: String,
        required: true,
    },
    payEvent: {
        type: String,
        required: true,
    },
});

EventSchema.plugin(mongoosePaginate);

mongoose.model('Event', EventSchema);