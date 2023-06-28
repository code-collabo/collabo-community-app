import express, { IRouter } from 'express';
import {
  getAllProjectsController,
  getOneProjectController,
  createOneProjectController,
  updateOneProjectController,
  deleteOneProjectController,
} from '../controllers/projects.controller';

import { verifyUserWithJWT, verifyUserRoles } from '../middleware/authorization.middleware';

const router: IRouter = express.Router();

router.get('/', getAllProjectsController);
router.get('/:projectId', getOneProjectController);
router.post('/', verifyUserWithJWT, verifyUserRoles(["super-admin", "moderator"]), createOneProjectController);
router.patch('/:projectId', verifyUserWithJWT, verifyUserRoles(["super-admin", "moderator"]), updateOneProjectController);
router.delete('/:projectId', verifyUserWithJWT, verifyUserRoles(["super-admin"]), deleteOneProjectController);

///////////////////////////////////////////////////////////
import {
  deleteAllProjectController,
} from '../controllers/projects.controller';
router.delete('/', verifyUserWithJWT, verifyUserRoles(["super-admin"]), deleteAllProjectController);
//////////////////////////////////////////////////////////

export { router };
