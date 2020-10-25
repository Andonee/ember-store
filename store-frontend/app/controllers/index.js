import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class IndexController extends Controller {
  constructor(...args) {
    super(...args);
  }

  @action
  async deleteProduct(product_id) {
    const product = this.store.peekRecord("product", product_id);
    await product.destroyRecord();

    console.log(product_id);

    console.log(product);
  }

  @action updateProduct(product_id) {
    this.transitionToRoute("update-product", product_id);
  }
}
