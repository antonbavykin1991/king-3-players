import { helper } from '@ember/component/helper';

export default helper(function mapHas([mapData, obj]) {
  return mapData.has(obj);
});
