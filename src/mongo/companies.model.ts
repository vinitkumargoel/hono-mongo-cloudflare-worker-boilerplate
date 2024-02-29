class CompanyModal {
  db: any = null;
  constructor(ctx: any) {
    this.db = ctx.get("realm01")("companies");
  }
  async find() {
    return await this.db.find({});
  }
  async findOne(query: any) {
    return await this.db.findOne(query);
  }
  async insert(data: any) {
    return await this.db.insertOne(data);
  }
  async update(query: any, data: any) {
    return await this.db.updateOne(query, data);
  }
}

export default CompanyModal;
