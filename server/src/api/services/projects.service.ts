import { ProjectDocument, ProjectModel as Project } from '../models/project.model';

const selectString = '_id title url type children createdBy issues';

// type ProjDocument = Omit<ProjectDocument, "createdBy">
// type MyUserDocument = Pick<ProjectDocument, "createdBy">

export const getAllProjectsService = async (userId: string) => {
  const query = await Project.find({ createdBy: userId}).select(selectString).exec();
  return query;
}

export const createOneProjectService = async (requestBody: ProjectDocument, userId: string): Promise<ProjectDocument> => {
  const project = new Project({
    title: requestBody.title,
    url: requestBody.url,
    type: requestBody.type,
    children: requestBody.children,
    issues: {
      url: requestBody.issues.url,
    },
    createdBy: userId,
  });
  const save = await project.save();
  return save;
}

export const getOneProjectService = async (paramsId: string, userId: string) => {
  const query = Project.findOne({_id: paramsId, createdBy: userId}).select(selectString).exec();
  return query;
}

export const deleteOneProjectService = async (paramsId: string, userId: string) => {
  const query = await Project.findOneAndDelete({_id: paramsId, createdBy: userId}).exec();
  return query;
}
