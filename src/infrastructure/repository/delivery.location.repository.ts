// import data from '../database/payloadTest.json';
import { DeliveryLocation } from '../interface/delivery.location.interface'
import { Route, Step } from '../interface/route.interface'
import { FindRoute } from '../interface/find.route.interface'

export class DeliveryLocationRepository {
  
  constructor (
    private callRequests: number = 1
  ) {}

  async getAll (): Promise<DeliveryLocation[]> {
    const data: DeliveryLocation[] = require('../database/payloadTest.json');

    return Promise.resolve(data)
  }

  async findOptimizedRoute (searchFields: FindRoute): Promise<Route> {
    const data: DeliveryLocation[] = require('../database/payloadTest.json').sort((a: DeliveryLocation, b: DeliveryLocation) => a.distance - b.distance);

    let steps: Step[] = []

    var i = 0, len = data.length;

    while (i < len) {
      let step: DeliveryLocation = data[i];

      if (searchFields.maximun_distance) {
        if (step.distance > searchFields.maximun_distance) {
          break;
        }
      }

      if (searchFields.maximun_distance_between_points) {
        let pickup_distance = Math.abs(step.pickup_location[0] - step.pickup_location[1]);
        let delivery_distance = Math.abs(step.delivery_location[0] - step.delivery_location[1]);

        if (pickup_distance > searchFields.maximun_distance_between_points || delivery_distance > searchFields.maximun_distance_between_points) {
          break;
        }
      }

      let pickupStep: Step = {
        id: step.id,
        point: step.pickup_location,
        type: 'pickup'
      }

      let deliveryStep: Step = {
        id: step.id,
        point: step.delivery_location,
        type: 'delivery'
      }

      if (searchFields.considerer_traffic) {
        pickupStep.traffic = step.traffic
        deliveryStep.traffic = step.traffic
      }

      steps.push(pickupStep, deliveryStep)
      i++
    }

    steps = [...steps].sort((a: Step, b: Step) => { 

      let pointA1 = a.point[0], pointA2 = a.point[1];
      let pointB1 = b.point[0], pointB2 = b.point[1];

      if (searchFields.considerer_traffic) {
        pointA1 += a.traffic || 0
        pointA2 += a.traffic || 0
        pointB1 += b.traffic || 0
        pointB2 += b.traffic || 0
      }

      return pointA1 - pointB1 || pointA2 - pointB2
    })

    steps = [...steps].sort((a: Step, b: Step) => {

      if (a.id === b.id) {
        if (a.type === 'delivery') {
          return 1
        } else {
          return -1;
        }
      }

      return 0
    })

    const response: Route = {
      routeId: this.callRequests,
      steps: steps
    }

    this.callRequests++

    if (searchFields.plot) {
      response.stepsLenght = response.steps.length;
      response.search = searchFields
    }

    return response
  }
}