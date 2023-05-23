import express, { IRouter } from 'express';
import {
  getAllProjectsController,
  createOneProjectController,
  getOneProjectController,
  deleteOneProjectController
} from '../controllers/projects.controller';

const router: IRouter = express.Router();

router.get('/', getAllProjectsController);
router.post('/', createOneProjectController);
router.get('/:projectId', getOneProjectController);
router.delete('/:projectId', deleteOneProjectController);


/////////////// EXAMPLE FOR UPDATE ////////////////////////
import { updateOneProjectController } from '../controllers/projects.controller';
router.patch('/:projectId', updateOneProjectController);
//////////////////////////////////////////////////////////


export { router };
