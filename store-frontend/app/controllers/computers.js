import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class ComputersController extends Controller {
  @action
  async deleteProduct(product_id) {
    const product = this.store.peekRecord("product", product_id);
    await product.destroyRecord();
  }

  @action
  async updateProduct(product_id) {
    this.transitionToRoute("update-product", product_id);
  }
}
