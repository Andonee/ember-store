import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class UpdateProductController extends Controller {
  @service store;

  @tracked name;
  @tracked category;
  @tracked price;
  @tracked image;

  categories = [
    "electronics",
    "computers",
    "arts",
    "women's fashion",
    "men's fashion",
  ];

  @action onCategorySelect(category) {
    this.category = category;
  }

  @action
  updateProduct(product_id) {
    this.model.save().then(() => this.transitionToRoute("item", product_id));
  }
}
