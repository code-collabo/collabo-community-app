import { Request} from 'express';
import {port} from './variables'; 

export const getUrl = (req: Request): string => {
  const protocol = req.protocol;
  const host = req.hostname;
  const url = req.originalUrl;

  const fullUrl = `${protocol}://${host}:${port}${url}`

  return fullUrl;
}