import { Request } from 'express';
import { port } from './variables';

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
  const url = {
    api: {
      main: `${base}${baseUrl}/${item}s`.replace(requestsHelpInfoRoute, ''),
      one: `${base}${originalUrl}`.replace(requestsHelpInfoRoute, ''),
    },
    helpInfo: `${base}${baseUrl}/${id}`, // This is the one left
  }
  return url;
}
