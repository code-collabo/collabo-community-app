import { ProjectDocument, ProjectModel as Project } from '../models/project.model';

const selectString = '_id title url type children issues';

export const getAllProjectsService = async () => {
  const query = await Project.find().select(selectString).exec();
  return query;
}

export const createOneProjectService = async (requestBody: ProjectDocument): Promise<ProjectDocument> => {
  const project = new Project({
    title: requestBody.title,
    url: requestBody.url,
    type: requestBody.type,
    children: requestBody.children,
    issues: {
      count: requestBody.issues.count,
      url: requestBody.issues.url,
    },
  });
  const save = await project.save();
  return save;
}

export const getOneProjectService = async (paramsId: string) => {
  const query = Project.findById(paramsId).select(selectString).exec();
  return query;
}

export const deleteOneProjectService = async (paramsId: string) => {
  const query = await Project.findOneAndDelete({ _id: paramsId }).exec();
  return query;
}
