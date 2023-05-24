import { Request, Response } from 'express';

import {
  getAllProjectsService,
  createOneProjectService,
  getOneProjectService,
  deleteOneProjectService
} from '../services/projects.service';

import { success, error } from '../../../node-mongo-helpers';
import { idDoesNotExist, useUrl } from '../../helpers/methods';
import { res, items } from '../../helpers/variables';

const { project } = items;
let response = res;

export const getAllProjectsController = async (req: Request, res: Response) => {
  try {
    const docs = await getAllProjectsService();
    response = {
      count: docs.length,
      projects: docs.map(doc => {
        return {
          _id: doc._id,
          title: doc.title,
          url: doc.url,
          isStandAlone: doc.isStandAlone,
          children: {
            count: doc.children.length,
            list: doc.children.map((child) => {
              return {
                _id: child._id,
                title: child.title,
                url: child.url,
              }
            }),
          },
          issues: {
            url: doc.issues.url,
          },
          requests: `Visit ${useUrl(req, doc._id, project).helpInfo} for help on how to make requests`
        }
      })
    };
    success(`GET request successful!`);
    return res.status(200).json(response);
  } catch (err) {
    error(`Error retriving ${project}s: ${err}`);
    res.status(500).json({
      error: `${err}`
    });
  }
}


export const getAllChildrenProjectsController = async (req: Request, res: Response) => {
  try {
    const docs = await getAllProjectsService();
    const allChildrenProjects : {
      _id: string;
      title: string;
      url: string;
    }[] = [];
    docs.forEach(parentProj => {
      if(parentProj.isStandAlone){
        allChildrenProjects.push({
          _id: parentProj._id,
          title: parentProj.title,
          url: parentProj.url
        });
      }
      else{
        parentProj.children.forEach(childProj => {
          allChildrenProjects.push({
            _id: childProj._id,
            title: childProj.title,
            url: childProj.url
          });
        })
      }
    })

    response = {
      count: allChildrenProjects.length,
      projects: allChildrenProjects.map(childProject => {
        return {
          _id: childProject._id,
          title: childProject.title,
          url: childProject.url,
        }
      })
    };
    success(`GET request successful!`);
    return res.status(200).json(response);
  } catch (err) {
    error(`Error retriving ${project}s: ${err}`);
    res.status(500).json({
      error: `${err}`
    });
  }
}


export const createOneProjectController = async (req: Request, res: Response) => {
  try {
    const doc = await createOneProjectService(req.body);
    response = {
      message: `${project} created successfully!`,
      newProject: {
        _id: doc._id,
        title: doc.title,
        url: doc.url,
        isStandAlone: doc.isStandAlone,
        children: doc.children.map((child) => {
          return {
            _id: child._id,
            title: child.title,
            url: child.url,
          }
        }),
        issues: {
          url: doc.issues.url,
        },
        requests: `Visit ${useUrl(req, doc._id, project).helpInfo} for help on how to make requests`
      },
    }
    success(`${project} CREATED successfully!`);
    return res.status(201).json(response);
  } catch (err) {
    error(`Error saving ${project}: ${err}`);
    res.status(500).json({
      error: `${err}`,
    });
  }
}


export const getOneProjectController = async (req: Request, res: Response) => {
  try {
    const doc = await getOneProjectService(req.params.projectId);
    if (doc) {
      response = {
        _id: doc._id,
        title: doc.title,
        url: doc.url,
        isStandAlone: doc.isStandAlone,
        children: {
          count: doc.children.length,
          list: doc.children.map((child) => {
            return {
              _id: child._id,
              title: child.title,
              url: child.url,
            }
          }),
        },
        issues: {
          url: doc.issues.url,
        },
        requests: `Visit ${useUrl(req, doc._id, project).helpInfo} for help on how to make requests`
      }
      success(`GET request successful!`);
      return res.status(200).json(response);
    } else {
      error('No record found for provided ID');
      return res.status(404).json({
        message: 'No record found for provided ID',
      });
    }
  } catch (err) {
    error(`Error retriving ${project}: ${err}`);
    res.status(500).json({
      message: 'Invalid ID',
      error: `${err}`,
    });
  }
}


export const deleteOneProjectController = async (req: Request, res: Response) => {
  try {
    const doc = await deleteOneProjectService(req.params.projectId);
    if (doc) {
      idDoesNotExist({
        res,
        req,
        item: project,
        statusCode: 200,
        message: `${project} deleted successfully! Get all ${project}s to find another ${project} id or create a new ${project}`,
      });
    } else {
      error('No record found for provided ID');
      idDoesNotExist({
        res,
        req,
        item: project,
        statusCode: 404,
        message: `No record found for provided ID, try getting all ${project}s to find a correct ${project} id or create a new ${project}`,
      });
    }
  } catch (err) {
    error(`Error deleting ${project}: ${err}`);
    idDoesNotExist({
      res,
      req,
      item: project,
      statusCode: 500,
      message: `Error deleting ${project}, try getting all ${project}s to find a valid ${project} id or create a new ${project}`,
    });
  }
};










///////////////////////// EXAMPLE FOR UPDATE /////////////////////////////////
import { updateOneProjectService } from '../services/projects.service';
export const updateOneProjectController = async (req: Request, res: Response) => {
  try {
    const doc = await updateOneProjectService(req.params.projectId, req.body);
    if (doc) {
      response = {
        message: `${project} upated successfully!`,
        newProject: {
          _id: doc._id,
          title: doc.title,
          url: doc.url,
          isStandAlone: doc.isStandAlone,
          children: doc.children.map((child) => {
            return {
              _id: child._id,
              title: child.title,
              url: child.url,
            }
          }),
          issues: {
            url: doc.issues.url,
          },
          requests: `Visit ${useUrl(req, doc._id, project).helpInfo} for help on how to make requests`
        },
      }
      success(`PATCH request successful!`);
      return res.status(200).json(response);
    } else {
      error('No record found for provided ID');
      return res.status(404).json({
        message: 'No record found for provided ID',
      });
    }
  } catch (err) {
    error(`Error retriving ${project}: ${err}`);
    res.status(500).json({
      message: 'Invalid ID',
      error: `${err}`,
    });
  }
}
//////////////////////////////////////////////////////////////////////////////