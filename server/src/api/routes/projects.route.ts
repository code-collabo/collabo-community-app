import express, { IRouter } from 'express';
import {
  getAllProjectsController,
  getAllUnArchivedProjectsController,
  getOneProjectController,
  createOneProjectController,
  updateOneProjectController,
  deleteOneProjectController,
} from '../controllers/projects.controller';

import { verifyUserWithJWT, verifyUserRoles } from '../middleware/authorization.middleware';

const router: IRouter = express.Router();

router.get('/unarchived', getAllUnArchivedProjectsController);
router.get('/all', verifyUserWithJWT, verifyUserRoles(["admin", "moderator"]), getAllProjectsController);
router.post('/create', verifyUserWithJWT, verifyUserRoles(["admin"]), createOneProjectController);
router.patch('/update/:projectId', verifyUserWithJWT, verifyUserRoles(["admin", "moderator"]), updateOneProjectController);
router.delete('/delete/:projectId', verifyUserWithJWT, verifyUserRoles(["admin"]), deleteOneProjectController);

///////////////////////////////////////////////////////////
import {
  deleteAllProjectController,
} from '../controllers/projects.controller';
router.delete('/delete', verifyUserWithJWT, verifyUserRoles(["admin"]), deleteAllProjectController);
//////////////////////////////////////////////////////////

export { router };
