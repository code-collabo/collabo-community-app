import { Request } from 'express';
import { useUrl } from '../helpers/methods';

// FUTURE TODO: e.g.another mongoose model will use different request body (adjust the requestsHelpInfo to accomodate different request body shapes when it's time);
export interface RequestsHelpInfo {
  message: string;
  requests: {
    GET: Record<string, unknown>;
    POST: Record<string, unknown>;
    DELETE?: Record<string, unknown>;
  };
}

export const requestsHelpInfo = (req: Request, item: string, id?: string): RequestsHelpInfo => {
  return {
    message: `Info help for making requests to and accessing /${item}s endpoint and /${item}s/${id}`,
    requests: {
      GET: {
        method: 'GET',
        all: {
          description: `Get all ${item}s`,
          url: useUrl(req, id, item).api.main,
        },
        one: {
          description: `Get ${item} with id: ${id}`,
          url: useUrl(req, id, item).api.one,
        }
      },
      POST: {
        method: 'POST',
        description: `Create a new ${item}`,
        url: useUrl(req, id, item).api.main,
        body: {
          title: 'string',
          url: 'string',
          type: 'string',
          children: [
            {
              title: 'string',
              url: 'string',
            },
            'Note: add as many objects (having title and url properties) as you like in this children array'
          ],
          issues: {
            url: 'string',
          },
        },
      },
      // TODO: Add patch and put requests here too once added to api
      DELETE: {
        method: 'DELETE',
        description: `Delete ${item} with id: ${id}`,
        url: useUrl(req, id, item).api.one,
      },
    }
  }
}
