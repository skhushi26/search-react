import { Response } from 'express';

export type FormattedResponse<T> = {
  res: Response;
  result: T;
  statusCode: Number;
  message: String;
};

export function FormatResponse<T>(
  res: Response,
  result: T,
  statusCode: number,
  message: string,
): FormattedResponse<T> {
  return {
    res,
    result,
    statusCode,
    message,
  };
}

// export type FormatedResponse<T> = {
//     result: T;
//     statusCode: number;
//   };

//   export function FormatResponse<T>(
//     result: T,
//     statusCode: number,
//   ): FormatedResponse<T> {
//     return { result, statusCode };
//   }
