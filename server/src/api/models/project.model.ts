import { Schema, Document, model} from 'mongoose';

import { checkSubset } from '../../helpers/methods';

import { filterData } from '../../helpers/variables';
const {interests, skillset} = filterData


export interface ProjectDocument extends Document {
  _id: string;
  title: string;
  url: string;
  issue: string;
  img: string;
  interest: string[];
  skills: string[];
  children: {
    _id: string;
    title: string;
    url: string;
    interest: string[];
    skills: string[];
  }[];
  createdBy?: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;

}

const collectionName = 'project';

const repoDetails = {
  title: { type: String, required: true, unique: true, sparse:true },
  url: { type: String, required: true },
  interest: {type: [String], required: true},
  skills: {type: [String], required: true},
}

const childRepoDetailsSchema = new Schema(repoDetails);

const ProjectSchema = new Schema({
  ...repoDetails,
  children: [childRepoDetailsSchema],
  img: { type: String },
  issue: { type: String, required: true },
  createdBy: {type: String, ref: "user", required: true},
  updatedBy: {type: String, ref: "user", required: true},
},
{
  timestamps: true,
});


// this pre - save hook will run before creating and updating a project document
ProjectSchema.pre("save", function(next){

  // check if data in the doc interest array is included in the interest filter array
  if (!checkSubset(interests, this.interest)){
    throw new Error('VALUE(S) provided is not supported for the parent interest property');
  }
  // check if data in the doc skillset array is included in the skillset filter array
  if (!checkSubset(skillset, this.skills)){
    throw new Error('VALUE(S) provided is not supported for the parent skills property');
  }

  if (this.children.length != 0){
    let idx = 0;
    this.children.forEach(child => {
      // check if data in the child interest array is included in the parent interest array
      if (!checkSubset(this.interest, child.interest)){
        throw new Error(`VALUE(S) provided is not supported for the child[${idx}] interest property`);
      }
      // check if data in the child skillset array is included in the parent skillset array
      if (!checkSubset(this.skills, child.skills)){
        throw new Error(`VALUE(S) provided is not supported for the child[${idx}] skills property`);
      }
      idx += 1;
    });
  }

  return next(); // proceeds to saving the document
})


const ProjectModel = model<ProjectDocument>(collectionName, ProjectSchema); //declare collection name only once to allow mongoose to pluralize or add 's' to the collection name

export { ProjectModel };

/*
Resources:
1. https://www.dctacademy.com/blog/storing-an-array-of-objects-in-a-mongoose-field-a-guide
2. https://stackoverflow.com/questions/36999377/how-to-add-conditional-schema-based-on-other-field
*/
