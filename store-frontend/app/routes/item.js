import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ItemRoute extends Route {
  @service store;

  async model(params) {
    debugger;
    const { item_id } = params;
    // const data = await this.store.findAll("product");
    const product = await this.store.findRecord("product", item_id);

    // const product = data.find(({ id }) => id === item_id);
    return product;
  }
}
