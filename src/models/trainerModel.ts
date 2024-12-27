import mongoose, { Schema, Document } from 'mongoose';

export interface ITrainer extends Document {
  name: string;
  specialization: string;
}

const TrainerSchema: Schema = new Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
});

export default mongoose.model<ITrainer>('Trainer', TrainerSchema);
