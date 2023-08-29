/*PRIMITVE - works by value
Number
BigInt
String
Boolean
null
undefined
Symbol
*/

/* NON_PRIMITIVE - works by reference
Array, Object, Functions
*/

console.table([typeof undefined, typeof null]);
/*
┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    0    │ 'undefined' │
│    1    │  'object'   │
└─────────┴─────────────┘
*/

console.log(Symbol("123") === Symbol("123")); //false
/* ------------------------------------------------------------

STACK(Primitive - by value) 
->A Copy is passed to the variable
copying the values, swapping the values


Heap(Non-Primitive -by reference)
->item refers to the actual value, not the actual value.
working with Objects
*/