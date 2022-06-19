import * as mongoose from 'mongoose';

export const RateSchema = new mongoose.Schema({
  overall: Number,
  components: { energy: Number, time: Number, transaction: Number },
});
