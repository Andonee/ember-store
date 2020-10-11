import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ApplicationAppEaderComponent extends Component {
  @tracked isShowingNav = false;

  @action toggleNav() {
    this.isShowingNav = !this.isShowingNav;
  }
}
