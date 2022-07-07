import { FindRoute } from '../interface/find.route.interface'

export interface Step {
  id: number;
  point: number[];
  type: 'pickup' | 'delivery';
  traffic?: number;
}

export interface Route {
  routeId: number;
  steps: Step[];
  stepsLenght?: number;
  search?: FindRoute;
}