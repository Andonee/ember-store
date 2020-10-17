import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class ItemController extends Controller {
  constructor(...args) {
    super(...args);
  }

  @action
  async deleteProduct(product_id) {
    const product = this.store.peekRecord("product", product_id);
    // await product.destroyRecord();
    // this.transitionToRoute("index");
    console.log(product);
  }
}
