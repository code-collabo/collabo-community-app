import {Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { error } from '../../../node-mongo-helpers';

export const verifyUserWithJWT = async (req: Request, res: Response, next:NextFunction) => {
  // check header if it starts with bearer
  const reqAuthorizationHeader = req.headers.authorization;

  if(!reqAuthorizationHeader || !reqAuthorizationHeader.startsWith("Bearer ")) {
    throw new Error ("AUTHORIZATION ERROR: User could not be verified because authorization header bearer not found");
  }

  const userToken = reqAuthorizationHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(userToken, "my_jwt_secret");

    const payload = decoded as JwtPayload;

    console.log(payload);

    req.user._id = payload._id as string;
    req.user.username = payload.username as string;
    req.user.roles = payload.roles as string[];

    console.log(req.user);

    return next();

  } catch (err) {
    error(`AUTHORIZATION ERROR: ${err}`);
    res.status(500).json({
      message: 'AUTHORIZATION ERROR',
      error: `${err}`,
    });
  }
}



export const verifyUserRoles = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next:NextFunction) => {
      const {roles} = req.user;
      console.log(req.user)

      const roleIsVerified = allowedRoles.some(allowedRole => {
        return roles.includes(allowedRole);
      })

      if (roleIsVerified){
        return next();
      }
      
      throw new Error (`AUTHORIZATION ERROR: only ${allowedRoles} have access to this route`);

  }
}