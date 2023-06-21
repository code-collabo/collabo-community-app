import express, { IRouter } from 'express';
import {
  createOneUserController,
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
router.post('/sign-up', createOneUserController);
router.post('/sign-in', signInOneUserController);
router.patch('/update/:userId', updateOneUserController);
router.delete('/delete/:userId', verifyUserWithJWT, verifyUserRoles(["admin"]), deleteOneUserController);

///////////////////////////////////////////////////////////
import {
  deleteAllUserController,
} from '../controllers/users.controller';
router.delete('/delete', verifyUserWithJWT, verifyUserRoles(["admin"]), deleteAllUserController);
//////////////////////////////////////////////////////////

export { router };
