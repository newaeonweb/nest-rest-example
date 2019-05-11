import * as mongoose from 'mongoose';

export const BandSchema = new mongoose.Schema({
  name: String,
  country: String,
});
