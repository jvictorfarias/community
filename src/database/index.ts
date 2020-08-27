import { createConnection } from 'typeorm';
import mongoose from 'mongoose';

createConnection();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
