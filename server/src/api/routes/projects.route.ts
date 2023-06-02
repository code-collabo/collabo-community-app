import express, { IRouter } from 'express';
import {
  getAllProjectsController,
  createOneProjectController,
  getOneProjectController,
  deleteOneProjectController
} from '../controllers/projects.controller';

import {
  authenticateMiddleware,
} from '../middleware/authenticate'

const router: IRouter = express.Router();

router.get('/', authenticateMiddleware, getAllProjectsController);
router.post('/', authenticateMiddleware, createOneProjectController);
router.get('/:projectId', authenticateMiddleware, getOneProjectController);
router.delete('/:projectId', authenticateMiddleware, deleteOneProjectController);

export { router };
