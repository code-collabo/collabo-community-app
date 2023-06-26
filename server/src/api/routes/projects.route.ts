import express, { IRouter } from 'express';
import {
  getAllProjectsController,
  createOneProjectController,
  updateOneProjectController,
  deleteOneProjectController,
} from '../controllers/projects.controller';

import { verifyUserWithJWT, verifyUserRoles } from '../middleware/authorization.middleware';

const router: IRouter = express.Router();

router.get('/', getAllProjectsController);
router.post('/', verifyUserWithJWT, verifyUserRoles(["admin", "moderator"]), createOneProjectController);
router.patch('/:projectId', verifyUserWithJWT, verifyUserRoles(["admin", "moderator"]), updateOneProjectController);
router.delete('/:projectId', verifyUserWithJWT, verifyUserRoles(["admin"]), deleteOneProjectController);

///////////////////////////////////////////////////////////
import {
  deleteAllProjectController,
} from '../controllers/projects.controller';
router.delete('/', verifyUserWithJWT, verifyUserRoles(["admin"]), deleteAllProjectController);
//////////////////////////////////////////////////////////

export { router };
