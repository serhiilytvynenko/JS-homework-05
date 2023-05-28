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
  const reg = /([A-Z]{2}|[a-z]{2})(20)(\d{2})(.*)/;

  for (let i = 0; i < arr.length; i++) {
    if (reg.exec(arr[i]) !== null) {
      console.log(`${arr[i]} success`);
    } else {
      console.log(`${arr[i]} error`);
    }
  }
}
nameValidation(arrGroups);

//Второй вриант без clg внутри функции

// function nameValidation(arr) {
//   const reg = /([A-Z]{2}|[a-z]{2})(20)(\d{2})(.*)/;
//   const results = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (reg.exec(arr[i]) !== null) {
//       results.push(`${arr[i]} success`);
//     } else {
//       results.push(`${arr[i]} error`);
//     }
//   }

//   return results;
// }

// console.log(nameValidation(arrGroups));
