import { Schema, Document, model } from 'mongoose';

export interface ProjectDocument extends Document {
  title: string;
  url: string;
  type: string;
  children: {
    title: string;
    url: string;
  }[];
  issues: {
    count: number;
    url: string;
  }
}

const collectionName = 'project';

const repoDetails = {
  title: { type: String, required: true },
  url: { type: String, required: true },
}

const childRepoDetailsSchema = new Schema(repoDetails);

const ProjectSchema = new Schema({
  ...repoDetails,
  type: { type: String, required: true },
  children: [childRepoDetailsSchema],
  issues: {
    count: { type: Number, required: true },
    url: { type: String, required: true },
  }
});

const ProjectModel = model<ProjectDocument>(collectionName, ProjectSchema); //declare collection name only once to allow mongoose to pluralize or add 's' to the collection name

export { ProjectModel };

/*
Resources:
1. https://www.dctacademy.com/blog/storing-an-array-of-objects-in-a-mongoose-field-a-guide
2. https://stackoverflow.com/questions/36999377/how-to-add-conditional-schema-based-on-other-field
*/
