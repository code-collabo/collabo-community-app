import express, { IRouter } from 'express';
import {
  getAllProjectItemsController,
  createOneProjectItemController,
  getOneProjectItemController,
  deleteOneProjectItemController
} from '../controllers/project.controller';

const router: IRouter = express.Router();

router.get('/', getAllProjectItemsController);
router.post('/', createOneProjectItemController);
router.get('/:projectId', getOneProjectItemController);
router.delete('/:projectId', deleteOneProjectItemController);

export { router };
