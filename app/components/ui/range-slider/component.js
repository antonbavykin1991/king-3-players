import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default class ExampleComponent extends Component {
  @tracked min = this.args.min || 0;
  @tracked max = this.args.max || 100;

  @tracked first = this.args.minValue || this.args.min || 0;
  @tracked last = this.args.maxValue || this.args.max || 100;

  get sliderStyles() {
    const { first, last, min, max } = this;
    const step = 100 / (max - min);
    const left = (Math.min(first, last) - min) * step;
    const width = Math.abs(first - last) * step;

    return htmlSafe(`--width: ${width}%; --left: ${left}%;`);
  }

  get firstLabelStyles() {
    const { first, last, min, max } = this;
    const step = 100 / (max - min);
    const left = (Math.min(first, last) - min) * step;

    return htmlSafe(`--left: ${left}%;`);
  }

  get lastLabelStyles() {
    const { first, last, min, max } = this;
    const step = 100 / (max - min);
    const left = (Math.min(first, last) - min) * step;
    const width = Math.abs(first - last) * step;

    return htmlSafe(`--left: ${left + width}%;`);
  }

  get exportMin() {
    const { first, last } = this;
    return Math.min(first, last);
  }

  get exportMax() {
    const { first, last } = this;
    return Math.max(first, last);
  }

  @action handleInput(key, e) {
    this[key] = e.target.value * 1;
  }

  @action handleChange() {
    const { exportMin, exportMax } = this;

    console.log(exportMin, exportMax);
  }
}
