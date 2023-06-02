import {Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { error } from '../../../node-mongo-helpers';

export const authenticateMiddleware = async (req: Request, res: Response, next:NextFunction) => {
  // check header if it starts with bearer
  const reqHeaderAuth = req.headers.authorization;

  if(!reqHeaderAuth || !reqHeaderAuth.startsWith("Bearer ")) {
    throw new Error ("no Authentication provided");
  }

  const userToken = reqHeaderAuth.split(" ")[1];

  try {
    const decoded = jwt.verify(userToken, "my_jwt_secret");

    const payload = decoded as JwtPayload;

    req.user = payload._id;
   

    return next();

  } catch (err) {
    error(`Authentication Error`);
    res.status(500).json({
      message: 'Authentication error',
      error: `${err}`,
    });
  }
}