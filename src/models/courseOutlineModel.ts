import mongoose, { Schema, Document } from 'mongoose';

export interface ICourseOutline extends Document {
  task: string;
  assignedBy: string; // Reference to Trainer
}

const CourseOutlineSchema: Schema = new Schema({
  task: { type: String, required: true },
  assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer', required: true },
});

export default mongoose.model<ICourseOutline>('CourseOutline', CourseOutlineSchema);
