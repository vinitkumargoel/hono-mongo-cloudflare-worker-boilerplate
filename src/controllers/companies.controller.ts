import CompanyModal from "../mongo/companies.model";
import { ICompanyBody } from "../types/companies.types";

export const addCompany = async (ctx: any) => {
  const body: ICompanyBody = await ctx.req.raw.json();

  try {
    const finalBody = {
      ...body,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const model = new CompanyModal(body);
    const response = await model.insert(finalBody);

    return ctx.json({
      message: "User added successfully",
      data: {
        id: response.insertedId,
      },
    });
  } catch (e) {
    return ctx.json(
      {
        message: "Failed to add user",
      },
      500
    );
  }
};
