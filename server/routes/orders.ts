import { Router } from "express";

import { makeGetLastOrderController } from "@server/factories";
import { adaptRoute } from "@server/adapters";

export default (router: Router): void => {
  router.get("/orders/last", adaptRoute(makeGetLastOrderController()));
};
