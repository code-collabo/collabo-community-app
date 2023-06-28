import { Request, Response } from 'express';


import {
  createOneProjectService,
  getAllProjectsService,
  getOneProjectService,
  updateOneProjectService,
  deleteOneProjectService,
} from '../services/projects.service';

import { success, error } from '../../../node-mongo-helpers';
import { useUrl } from '../../helpers/methods';
import { res, items } from '../../helpers/variables';

const { project } = items;
let response = res;



export const createOneProjectController = async (req: Request, res: Response) => {
  try {
    const doc = await createOneProjectService(req.body, req.user.username);
    response = {
      message: `${project} created successfully!`,
      project: {
        _id: doc._id,
        title: doc.title,
        url: doc.url,
        issue: doc.issue,
        img: doc.img,
        interest: doc.interest,
        skills: doc.skills,
        children: doc.children.map((child) => {
          return {
            _id: child._id,
            title: child.title,
            url: child.url,
            interest: child.interest,
            skills: child.skills,
          }
        }),
        createdBy: doc.createdBy,
        createdAt: doc.createdAt,
        updatedBy: doc.updatedBy,
        updatedAt: doc.updatedAt,
        requests: `Visit ${useUrl(req, doc._id, project).helpInfo} for help on how to make requests`
      },
    };
    success(`${project} CREATED successfully!`);
    return res.status(201).json(response);
  } catch (err) {
    error(`Error saving ${project}: ${err}`);
    res.status(500).json({
      error: `${err}`,
    });
  }
}



interface QueryObj {
  interest?: {$all: string[]};
  skills?: {$all: string[]};
}

export const getAllProjectsController = async (req: Request, res: Response) => {
  try {
    const {interest, skills} = req.query
    const queryObj : QueryObj = {};

    if(interest){
      queryObj.interest = {$all: (interest as string).split(',')};
    }
    if(skills){
      queryObj.skills = {$all: (skills as string).split(',')};
    }

    const docs = await getAllProjectsService(queryObj);
    response = {
      count: docs.length,
      projects: docs.map(doc => {
        return {
          _id: doc._id,
          title: doc.title,
          url: doc.url,
          issue: doc.issue,
          img: doc.img,
          interest: doc.interest,
          skills: doc.skills,
          children: {
            count: doc.children.length,
            list: doc.children.map((child) => {
              return {
                _id: child._id,
                title: child.title,
                url: child.url,
                interest: doc.interest,
                skills: doc.skills,
              }
            }),
          },
          createdBy: doc.createdBy,
          createdAt: doc.createdAt,
          updatedBy: doc.updatedBy,
          updatedAt: doc.updatedAt,
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



export const getOneProjectController = async (req: Request, res: Response) => {
  try {
    const doc = await getOneProjectService(req.params.projectId);
    if (doc) {
      response = {
        _id: doc._id,
        title: doc.title,
        url: doc.url,
        issue: doc.issue,
        img: doc.img,
        interest: doc.interest,
        skills: doc.skills,
        children: doc.children.map((child) => {
          return {
            _id: child._id,
            title: child.title,
            url: child.url,
            interest: child.interest,
            skills: child.skills,
          }
        }),
        createdBy: doc.createdBy,
        createdAt: doc.createdAt,
        updatedBy: doc.updatedBy,
        updatedAt: doc.updatedAt,
        requests: `Visit ${useUrl(req, doc._id, project).helpInfo} for help on how to make requests`,
      };
      success(`GET request successful!`);
      return res.status(200).json(response);
    } else {
      error('No record found for provided ID');
      return res.status(404).json({
        message: 'No record found for provided ID',
      });
    }
  } catch (err) {
    error(`Error retriving ${project}s: ${err}`);
    res.status(500).json({
      error: `${err}`
    });
  }
}



export const updateOneProjectController = async (req: Request, res: Response) => {
  try {
    const doc = await updateOneProjectService(req.params.projectId, req.body, req.user.username);
    response = {
      message: `${project} updated successfully!`,
      project: {
        _id: doc._id,
        title: doc.title,
        url: doc.url,
        issue: doc.issue,
        img: doc.img,
        interest: doc.interest,
        skills: doc.skills,
        children: doc.children.map((child) => {
          return {
            _id: child._id,
            title: child.title,
            url: child.url,
            interest: child.interest,
            skills: child.skills,
          }
        }),
        createdBy: doc.createdBy,
        createdAt: doc.createdAt,
        updatedBy: doc.updatedBy,
        updatedAt: doc.updatedAt,
        requests: `Visit ${useUrl(req, doc._id, project).helpInfo} for help on how to make requests`
      },
    };
    success(`${project} UPDATED successfully!`);
    return res.status(201).json(response);
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
      response = {
        message: `${project} deleted successfully!`,
      };
      success(`${project} deleted successfully!`);
      return res.status(201).json(response);
    } else {
      response = {
        message: `no record found privided by id`,
      };
      error(`no record found provided by id`);
      return res.status(400).json(response);
    }
  } catch (err) {
    response = {
      message: `Error deleting ${project}: ${err}`,
    };
    error(`Error deleting ${project}: ${err}`);
    return res.status(500).json(response);
  }
};


/////////////////////////////////////////////////////
import {
  deleteAllProjectService,
} from '../services/projects.service';

export const deleteAllProjectController = async (req: Request, res: Response) => {
  try {
    const doc = await deleteAllProjectService();
    response = {
      message: `All ${doc.deletedCount} ${project} deleted successfully!`,
    };
    success(`All ${doc.deletedCount} ${project} deleted successfully!`);
    return res.status(201).json(response);
  } catch (err) {
    error(`Error Deleting All ${project}: ${err}`);
    res.status(500).json({
      message: `Error Deleting All ${project}`,
      error: `${err}`,
    });
  }
};
////////////////////////////////////////////////////////