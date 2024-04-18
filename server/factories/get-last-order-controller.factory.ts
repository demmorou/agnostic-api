import { IController } from "@order/common/presentation/contracts";
import { GetLastOrderService } from "@order/common/data/services/get-last-order";
import { FakeOrderRepository } from "@order/common/infra/repositories";
import { GetLastOrderController } from "@order/common/presentation/controllers";

export const makeGetLastOrderController = (): IController => {
  const repository = new FakeOrderRepository();
  const getLastOrder = new GetLastOrderService(repository);
  const controller = new GetLastOrderController(getLastOrder);

  return controller;
};
