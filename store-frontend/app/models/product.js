import Model, { attr } from "@ember-data/model";

export default class ProductModel extends Model {
  @attr title;
  @attr category;
  @attr price;
  @attr image;
}
