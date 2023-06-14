import express, { IRouter } from 'express';
import {
  getAllProjectsController,
  getOneProjectController,
  createOneProjectController,
  updateOneProjectController,
  deleteOneProjectController,
} from '../controllers/projects.controller';

const router: IRouter = express.Router();

router.get('/', getAllProjectsController);
router.get('/:projectId', getOneProjectController);
router.post('/', createOneProjectController);
router.patch('/:projectId', updateOneProjectController);
router.delete('/:projectId', deleteOneProjectController);

///////////////////////////////////////////////////////////
import {
  deleteAllProjectController,
} from '../controllers/projects.controller';
router.delete('/', deleteAllProjectController);
//////////////////////////////////////////////////////////

export { router };
