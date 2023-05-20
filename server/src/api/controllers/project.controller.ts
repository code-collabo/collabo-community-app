import { Request, Response } from 'express';

import {
  getAllProjectItemsService,
  createOneProjectItemService,
  getOneProjectItemService,
  deleteOneProjectItemService
} from '../services/project.service';

import { success, error } from '../../../node-mongo-helpers';


const routeName = 'project';
const item = `${routeName}-item`;

let response: { [key: string]: unknown } = {};

import { getUrl } from '../../helpers/methods';


export const getAllProjectItemsController = async (req: Request, res: Response) => {
  try {
    const docs = await getAllProjectItemsService();
    response = {
      count: docs.length,
      projects: docs.map(doc => {
        return {
          _id: doc._id,
          title: doc.title,
          url: doc.url,
          numOfChild: doc.numOfChild,
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


export const createOneProjectItemController = async (req: Request, res: Response) => {
  try {
    const doc = await createOneProjectItemService(req.body);
    response = {
      message: `${item} created successfully!`,
      newItem: {
        _id: doc._id,
        title: doc.title,
        url: doc.url,
        numOfChild: doc.numOfChild,
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


export const getOneProjectItemController = async (req: Request, res: Response) => {
  try {
    const doc = await getOneProjectItemService(req.params.projectId);
    if (doc) {
      response = {
        _id: doc._id,
        title: doc.title,
        url: doc.url,
        numOfChild: doc.numOfChild,
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


export const deleteOneProjectItemController = async (req: Request, res: Response) => {
  try {
    const doc = await deleteOneProjectItemService(req.params.projectId);
    if (doc) {
      response = {
        message: `${item} deleted successfully!`,
        request: {
          type: 'DELETE',
          url: getUrl(req),
          body: {
            title: 'string',
            url: 'string',
            numOfChild: 'number',
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
