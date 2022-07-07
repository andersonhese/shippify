import { Router, Request, Response } from 'express';

import { findRouteHTTPController } from './find.route.module';

const router = Router();

router.post('/find-route', (request: Request, response: Response) => {
  return findRouteHTTPController.find(request, response);
})

export { router as FindRouteHTTPHandler }