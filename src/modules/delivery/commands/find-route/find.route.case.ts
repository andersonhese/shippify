import { FindRouteDTO } from './find.route.dto'
import { DeliveryRepository } from '../../delivery.repository.interface'

export class FindRouteCase {

  constructor (
    private deliveryRepository: DeliveryRepository
  ) {}

  async execute (data: FindRouteDTO) {
    const post = await this.deliveryRepository.findOptimizedRoute(data);
    return post;
  }

}