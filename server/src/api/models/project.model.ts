import { Schema, Document, model} from 'mongoose';
import filterData from './filterData.json';


////////////////////////////////////////////////////////
const interestFilterArr: string[] = filterData.interests;

const skillSetFilterArr: string[] = filterData.skillset;

export const checkInclude = (arrToCheckAgainst: string[], arr: string[]): boolean => {
  const check = arr.every(element => {
    return arrToCheckAgainst.includes(element);
  });
  return check;
}
///////////////////////////////////////////////////////////


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
}

const collectionName = 'project';

const repoDetails = {
  title: { type: String, required: true, unique: true },
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
});


// this pre - save hook will run before creating and updating a project document
ProjectSchema.pre("save", function(next){

  // check if data in the doc interest array is included in the interest filter array
  if (!checkInclude(interestFilterArr, this.interest)){
    throw new Error('VALUE(S) provided is not supported for the interest property');
  }

  // check if data in the doc skillset array is included in the skillset filter array
  if (!checkInclude(skillSetFilterArr, this.skills)){
    throw new Error('VALUE(S) provided is not supported for the skills property');
  }

  if (this.children.length != 0){
    this.children.forEach(child => {

      // check if data in the child interest array is included in the parent interest array
      if (!checkInclude(this.interest, child.interest)){
        throw new Error('VALUE(S) provided is not supported for the child interest property');
      }

      // check if data in the child skillset array is included in the parent skillset array
      if (!checkInclude(this.skills, child.skills)){
        throw new Error('VALUE(S) provided is not supported for the child skills property');
      }
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
