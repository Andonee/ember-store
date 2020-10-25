import RESTAdapter from "@ember-data/adapter/rest";

export default class ApplicationAdapter extends RESTAdapter {
  // namespace = "api";
  host = "http://localhost:3000";

  pathForType() {
    return "products";
  }
}
