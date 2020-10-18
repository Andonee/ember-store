import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ArtsRoute extends Route {
  @service store;

  async model() {
    // const data = await this.store.findAll("product");
    // return data;
    console.log(this.store.findAll("product"));
    return this.store.findAll("product");
  }
}
