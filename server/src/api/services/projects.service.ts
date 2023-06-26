import { ProjectDocument, ProjectModel as Project } from '../models/project.model';

const selectString = '_id title url issue img interest skills children isArchived createdBy updatedBy createdAt updatedAt';


export const createOneProjectService = async (requestBody: ProjectDocument, user: string): Promise<ProjectDocument> => {

  const project = new Project({
    title: requestBody.title,
    url: requestBody.url,
    issue: requestBody.issue,
    img: requestBody.img,
    interest: requestBody.interest,
    skills: requestBody.skills,
    children: requestBody.children,
    createdBy: user,
    updatedBy: user,
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

export const updateOneProjectService = async (paramsId: string, requestBody: ProjectDocument, user: string) => {
  const query = await Project.findOne({ _id: paramsId }).exec();
  const project = query as ProjectDocument;

  if(requestBody.title) project.title = requestBody.title;
  if(requestBody.url) project.url = requestBody.url;
  if(requestBody.issue) project.issue = requestBody.issue;
  if(requestBody.img) project.img = requestBody.img;
  if(requestBody.interest) project.interest = requestBody.interest;
  if(requestBody.skills) project.skills = requestBody.skills;
  if(requestBody.children) project.children = requestBody.children;
  project.updatedBy = user;

  const save = project.save();
  return save;
};

export const deleteOneProjectService = async (paramsId: string) => {
  const query = await Project.findOneAndDelete({ _id: paramsId }).exec();
  return query;
}

////////////////////////////////////////////////////////////
export const deleteAllProjectService = async () => {
  const query = await Project.deleteMany().exec();
  return query;
}
////////////////////////////////////////////////////////////