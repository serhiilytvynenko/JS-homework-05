'use strict';
const arrGroups = [
  'FE2021-5',
  'Fe2020-2',
  'FD2021',
  'fD2022-1',
  'FE2020-3',
  'FD2020/2',
  'FU2022-333',
  'fe2021-3',
  'FD2020$5',
  'FE2008-52',
  'Fm2008-23',
  'FM2022-1',
];

function nameValidation(arr) {
  const reg = /([a-z]{2}|[A-Z]{2})20\d{2}.*/;
  const results = [];

  for (const item of arr) {
    if (reg.test(item)) {
      results.push(`${item} success`);
    } else {
      results.push(`${item} error`);
    }
  }

  return results;
}

console.log(nameValidation(arrGroups));
