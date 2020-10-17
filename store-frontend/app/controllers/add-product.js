import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class AddProductController extends Controller {
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

  @action
  Products() {
    console.log(
      "name",
      this.name,
      "category",
      this.category,
      "price",
      this.price,
      "image",
      this.image
    );
  }

  @action
  onCategorySelect(category) {
    this.category = category;
  }
  @action
  createProduct() {
    this.store
      .createRecord("product", {
        id: Math.floor(Math.random() * 1000),
        title: this.name,
        category: this.category,
        price: this.price,
        image: this.image,
      })
      .save();

    this.transitionToRoute("index");
  }
}
