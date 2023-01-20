import { concatElements, mergeElements } from './5-merge.js';

const array1 = ['Amanda', 'Larry'];
const array2 = ['Jason', 'Amanda'];

const list1 = {
  1: 'joe',
  2: 'john',
};
const list2 = {
  3: 'tim',
  4: 'cameron',
};

const concated = concatElements(array1, array2);
console.log(concated);
console.log(concated.toJS());

const merged = mergeElements(list1, list2);
console.log(merged);
console.log(merged.toJS());
