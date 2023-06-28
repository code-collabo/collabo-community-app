import { Request, Response } from 'express';


import {
  signUpOneUserService,
  signInOneUserService,
  getAllUsersService,
  getOneUserService,
  getSuperAdminUserService,
  updateOneUserService,
  updateOneUserRoleService,
  updateSuperAdminUserService,
  deleteOneUserService,
} from '../services/users.service';

import { success, error } from '../../../node-mongo-helpers';
import { useUrl } from '../../helpers/methods';
import { res, items } from '../../helpers/variables';

const { user } = items;
let response = res;



export const signUpOneUserController = async (req: Request, res: Response) => {
  try {
    const doc = await signUpOneUserService(req.body);
    response = {
      message: `${user} updated successfully!`,
      user: {
        _id: doc._id,
        firstname: doc.firstname,
        lastname: doc.lastname,
        username: doc.username,
        email: doc.email,
        roles: doc.roles,
        img: doc.img,
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
        token: token,
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
          roles: doc.roles,
          img: doc.img,
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
        roles: doc.roles,
        img: doc.img,
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



export const getSuperAdminUserController = async (req: Request, res: Response) => {
  try {
    const doc = await getSuperAdminUserService();
    
    if (doc) {
      response = {
        _id: doc._id,
        firstname: doc.firstname,
        lastname: doc.lastname,
        username: doc.username,
        email: doc.email,
        roles: doc.roles,
        img: doc.img,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
        requests: `Visit ${useUrl(req, doc._id, user).helpInfo} for help on how to make requests`,
      };
      success(`super-adminGET request successful!`);
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
  let doc;
  try {
    if(req.user.roles[0] == "super-admin"){
      doc = await updateOneUserRoleService(req.params.userId, req.body);
    }
    else if (req.user._id == req.params.userId) {
      doc = await updateOneUserService(req.params.userId, req.body);
    }
    else {
      throw new Error("Not Authorized to Access this route");
    }
    response = {
      message: `${user} updated successfully!`,
      user: {
        _id: doc._id,
        firstname: doc.firstname,
        lastname: doc.lastname,
        username: doc.username,
        email: doc.email,
        roles: doc.roles,
        img: doc.img,
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


export const updateSuperAdminUserController = async (req: Request, res: Response) => {
  try {
    const doc = await updateSuperAdminUserService(req.body);
    response = {
      message: `${user} updated successfully!`,
      user: {
        _id: doc._id,
        firstname: doc.firstname,
        lastname: doc.lastname,
        username: doc.username,
        email: doc.email,
        roles: doc.roles,
        img: doc.img,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
        requests: `Visit ${useUrl(req, doc._id, user).helpInfo} for help on how to make requests`
      },
    };
    success(`super-admin UPDATED successfully!`);
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
    const doc = await deleteOneUserService(req.params.userId);
    if (doc) {
      response = {
        message: `${user} deleted successfully!`,
      };
      success(`${user} deleted successfully!`);
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
      message: `Error deleting ${user}: ${err}`,
    };
    error(`Error deleting ${user}: ${err}`);
    return res.status(500).json(response);
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