const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const SavingSchema = new Schema({
    expense: { type: ObjectId, ref: 'expenses'},
    earning: { type: ObjectId, ref: 'earnings'}
});

module.exports = Saving = mongoose.model('savings', SavingSchema);
