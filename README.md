# Getting started with string concat

## Installation

npm install array-string-concat

## usage

import { stringConcat } from 'array-string-concat'

### Concat array of strings

const concatListOfString = () => {
let a = ["a", "b", "c"]
let delimeter = " "
return stringConcat({ fieldset: a, delimeter: delimeter })//a b c
}

const concatListOfString = () => {
let a = ["a", "b", "c"]
let delimeter = "-"
let c=stringConcat({ fieldset: a, delimeter: delimeter }) //a-b-c
}

const concatListOfString = () => {
let a = ["a", "b", null]
let delimeter = "-"
let c=stringConcat({ fieldset: a, delimeter: delimeter }) //a-b
}

### Concat by reference object

const concatStringFromObj = () => {
let a = { a: 'abc', b: 'def' }
let fieldset = ['a', 'b']
return stringConcat({ fieldset: fieldset, delimeter: "-", refObj: a })//abc def
}
