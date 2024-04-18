import { Request, Response } from "express";

import { IController } from "@order/common/presentation/contracts";

export const adaptRoute = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle(req);
    return res.status(httpResponse.statusCode).json(httpResponse.data);
  };
};
