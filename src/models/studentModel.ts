import mongoose, { Schema, Document } from 'mongoose';

export interface IStudents extends Document {
  name: string;
  coachId: string;
}

const StudentSchema: Schema = new Schema({
  name: { type: String, required: true },
  coachId: { type: String, required: true },
});

export default mongoose.model<IStudents>('Student', StudentSchema);
