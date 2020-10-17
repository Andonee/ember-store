import EmberRouter from "@ember/routing/router";
import config from "store-frontend/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("sales");
  this.route("top-products");
  this.route("about-shop");
  this.route("electronics");
  this.route("computers");
  this.route("arts");
  this.route("women");
  this.route("men");
  this.route("add-product");
  this.route("item", { path: "/item/:item_id" });
});
