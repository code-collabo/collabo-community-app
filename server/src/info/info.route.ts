import express, { IRouter } from 'express';
import { getOneProjectRequestsInfoController } from './info.controller';


const router: IRouter = express.Router();

router.get('/projects/:projectId', getOneProjectRequestsInfoController);

export { router };
