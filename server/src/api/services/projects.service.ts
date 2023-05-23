import { ProjectDocument, ProjectModel as Project } from '../models/project.model';

const selectString = '_id title url isStandAlone children issues';


/// function to track the state of isStandAlone property based  
/// on the children property during creating or updating projects  

const updateInputRequestBody = (requestBody: ProjectDocument) => {
  const { children, isStandAlone } = requestBody;
  if (children) {
    if (children.length === 0) {
      return {
        ...requestBody,
        isStandAlone: true,
      }
    }
    else {
      return {
        ...requestBody,
        isStandAlone: false,
      }
    }
  }
  else{
    if (isStandAlone){
      delete requestBody['isStandAlone'];
    }
    return {
      ...requestBody
    }
  }

}
/////////////////////////////////////////////////////////////////////





export const getAllProjectsService = async () => {
  const query = await Project.find().select(selectString).exec();
  return query;
}

export const createOneProjectService = async (requestBody: ProjectDocument): Promise<ProjectDocument> => {
  const newRequestBody = updateInputRequestBody(requestBody);
  const project = new Project({
    title: newRequestBody.title,
    url: newRequestBody.url,
    children: newRequestBody.children,
    isStandAlone: newRequestBody.isStandAlone,
    issues: {
      url: newRequestBody.issues.url,
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








///////////////////////// EXAMPLE FOR UPDATE /////////////////////////////////
export const updateOneProjectService = async (paramsId: string, requestBody: ProjectDocument) => {
  const newRequestBody = updateInputRequestBody(requestBody);

  const query = await Project.findOneAndUpdate({ _id: paramsId }, newRequestBody, { new: true, runValidators: true }).exec();

  return query;
}

//////////////////////////////////////////////////////////////////////////////