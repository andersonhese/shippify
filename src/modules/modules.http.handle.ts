import { DeliveryHTTPHandler } from './delivery/delivery.http.handle';

import { Router } from 'express';

const router = Router();

router.use(DeliveryHTTPHandler);

export { router as ModulesHTTPHandler };