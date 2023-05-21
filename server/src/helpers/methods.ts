import { Request, Response } from 'express';
import { port } from './variables';
import { requestsHelpInfo } from '../info/info.requests';

interface URLs {
  api: {
    main: string;
    one: string;
  };
  helpInfo: string;
}

export const useUrl = (req: Request, id?: string, item?: string): URLs => {
  const { protocol, hostname, originalUrl, baseUrl } = req;
  const base = `${protocol}://${hostname}:${port}`;
  const requestsHelpInfoRoute = '/requests/help/info';
  const main = `${base}${baseUrl}`.replace(requestsHelpInfoRoute, '');
  const itemInstring = (main).match(`/${item}s`);
  const url = {
    api: {
      main: itemInstring ? main : `${main}/${item}s`,
      one: `${base}${originalUrl}`.replace(requestsHelpInfoRoute, ''),
    },
    helpInfo: `${base}${baseUrl}/${id}`.replace(`/${item}s`, `${requestsHelpInfoRoute}/${item}s`),
  }
  return url;
}

export const idDoesNotExist = ({ req, res, item, statusCode, message } : { req: Request; res: Response; item: string; statusCode: number; message: string; }) => {
  const { requests } = requestsHelpInfo(req, item);
  const all = (requests.GET.all as Record<string, unknown>);
  delete requests.GET.all;
  delete requests.DELETE;
  return res.status(statusCode).json({
    message,
    requests: {
      GET: {
        method: requests.GET.method,
        ...all
      },
      POST: requests.POST,
    }
  });
}
