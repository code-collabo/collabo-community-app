import express, { IRouter } from 'express';
import {
  getAllRegisteredUsersController,
  registerOneUserController,
  loginOneUserController,
  deleteOneUserController,
} from '../controllers/users.controller';

const router: IRouter = express.Router();

router.get('/', getAllRegisteredUsersController);
router.post('/registration', registerOneUserController);
router.post('/login', loginOneUserController);
router.delete('/:userId', deleteOneUserController);

export { router };
