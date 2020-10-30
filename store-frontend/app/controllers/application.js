import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default class ApplicationController extends Controller {
  @service("shopping-cart") cart;

  get itemCount() {
    return this.cart.itemList.reduce((total, item) => {
      return (total += parseInt(item.count));
    }, 0);
  }
}
