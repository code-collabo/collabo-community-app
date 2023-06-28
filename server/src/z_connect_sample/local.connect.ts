// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import { afterLocalDBconnectSuccessful, connectToDBunsuccessful } from '../node-mongo-helpers';
// import { createSuperAdmin } from './helpers/methods';

// dotenv.config();

// const mongooseLocalConnect = async (port: number | string) => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_ATLAS_URI}`);
//     afterLocalDBconnectSuccessful(port);
//     createSuperAdmin();
//   } catch (err) {
//     connectToDBunsuccessful(err);
//   }
// }

// export default mongooseLocalConnect;
