import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ComputersRoute extends Route {
  @service store;

  async model() {
    return this.store.query("product", "?category=computers", {
      reload: true,
    });
  }
}
