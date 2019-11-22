const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;




const EarningSchema = new Schema({
  user: { type: ObjectId, ref: 'users', required: true},
  date: { type: Date, default: Date.now },
  month: { type: String, required: true },
  year: { type: Number },
  income: { type: Number, required: true }
});



const Earning = mongoose.model('earnings', EarningSchema);
module.exports = Earning
