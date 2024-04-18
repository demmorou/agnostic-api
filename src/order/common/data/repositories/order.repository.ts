import { OrderDto } from "../dtos/order.dto";

export interface OrderRepository {
  getLastOrder(customerId: string): Promise<OrderDto>;
}
