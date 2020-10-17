import Component from "@glimmer/component";

export default class ProductsProductItemComponent extends Component {
  constructor(...args) {
    super(...args);
    console.log(this.model);
  }
}
