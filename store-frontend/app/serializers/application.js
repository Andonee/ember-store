import JSONSerializer from "@ember-data/serializer/json";

export default class ApplicationSerializer extends JSONSerializer {
  primaryKey = "_id";
}
