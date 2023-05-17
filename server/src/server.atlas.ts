import mongooseAtlasConnect from './db.atlas.connect';
import { app as app } from './app';

import {port} from './helpers/variables'; 
// const port = process.env.PORT_ATLAS || 3000;


app.listen(port, () => {
  mongooseAtlasConnect(port);
});
