import express, { IRouter } from 'express';
import {
  signUpOneUserController,
  signInOneUserController,
  getAllUsersController,
  getOneUserController,
  getSuperAdminUserController,
  updateOneUserController,
  updateSuperAdminUserController,
  deleteOneUserController
} from '../controllers/users.controller';

import { verifyUserWithJWT, verifyUserRoles } from '../middleware/authorization.middleware';

const router: IRouter = express.Router();

router.get('/', verifyUserWithJWT, verifyUserRoles(["super-admin", "moderator"]), getAllUsersController);
router.get('/super-admin', verifyUserWithJWT, verifyUserRoles(["super-admin"]), getSuperAdminUserController);
router.get('/:userId', verifyUserWithJWT, verifyUserRoles(["super-admin", "moderator"]), getOneUserController);

router.post('/auth/signup', verifyUserWithJWT, verifyUserRoles(["super-admin"]), signUpOneUserController);
router.post('/auth/signin', signInOneUserController);

router.patch('/super-admin', verifyUserWithJWT, verifyUserRoles(["super-admin"]), updateSuperAdminUserController);
router.patch('/:userId', verifyUserWithJWT, updateOneUserController);

router.delete('/:userId', verifyUserWithJWT, verifyUserRoles(["super-admin"]), deleteOneUserController);

///////////////////////////////////////////////////////////
import {
  deleteAllUserController,
} from '../controllers/users.controller';
router.delete('/', verifyUserWithJWT, verifyUserRoles(["super-admin"]), deleteAllUserController);
//////////////////////////////////////////////////////////

export { router };
