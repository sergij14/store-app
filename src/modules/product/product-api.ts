import { ProductsQueryParams } from "./product-schema";
import {
  excludedFields,
  NUM_FILTER_REGEX,
  NUM_FILTER_SEPARATOR,
  operatorsMap,
} from "../../constants";

export class ProductAPI {
  constructor(public query, private queryObj: ProductsQueryParams) {}

  filter() {
    const queryObjectToPass = { ...this.queryObj };

    excludedFields.forEach((el) => delete queryObjectToPass[el]);

    const { name, featured, numericFilters } = queryObjectToPass;

    if (featured) {
      queryObjectToPass.featured = featured;
    }

    if (name) {
      queryObjectToPass.name = { $regex: name.toString(), $options: "i" };
    }

    if (numericFilters) {
      const options = ["price", "rating"];
      const filters = numericFilters.replace(
        NUM_FILTER_REGEX,
        (match) =>
          `${NUM_FILTER_SEPARATOR + operatorsMap[match] + NUM_FILTER_SEPARATOR}`
      );

      filters.split(",").forEach((item) => {
        const [field, operator, value] = item.split(NUM_FILTER_SEPARATOR);

        if (options.includes(field)) {
          queryObjectToPass[field] = { [operator]: +value * 1 };
        }
      });
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

  paginate() {
    const page = (this.queryObj.page && +this.queryObj.page) || 1;
    const limit = (this.queryObj.limit && +this.queryObj.limit) || 10;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}
