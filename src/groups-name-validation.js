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

function nameValidation(str) {
  const reg = /^(F[D|E|M])|(f[d|e|m])20(\d{2})(-\d+)?$/;
  if(reg.test(str)){
    return 'Success';
  } return 'Error';
  }

  arrGroups.forEach(item => {
    console.log(`${item}: ${nameValidation(item)}`);
  })

