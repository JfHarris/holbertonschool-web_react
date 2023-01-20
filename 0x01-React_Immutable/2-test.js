import accessImmutableObject from './2-nested.js';

const example = accessImmutableObject(
  {
    name: {
      first: 'Guillaume',
      last: 'Salva',
    },
  },
  ['name', 'first']
);

console.log(example);
