import * as module1 from './module1';
import * as module2 from './module2';

const ex1: module1.Test = {
  name: 'hi',
  name2: 'error',
};
const ex2: module2.Test = {
  name: 'error',
  name2: 'hi'
};
module1.default();