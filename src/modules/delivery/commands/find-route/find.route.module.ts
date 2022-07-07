import { DeliveryLocationRepository } from '../../../../infrastructure/repository/delivery.location.repository'
import { FindRouteCase } from './find.route.case'
import { FindRouteHTTPController } from './find.route.http.controller'

const findRouteCase = new FindRouteCase(new DeliveryLocationRepository())
const findRouteHTTPController = new FindRouteHTTPController(findRouteCase)

const findRouteModule = {
  findRouteCase,
  findRouteHTTPController
}

export { findRouteModule, findRouteHTTPController }