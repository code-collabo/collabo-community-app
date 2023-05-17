import mongooseAtlasConnect from './db.atlas.connect';
import { app as app } from './app';

import {port} from './helpers/variables'; 


app.listen(port, () => {
  mongooseAtlasConnect(port);
});
