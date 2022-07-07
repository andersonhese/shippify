import { FindRouteHTTPHandler } from './commands/find-route/find.route.http.handler';

import { Router } from 'express';

const router = Router();

router.use(FindRouteHTTPHandler);

export { router as DeliveryHTTPHandler };