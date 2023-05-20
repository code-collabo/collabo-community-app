import { ProjectDocument, ProjectModel as Project } from '../models/project.model';

export const getAllProjectItemsService = async () => {
  const query = await Project.find().select('_id title url numOfChild').exec();
  return query;
}

export const createOneProjectItemService = async (requestBody: ProjectDocument): Promise<ProjectDocument> => {
  const project = new Project({
    title: requestBody.title,
    url: requestBody.url,
    numOfChild: requestBody.numOfChild
  });
  const save = await project.save();
  return save;
}

export const getOneProjectItemService = async (paramsId: string) => {
  const query = Project.findById(paramsId).select('_id title url numOfChild').exec();
  return query;
}

export const deleteOneProjectItemService = async (paramsId: string) => {
  const query = await Project.findOneAndDelete({ _id: paramsId }).exec();
  return query;
}