import { GetLastOrder } from "@order/common/domain/use-cases";
import { HttpRequest, HttpResponse, IController, OkResponse } from "../contracts";
import { OrderViewModel } from "../view-models";

export class GetLastOrderController implements IController {
  constructor(private readonly getLastOrder: GetLastOrder) {}

  async handle(req: HttpRequest): Promise<HttpResponse<OrderViewModel>> {
    const { customerId } = req.query;
    const order = await this.getLastOrder.execute(customerId);

    return OkResponse(OrderViewModel.map(order));
  }
}
