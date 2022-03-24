import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return [
      {
        id: 1,
        firstName: 'Anton',
        lastName: 'Bavykin',
        type: 'visitor',
        price: '100$',
        tax: '2$',
      },
      {
        id: 2,
        firstName: 'Tom',
        lastName: 'Bavykin',
        type: 'visitor',
        price: '150$',
        tax: '3$',
      },
      {
        id: 3,
        firstName: 'John',
        lastName: 'Bavykin',
        type: 'visitor',
        price: '200$',
        tax: '5$',
      },
    ];
  }
}
