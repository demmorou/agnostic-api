import { Order } from "@order/common/domain/entities";
import { GetLastOrder } from "@order/common/domain/use-cases";

import { OrderRepository } from "../repositories/order.repository";

export class GetLastOrderService implements GetLastOrder {
  constructor(private readonly repository: OrderRepository) {}

  execute(customerId: string): Promise<Order> {
    return this.repository.getLastOrder(customerId);
  }
}
