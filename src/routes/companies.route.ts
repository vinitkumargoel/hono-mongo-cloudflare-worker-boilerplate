import { Hono } from "hono";

import * as companies_controller from "../controllers/companies.controller";

const company = new Hono();

company.post("/add", companies_controller.addCompany);

export default company;
