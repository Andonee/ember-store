import RESTAdapter from "@ember-data/adapter/rest";

export default class ApplicationAdapter extends RESTAdapter {
  namespace = "data";
  buildURL(...args) {
    // debugger;
    console.log("ARGS", args);
    if (args[3] === "deleteRecord") {
      return `${super.buildURL(...args)}`;
    }
    return `${super.buildURL(...args)}.json`;
  }
}
