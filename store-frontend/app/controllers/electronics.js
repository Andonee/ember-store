import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default class ElectronicsController extends Controller {
  @service store;
  constructor(...args) {
    super(args);
    // this.store.query("product", "products?category=electronics");
  }
}
