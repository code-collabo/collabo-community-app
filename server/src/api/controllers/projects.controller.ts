import { Request, Response } from 'express';

import {
  getAllProjectsService,
  createOneProjectService,
  getOneProjectService,
  deleteOneProjectService
} from '../services/projects.service';

import { success, error } from '../../../node-mongo-helpers';
import { useUrl } from '../../helpers/methods';
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
          type: doc.type,
          children: {
            count: doc.children.length,
            list: doc.children.map((child) => {
              return {
                title: child.title,
                url: child.url,
              }
            }),
          },
          issues: {
            count: doc.issues.count,
            url: doc.issues.url,
          },
          request: {
            type: 'GET',
            url: useUrl(req, doc._id)
          }
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
        type: doc.type,
        children: doc.children.map((child) => {
          return {
            title: child.title,
            url: child.url,
          }
        }),
        issues: {
          count: doc.issues.count,
          url: doc.issues.url,
        },
        request: {
          type: 'POST',
          url: useUrl(req, doc._id),
        },
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
        type: doc.type,
        children: {
          count: doc.children.length,
          list: doc.children.map((child) => {
            return {
              title: child.title,
              url: child.url,
            }
          }),
        },
        issues: {
          count: doc.issues.count,
          url: doc.issues.url,
        },
        request: {
          type: 'GET',
          url: useUrl(req, doc._id),
        },
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
      response = {
        message: `${project} deleted successfully!`,
        request: {
          type: 'DELETE',
          url: useUrl(req, req.params.projectId),
          body: {
            title: 'string',
            url: 'string',
            type: 'string',
            children: [{
              title: 'string',
              url: 'string',
            }],
            issues: {
              count: 'number',
              url: 'string',
            },
          },
        },
      }
      success(`${project} DELETED successfully!`);
      return res.status(200).json(response);
    } else {
      error('No record found for provided ID');
      return res.status(404).json({
        message: 'No record found for provided ID',
      });
    }
  } catch (err) {
    error(`Error deleting ${project}: ${err}`);
    res.status(500).json({
      message: `Error deleting ${project}`,
      error: `${err}`,
    });
  }
};