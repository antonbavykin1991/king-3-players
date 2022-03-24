import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UiEmberTableComponent extends Component {
  @tracked selectedItems = new Map();

  constructor() {
    super(...arguments);
    const { selectedItems = [] } = this.args;
    this.selectedItems = new Map(selectedItems.map((s) => [s, s]));
  }

  get isAllSelected() {
    const { selectedItems } = this;
    const { data } = this.args;
    let isAllSelected = true;

    data.forEach((item) => {
      if (!selectedItems.has(item)) {
        isAllSelected = false;
      }
    });

    return isAllSelected;
  }

  updateSelectedItems = () => {
    const { selectedItems } = this;
    const { onSelect } = this.args;

    this.selectedItems = selectedItems;

    if (typeof onSelect === 'function') {
      onSelect([...selectedItems].map(([item]) => item));
    }
  };

  @action handleSelect(item) {
    if (this.selectedItems.has(item)) {
      this.selectedItems.delete(item);
    } else {
      this.selectedItems.set(item, item);
    }

    this.updateSelectedItems();
  }

  @action handleSelectAll(items = [], selectionState) {
    if (selectionState) {
      items.forEach((item) => {
        this.selectedItems.set(item, item);
      });
    } else {
      items.forEach((item) => {
        this.selectedItems.delete(item, item);
      });
    }

    this.updateSelectedItems();
  }
}
