import Service from '@ember/service';

export default class LocalStorageService extends Service {
  setData(data) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  getData() {
    try {
      return JSON.parse(localStorage.getItem('data'));
    } catch (e) {
      return [];
    }
  }

  clearData() {
    localStorage.clear();
  }
}
