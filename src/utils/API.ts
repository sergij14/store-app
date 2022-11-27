import { excludedFields, TRUE } from "../constants";

export class API {
  constructor(public query, private queryObj) {}

  filter() {
    const queryObjectToPass = { ...this.queryObj };

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

  limitFields() {
    if (this.queryObj.fields) {
      const fields = this.queryObj.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    }

    return this;
  }

  sort() {
    if (this.queryObj.sort) {
      const sortBy = this.queryObj.sort.split(",").join(" ");
      console.log(sortBy);
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }
}
