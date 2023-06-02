import express, { IRouter } from 'express';
import { getOneProjectRequestsInfoController } from './info.controller';

import {
  authenticateMiddleware
} from '../api/middleware/authenticate'

const router: IRouter = express.Router();

router.get('/projects/:projectId', authenticateMiddleware, getOneProjectRequestsInfoController);

export { router };
