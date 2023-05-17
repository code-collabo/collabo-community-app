import { Request} from 'express';
import {port} from './variables'; 

export const getUrl = (req: Request): string => {
  const protocol = req.protocol;
  const host = req.hostname;
  const url = req.originalUrl;
  // const port = process.env.PORT_ATLAS || 3000;

  const fullUrl = `${protocol}://${host}:${port}${url}`

  return fullUrl;
}