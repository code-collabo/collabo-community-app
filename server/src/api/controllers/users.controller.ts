import { Request, Response } from 'express';


import {
  createOneUserService,
  signInOneUserService,
  getAllUsersService,
  getOneUserService,
  updateOneUserService,
  deleteOneUserService,
} from '../services/users.service';

import { success, error } from '../../../node-mongo-helpers';
import { idDoesNotExist,useUrl } from '../../helpers/methods';
import { res, items } from '../../helpers/variables';

const { user } = items;
let response = res;



export const createOneUserController = async (req: Request, res: Response) => {
  try {
    const doc = await createOneUserService(req.body);
    const token = doc.generateToken();

    response = {
      message: `${user} created successfully!`,
      user: {
        _id: doc._id,
        firstname: doc.firstname,
        lastname: doc.lastname,
        username: doc.username,
        email: doc.email,
        password: doc.password,
        roles: doc.roles,
        token: token,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
        requests: `Visit ${useUrl(req, doc._id, user).helpInfo} for help on how to make requests`
      },
    };
    success(`${user} CREATED successfully!`);
    return res.status(201).json(response);
  } catch (err) {
    error(`Error saving ${user}: ${err}`);
    res.status(500).json({
      error: `${err}`,
    });
  }
}


export const signInOneUserController = async (req: Request, res: Response) => {
  try {
    const doc = await signInOneUserService(req.body);
    const token = doc.generateToken();

    response = {
      message: `${user} signed in successfully!`,
      user: {
        _id: doc._id,
        firstname: doc.firstname,
        lastname: doc.lastname,
        username: doc.username,
        email: doc.email,
        password: doc.password,
        roles: doc.roles,
        token: token,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
        requests: `Visit ${useUrl(req, doc._id, user).helpInfo} for help on how to make requests`
      },
    };
    success(`${user} CREATED successfully!`);
    return res.status(201).json(response);
  } catch (err) {
    error(`Error saving ${user}: ${err}`);
    res.status(500).json({
      error: `${err}`,
    });
  }
}



export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const docs = await getAllUsersService();
    response = {
      count: docs.length,
      users: docs.map(doc => {
        return {
          _id: doc._id,
          firstname: doc.firstname,
          lastname: doc.lastname,
          username: doc.username,
          email: doc.email,
          password: doc.password,
          roles: doc.roles,
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


export const getOneUserController = async (req: Request, res: Response) => {
  try {
    const doc = await getOneUserService(req.params.userId);
    if (doc) {
      response = {
        _id: doc._id,
        firstname: doc.firstname,
        lastname: doc.lastname,
        username: doc.username,
        email: doc.email,
        password: doc.password,
        roles: doc.roles,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
        requests: `Visit ${useUrl(req, doc._id, user).helpInfo} for help on how to make requests`,
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
    error(`Error retriving ${user}s: ${err}`);
    res.status(500).json({
      error: `${err}`
    });
  }
}



export const updateOneUserController = async (req: Request, res: Response) => {
  try {
    const doc = await updateOneUserService(req.params.userId, req.body);
    response = {
      message: `${user} updated successfully!`,
      user: {
        _id: doc._id,
        firstname: doc.firstname,
        lastname: doc.lastname,
        username: doc.username,
        email: doc.email,
        password: doc.password,
        roles: doc.roles,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
        requests: `Visit ${useUrl(req, doc._id, user).helpInfo} for help on how to make requests`
      },
    };
    success(`${user} UPDATED successfully!`);
    return res.status(201).json(response);
  } catch (err) {
    error(`Error retriving ${user}: ${err}`);
    res.status(500).json({
      message: 'Invalid ID',
      error: `${err}`,
    });
  }
}



export const deleteOneUserController = async (req: Request, res: Response) => {
  try {
    const doc = await deleteOneUserService(req.params.projectId);
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


/////////////////////////////////////////////////////
import {
  deleteAllUserService,
} from '../services/users.service';

export const deleteAllUserController = async (req: Request, res: Response) => {
  try {
    const doc = await deleteAllUserService();
    response = {
      message: `All ${doc.deletedCount} ${user} deleted successfully!`,
    };
    success(`All ${doc.deletedCount} ${user} deleted successfully!`);
    return res.status(201).json(response);
  } catch (err) {
    error(`Error Deleting All ${user}: ${err}`);
    res.status(500).json({
      message: `Error Deleting All ${user}`,
      error: `${err}`,
    });
  }
};
////////////////////////////////////////////////////////