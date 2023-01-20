import { getListObject, addElementToList } from './3-list.js';

const names = getListObject(['Amanda', 'Larry']);

console.log(getListObject(names));

console.log(addElementToList(names, 'Jason'));
