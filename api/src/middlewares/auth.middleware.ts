import {
  NestMiddleware,
  Injectable,
  ForbiddenException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { FormatResponse, FormattedResponse } from 'src/utils/formatResponse';

/** The AuthMiddleware is used to
 * (1) read the request header bearer token/user access token
 * (2) decrypt the access token to get the user object
 */
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    if (req.header('secret-key') !== process.env.SECRET_KEY) {
      res.status(401).send('Unauthorized');
      //   return FormatResponse<any>(res, null, 401, 'Unauthorized');
    } else {
      next();
    }
  }
}
