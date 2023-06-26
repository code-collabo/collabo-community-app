import express, { IRouter } from 'express';
import {
  signUpOneUserController,
  signInOneUserController,
  getAllUsersController,
  getOneUserController,
  updateOneUserController,
  deleteOneUserController
} from '../controllers/users.controller';

import { verifyUserWithJWT, verifyUserRoles } from '../middleware/authorization.middleware';

const router: IRouter = express.Router();

router.get('/', getAllUsersController);
router.get('/:userId', getOneUserController);
router.post('/auth/signup', signUpOneUserController);
router.post('/auth/signin', signInOneUserController);
router.patch('/:userId', updateOneUserController);
router.delete('/:userId', verifyUserWithJWT, verifyUserRoles(["admin"]), deleteOneUserController);

///////////////////////////////////////////////////////////
import {
  deleteAllUserController,
} from '../controllers/users.controller';
router.delete('/', verifyUserWithJWT, verifyUserRoles(["admin"]), deleteAllUserController);
//////////////////////////////////////////////////////////

export { router };
