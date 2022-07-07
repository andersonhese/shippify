import { Request, Response } from 'express';
import { FindRouteCase } from './find.route.case'

export class FindRouteHTTPController {
  constructor (
    private findRouteCase: FindRouteCase
  ) {}

  async find (request: Request, response: Response): Promise<Response> {
    const { maximun_distance, considerer_traffic, plot, maximun_distance_between_points } = request.body;

    const result: any = await this.findRouteCase.execute({
      maximun_distance, considerer_traffic, plot, maximun_distance_between_points
    })

    return response.status(201).send(result);
  }
}