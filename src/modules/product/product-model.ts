import { getModelForClass, prop } from "@typegoose/typegoose";

export class Product {
  @prop({
    required: true,
    type: String,
  })
  name: string;

  @prop({
    required: true,
    type: Number,
  })
  price: number;

  @prop({
    type: Number,
  })
  rating: number;

  @prop({
    type: Boolean,
    default: false,
  })
  featured: boolean;
}

export const ProductModel = getModelForClass(Product, {
  schemaOptions: {
    timestamps: true,
  },
});
