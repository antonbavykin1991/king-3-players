import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service localStorage;

  @tracked columns = ['mode', 'A', 'I', 'D', 'summ'];

  @action onInput(dataItem, column, e) {
    let value = e.target.value * 1;

    if (value >= 0) {
      value = e.target.value * (dataItem.minus ? -1 : 1);
    }

    dataItem[column] = value;
    this.localStorage.setData(this.model);
  }

  @action clear() {
    this.localStorage.clearData();
    window.location.reload();
  }

  get result() {
    const { model } = this;

    return model.reduce((container, row) => {
      if (!container.A) {
        container.A = 0;
      }

      container.A = container.A + row.A;

      if (!container.I) {
        container.I = 0;
      }

      container.I = container.I + row.I;

      if (!container.D) {
        container.D = 0;
      }

      container.D = container.D + row.D;

      container.mode = 'TOTAL';

      container.validatedSum = container.A + container.I + container.D;
      container.summ = 0;
      container.id = 'total';
      return container;
    }, {});
  }
}
