import { Request } from 'express';
import { port } from './variables';

export const getUrl = (req: Request, id: string): string => {
  const { protocol, hostname, originalUrl } = req;
  const fullUrl = `${protocol}://${hostname}:${port}${originalUrl}/${id}`;
  return fullUrl;
}
