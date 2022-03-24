import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked columns = ['id', 'name', 'type', 'actions'];
  @tracked selectedItems = this.model;

  @action removeItem(id) {
    this.model = this.model.filter((item) => item.id !== id);
  }

  @action handleSelect(items) {
    console.log(items);
  }
}
