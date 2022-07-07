import { DeliveryLocation } from '../../infrastructure/interface/delivery.location.interface'
import { Route } from '../../infrastructure/interface/route.interface'
import { FindRoute } from '../../infrastructure/interface/find.route.interface'

export interface DeliveryRepository {
  getAll(): Promise<DeliveryLocation[]>;
  findOptimizedRoute(data: FindRoute): Promise<Route>;
}