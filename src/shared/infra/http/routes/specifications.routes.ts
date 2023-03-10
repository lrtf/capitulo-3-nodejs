import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecificarion/CreateSpecificationController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const specificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRouter.use(ensureAuthenticated);
specificationsRouter.post("/", createSpecificationController.handle);

export { specificationsRouter };
