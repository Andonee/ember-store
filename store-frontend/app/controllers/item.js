import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class ItemController extends Controller {
  constructor(...args) {
    super(...args);
  }

  @service("shopping-cart") cart;

  @action
  async deleteProduct(product_id) {
    const product = this.store.peekRecord("product", product_id);
    // await product.destroyRecord();
    // this.transitionToRoute("index");
    console.log(product);
  }

  @action addToCart() {
    const { title, image, price } = this.model;
    this.cart.addItem({
      title,
      image,
      price: price,
    });
  }
}
