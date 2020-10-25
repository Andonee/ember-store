import RESTAdapter from "@ember-data/adapter/rest";

export default class ApplicationAdapter extends RESTAdapter {
  // namespace = "api";
  host = "http://localhost:3000";

  pathForType() {
    return "products";
  }

  buildURL(modelName, id, snapshop, requestType, query) {
    debugger;
    switch (requestType) {
      case "findAll":
        console.log("findAll");
        return this.urlForFindAll(modelName);
      case "query":
        console.log(this.pathForType);
        return this.pathForType;
    }
  }
}
