import { TRUE } from "../constants";

export class API {
  constructor(public query, private queryObj) {}

  filter() {
    const queryObjectToPass = { ...this.queryObj };
    const excludedFields = ["page", "sort"];
    excludedFields.forEach((el) => delete queryObjectToPass[el]);

    const { name, featured } = queryObjectToPass;

    if (featured) {
      queryObjectToPass.featured = featured === TRUE ? true : false;
    }
    if (name) {
      queryObjectToPass.name = { $regex: name, $options: "i" };
    }

    this.query = this.query.find(queryObjectToPass);

    return this;
  }
}
