console.table([null > 0, null == 0, null >= 0]);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │ false  │
│    1    │ false  │
│    2    │  true  │
└─────────┴────────┘
*/
console.table([undefined == 0, undefined === 0, undefined >= 0, undefined < 0]);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │ false  │
│    1    │ false  │
│    2    │ false  │
│    3    │ false  │
└─────────┴────────┘
*/
console.table([
  undefined == null,
  undefined === null,
  undefined >= null,
  undefined < null,
]);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │  true  │
│    1    │ false  │
│    2    │ false  │
│    3    │ false  │
└─────────┴────────┘
*/