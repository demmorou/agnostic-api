import { OrderDto } from "@order/common/data/dtos";
import { OrderRepository } from "@order/common/data/repositories/order.repository";
import { orders } from "../../data-sources";

export class FakeOrderRepository implements OrderRepository {
  // data source pode vir como injeção de dependencia
  constructor() {}

  async getLastOrder(customerId: string): Promise<OrderDto> {
    const lastOrder = orders.find((order) => order.userId === customerId);

    return {
      customerId: lastOrder.userId,
      orderId: lastOrder.orderId,
      createdAt: new Date(lastOrder.createdAt),
      status: lastOrder.status,
    };
  }
}
