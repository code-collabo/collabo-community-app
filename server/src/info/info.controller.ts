import { Request, Response } from 'express';
import { getOneProjectService } from '../api/services/projects.service';
import { success, error } from '../../node-mongo-helpers';
import { items } from '../helpers/variables';
import { RequestsHelpInfo, requestsHelpInfo } from './info.requests';

let response: RequestsHelpInfo;

const noRecordFound = ({ req, res, item, statusCode, message } : { req: Request; res: Response; item: string; statusCode: number; message: string; }) => {
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

export const getOneProjectRequestsInfoController = async (req: Request, res: Response) => {
  const { project } = items;
  try {
    const doc = await getOneProjectService(req.params.projectId);
    if (doc) {
      response = requestsHelpInfo(req, project, doc._id);
      success(`GET request successful!`);
      return res.status(200).json(response);
    } else {
      error('No record found for provided ID');
      noRecordFound({
        res,
        req,
        item: project,
        statusCode: 404,
        message: `No record found for provided ID, try getting all ${project}s to find a correct ${project} id or create a new ${project}`
      });
    }
  } catch (err) {
    error(`Error retriving ${project} request help info: ${err}`);
    noRecordFound({
      res,
      req,
      item: project,
      statusCode: 500,
      message: `Invalid ID, try getting all ${project}s to find a valid ${project} id or create a new ${project}`
    });
  }
}
