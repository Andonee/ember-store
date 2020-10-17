import Controller from "@ember/controller";

export default class ItemController extends Controller {
  constructor(...args) {
    super(...args);
    console.log("ITEM MODEL", this.model);
  }
}
