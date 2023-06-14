import { ProjectDocument, ProjectModel as Project } from '../models/project.model';

const selectString = '_id title url issue img interest skills children';


export const createOneProjectService = async (requestBody: ProjectDocument): Promise<ProjectDocument> => {

  const project = new Project({
    title: requestBody.title,
    url: requestBody.url,
    issue: requestBody.issue,
    img: requestBody.img,
    interest: requestBody.interest,
    skills: requestBody.skills,
    children: requestBody.children,
  });
  const save = await project.save();
  return save;
}


interface QueryObj {
  interest?: {$all: (string | string[])};
  skills?: {$all: (string | string[])};
}

export const getAllProjectsService = async (queryObj: QueryObj) => {
  const query = await Project.find(queryObj).select(selectString).exec();
  return query;
}

export const getOneProjectService = async (paramsId: string) => {
  const query = Project.findById(paramsId).select(selectString).exec();
  return query;
}

export const updateOneProjectService = async (paramsId: string, requestBody: ProjectDocument) => {

  // const query = await Project.findOneAndUpdate({ _id: paramsId }, { $set: requestBody }, { new: true, runValidators: true }).exec();
  const query = await Project.findOne({ _id: paramsId }).exec();
  const project = query as ProjectDocument;

  // interface objDoc {
  //   name: string;
  //   age: number;
  //   class: string;
  // }
  // const obj: objDoc = {
  //   name: "samuko",
  //   age: 23,
  //   class: "level4"
  // }

  // const obj2: objDoc = {
  //   name: "",
  //   age: 0,
  //   class: ""
  // }

  // Object.keys(obj).forEach(key => {
  //   const prop = key as keyof objDoc;
  //   obj2[prop] = obj[prop];
  // });

  // console.log(obj2);

  // let prop: keyof ProjectDocument;
  // // type T = keyof typeof requestBody;
  // Object.keys(requestBody).forEach(key => {
  //   if (key){
  //     const prop = key as keyof ProjectDocument;
  //     project[prop] = requestBody[prop];
  //   }
  // });

  
  project.title = requestBody.title;
  project.url = requestBody.url;
  project.issue = requestBody.issue;
  project.img = requestBody.img;
  project.interest = requestBody.interest;
  project.skills = requestBody.skills;
  project.children = requestBody.children;

  const save = await project.save();
  return save;
}

export const deleteOneProjectService = async (paramsId: string) => {
  const query = await Project.findOneAndDelete({ _id: paramsId }).exec();
  return query;
}