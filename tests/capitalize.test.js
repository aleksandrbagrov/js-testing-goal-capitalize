// нажмите кнопку run чтобы запустить тесты
// попробуйте изменять код функции / тестов, запуская проверки заново

import { strict as assert } from 'assert';

import { capitalize } from '../src/capitalize.js';

assert.equal(capitalize(''), '');
// Первый параметр actual – то, что пришло
// Второй параметр expected – то, что ожидает тест
// Правильный порядок аргументов имеет большое значение при анализе ошибки
assert.equal(capitalize('hello'), 'Hello');

console.log('Все тесты пройдены!');
