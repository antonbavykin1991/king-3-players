import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export class PART {
  @tracked mode = '';
  @tracked A = 0;
  @tracked I = 0;
  @tracked D = 0;

  get validatedSum() {
    const { A, I, D } = this;
    return A + I + D;
  }

  constructor(data) {
    this.mode = data.mode;
    this.summ = data.summ;
    this.minus = data.minus;
    this.A = data.A;
    this.I = data.I;
    this.D = data.D;
  }

  toJSON() {
    return {
      mode: this.mode,
      summ: this.summ,
      minus: this.minus,
      A: this.A,
      I: this.I,
      D: this.D,
    };
  }
}

export default class ApplicationRoute extends Route {
  @service localStorage;

  model() {
    let dataFromLS = this.localStorage.getData();

    if (dataFromLS) {
      return dataFromLS.map((part) => new PART(part));
    }

    let data = [
      new PART({
        id: 1,
        mode: 'VZ',
        minus: true,
        A: 0,
        I: 0,
        D: 0,
        summ: -20,
      }),
      new PART({
        id: 2,
        mode: 'CH',
        minus: true,
        A: 0,
        I: 0,
        D: 0,
        summ: -16,
      }),
      new PART({
        id: 3,
        mode: 'VL',
        minus: true,
        A: 0,
        I: 0,
        D: 0,
        summ: -20,
      }),
      new PART({
        id: 4,
        mode: 'DM',
        minus: true,
        A: 0,
        I: 0,
        D: 0,
        summ: -20,
      }),
      new PART({
        id: 5,
        mode: 'KING',
        minus: true,
        A: 0,
        I: 0,
        D: 0,
        summ: -24,
      }),
      new PART({
        id: 6,
        mode: '2L',
        minus: true,
        A: 0,
        I: 0,
        D: 0,
        summ: -20,
      }),
      new PART({
        id: 7,
        mode: 'ER',
        minus: true,
        A: 0,
        I: 0,
        D: 0,
        summ: -120,
      }),
      new PART({
        id: 8,
        mode: 'KOZ',
        A: 0,
        I: 0,
        D: 0,
        summ: 40,
      }),
      new PART({
        id: 9,
        mode: 'KOZ',
        A: 0,
        I: 0,
        D: 0,
        summ: 40,
      }),
      new PART({
        id: 10,
        mode: 'KOZ',
        A: 0,
        I: 0,
        D: 0,
        summ: 40,
      }),
      new PART({
        id: 11,
        mode: 'ER',
        A: 0,
        I: 0,
        D: 0,
        summ: 120,
      }),
    ];

    return data;
  }
}
