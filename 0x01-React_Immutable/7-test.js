import areMapsEqual from './7-equality.js';

const map1 = (
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }
);
const map2 = (
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }
);

console.log(areMapsEqual(map1, map2));
