import RESTAdapter from "@ember-data/adapter/rest";

export default class ApplicationAdapter extends RESTAdapter {
  // namespace = "api";
  host = "http://localhost:3000";

  // pathForType() {
  //   return "products";
  // }

  buildURL(modelName, id, snapshot, requestType, query) {
    // debugger;
    switch (requestType) {
      case "findRecord":
        return this.urlForFindRecord(id, modelName, snapshot);
      case "findAll":
        return this.urlForFindAll(modelName);
      case "query":
        console.log(this.host + "/" + modelName + "s" + query);
        return this.host + "/" + modelName + "s" + query;
      case "queryRecord":
        return this.urlForQueryRecord(query, modelName);
      case "findMany":
        return this.urlForFindMany(id, modelName, snapshot);
      case "findHasMany":
        return this.urlForFindHasMany(id, modelName);
      case "findBelongsTo":
        return this.urlForFindBelongsTo(id, modelName);
      case "createRecord":
        return this.urlForFindAll(modelName);
      case "deleteRecord":
        return this.urlForDeleteRecord(id, modelName, snapshot);
      case "updateRecord":
        return this.urlForUpdateRecord(id, modelName, snapshot);
      default:
        return this._buildURL(modelName, id);
    }
  }
}
