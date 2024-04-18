import { Order } from "@order/common/domain/entities";

export class OrderViewModel {
  orderId: string;
  customerId: string;
  status: string;
  createdAt: string;

  static map(order: Order): OrderViewModel {
    return {
      orderId: order.orderId,
      customerId: order.customerId,
      status: order.status,
      createdAt: order.createdAt.toISOString(),
    };
  }

  static mapCollection(orders: Order[]): OrderViewModel[] {
    return orders.map(OrderViewModel.map);
  }
}
