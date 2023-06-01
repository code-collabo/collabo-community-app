import { Request, Response } from 'express';

import {
  getAllRegisteredUserService,
  registerOneUserService,
  loginOneUserService,
  deleteOneUserService,
} from '../services/users.service';

import { success, error } from '../../../node-mongo-helpers';
import { idDoesNotExist, useUrl } from '../../helpers/methods';
import { res, items } from '../../helpers/variables';

const { user } = items;
let response = res;




export const registerOneUserController = async (req: Request, res: Response) => {
  try {
    const doc = await registerOneUserService(req.body);
    const token = doc.generateToken();

    response = {
      message: `${user} created successfully!`,
      user: {
        _id: doc._id,
        name: doc.name,
        email: doc.email,
        token: token,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
        requests: `Visit ${useUrl(req, doc._id, user).helpInfo} for help on how to make requests`
      },
    }
    success(`${user} REGISTERED and CREATED successfully!`);
    return res.status(201).json(response);
  } catch (err) {
    error(`Error registering ${user}: ${err}`);
    res.status(500).json({
      error: `${err}`,
    });
  }
}



export const loginOneUserController = async (req: Request, res: Response) => {
  try {
    const doc = await loginOneUserService(req.body);
    const token = doc.generateToken();

    response = {
      message: `${user} loggedin successfully!`,
      user: {
        _id: doc._id,
        name: doc.name,
        email: doc.email,
        token: token,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
        requests: `Visit ${useUrl(req, doc._id, user).helpInfo} for help on how to make requests`
      },
    }
    success(`${user} LOGGEDIN successfully!`);
    return res.status(201).json(response);
  } catch (err) {
    error(`Error logging in ${user}: ${err}`);
    res.status(500).json({
      error: `${err}`,
    });
  }
}


export const getAllRegisteredUsersController = async (req: Request, res: Response) => {
  try {
    const docs = await getAllRegisteredUserService();
    response = {
      count: docs.length,
      users: docs.map(doc => {
        return {
          _id: doc._id,
          name: doc.name,
          email: doc.email,
          createdAt: doc.createdAt,
          updatedAt: doc.updatedAt,
          requests: `Visit ${useUrl(req, doc._id, user).helpInfo} for help on how to make requests`
        }
      })
    };
    success(`GET request successful!`);
    return res.status(200).json(response);
  } catch (err) {
    error(`Error retriving ${user}s: ${err}`);
    res.status(500).json({
      error: `${err}`
    });
  }
}




export const deleteOneUserController = async (req: Request, res: Response) => {
  try {
    const doc = await deleteOneUserService(req.params.userId);
    if (doc) {
      idDoesNotExist({
        res,
        req,
        item: user,
        statusCode: 200,
        message: `${user} deleted successfully! Get all ${user}s to find another ${user} id or create a new ${user}`,
      });
    } else {
      error('No record found for provided ID');
      idDoesNotExist({
        res,
        req,
        item: user,
        statusCode: 404,
        message: `No record found for provided ID, try getting all ${user}s to find a correct ${user} id or create a new ${user}`,
      });
    }
  } catch (err) {
    error(`Error deleting ${user}: ${err}`);
    idDoesNotExist({
      res,
      req,
      item: user,
      statusCode: 500,
      message: `Error deleting ${user}, try getting all ${user}s to find a valid ${user} id or create a new ${user}`,
    });
  }
};
