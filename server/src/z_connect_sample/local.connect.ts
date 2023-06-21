// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import { afterLocalDBconnectSuccessful, connectToDBunsuccessful } from '../node-mongo-helpers';
// import { createAdmin } from './helpers/methods';

// dotenv.config();

// const mongooseLocalConnect = async (port: number | string) => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_ATLAS_URI}`);
//     afterLocalDBconnectSuccessful(port);
//     createAdmin();
//   } catch (err) {
//     connectToDBunsuccessful(err);
//   }
// }

// export default mongooseLocalConnect;
