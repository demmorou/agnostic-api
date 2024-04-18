import { Order } from "../entities/order";

export interface GetLastOrder {
  execute(customerId: string): Promise<Order>
}