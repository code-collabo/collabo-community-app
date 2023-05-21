import { Request, Response } from 'express';

import {
  getAllProjectsService,
  createOneProjectService,
  getOneProjectService,
  deleteOneProjectService
} from '../services/projects.service';

import { success, error } from '../../../node-mongo-helpers';

const item = 'project';

let response: { [key: string]: unknown } = {};

import { getUrl } from '../../helpers/methods';


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
            count: doc.children.count,
            // list: doc.children.list.map((child) => {
            //   return {
            //     title: child.title,
            //     url: child.url,
            //   }
            // }),
          },
          issues: {
            count: doc.issues.count,
            url: doc.issues.url,
          },
          request: {
            type: 'GET',
            url: getUrl(req)
          }
        }
      })
    };
    success(`GET request successful!`);
    return res.status(200).json(response);
  } catch (err) {
    error(`Error retriving ${item}s: ${err}`);
    res.status(500).json({
      error: `${err}`
    });
  }
}


export const createOneProjectController = async (req: Request, res: Response) => {
  try {
    const doc = await createOneProjectService(req.body);
    response = {
      message: `${item} created successfully!`,
      newItem: {
        _id: doc._id,
        title: doc.title,
        url: doc.url,
        type: doc.type,
        children: {
          count: doc.children.count,
          // list: doc.children.list.map((child) => {
          //   return {
          //     title: child.title,
          //     url: child.url,
          //   }
          // }),
        },
        issues: {
          count: doc.issues.count,
          url: doc.issues.url,
        },
        request: {
          type: 'POST',
          url: getUrl(req),
        },
      },
    }
    success(`${item} CREATED successfully!`);
    return res.status(201).json(response);
  } catch (err) {
    error(`Error saving ${item}: ${err}`);
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
          count: doc.children.count,
          // list: doc.children.list.map((child) => {
          //   return {
          //     title: child.title,
          //     url: child.url,
          //   }
          // }),
        },
        issues: {
          count: doc.issues.count,
          url: doc.issues.url,
        },
        request: {
          type: 'GET',
          url: getUrl(req),
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
    error(`Error retriving ${item}: ${err}`);
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
        message: `${item} deleted successfully!`,
        request: {
          type: 'DELETE',
          url: getUrl(req),
          body: {
            title: 'string',
            url: 'string',
            type: 'string',
            children: {
              count: 'number',
              // list: [
              //   {
              //     title: 'string',
              //     url: 'string',
              //   },
              //   //etc.
              // ]
            },
            issues: {
              count: 'number',
              url: 'string',
            },
          },
        },
      }
      success(`${item} DELETED successfully!`);
      return res.status(200).json(response);
    } else {
      error('No record found for provided ID');
      return res.status(404).json({
        message: 'No record found for provided ID',
      });
    }
  } catch (err) {
    error(`Error deleting ${item}: ${err}`);
    res.status(500).json({
      message: `Error deleting ${item}`,
      error: `${err}`,
    });
  }
};
