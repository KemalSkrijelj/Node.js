import { Request, Response, NextFunction } from 'express';
import * as z from 'zod';
// Generic validation middleware
export const validate = <T extends z.ZodTypeAny>(schema: T) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body); // Validate the request body
      next();
    } catch (e) {
      if (e instanceof z.ZodError) {
        res.status(400).json({ errors: e.errors }); // Send validation errors
      } else {
        next(e); // Pass other errors to the global error handler
      }
    }
  };
};
