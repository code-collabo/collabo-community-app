import express, { IRouter } from 'express';
import {
  createOneUserController,
  signInOneUserController,
  getAllUsersController,
  getOneUserController,
  updateOneUserController,
  deleteOneUserController
} from '../controllers/users.controller';

const router: IRouter = express.Router();

router.get('/', getAllUsersController);
router.get('/:userId', getOneUserController);
router.post('/', createOneUserController);
router.post('/signin', signInOneUserController);
router.patch('/:userId', updateOneUserController);
router.delete('/:userId', deleteOneUserController);

///////////////////////////////////////////////////////////
import {
  deleteAllUserController,
} from '../controllers/users.controller';
router.delete('/', deleteAllUserController);
//////////////////////////////////////////////////////////

export { router };
