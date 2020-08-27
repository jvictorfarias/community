import mongoose, { Schema, Document } from 'mongoose';

export interface Log extends Document {
  _id: string;
  action: string;
}

const LogSchema: Schema = new Schema({
  _id: { type: String, required: true },
  user: { type: String, required: true },
  action: { type: String, required: true },
});

export default mongoose.model<Log>('Log', LogSchema);
