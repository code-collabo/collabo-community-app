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
router.post('/', verifyUserWithJWT, verifyUserRoles(["admin"]), createOneProjectController);
router.patch('/:projectId', verifyUserWithJWT, verifyUserRoles(["admin"]), updateOneProjectController);
router.delete('/:projectId', verifyUserWithJWT, verifyUserRoles(["admin"]), deleteOneProjectController);

///////////////////////////////////////////////////////////
import {
  deleteAllProjectController,
} from '../controllers/projects.controller';
router.delete('/', verifyUserWithJWT, verifyUserRoles(["admin"]), deleteAllProjectController);
//////////////////////////////////////////////////////////

export { router };
