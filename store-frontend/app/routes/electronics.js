import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ElectronicsRoute extends Route {
  @service store;

  async model() {
    // console.log("lolo");
    // console.log(
    //   this.store
    //     .query("product", {
    //       filter: {
    //         category: "electronics",
    //       },
    //     })
    //     .then(function (items) {
    //       return items;
    //     })
    // );
    return this.store.query("product", "products?category=electronics");
  }
}
