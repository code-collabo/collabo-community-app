import mongoose from 'mongoose';

export interface ProjectDocument extends mongoose.Document {
  title: string;
  url: string;
  numOfChild: number;
}

const collectionName = 'project';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  numOfChild: { type: Number, required: true }
});

const ProjectModel = mongoose.model<ProjectDocument>(collectionName, ProjectSchema, collectionName); //declare collection name a second time to prevent mongoose from pluralizing or adding 's' to the collection name

export { ProjectModel };
