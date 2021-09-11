/* Functions:units of computation.take input and produce output
*/
//function declarations-(Hoisted)it works even if fucntion is called before definig it.

function find(x, y) {
    return x + y
}
console.log(find(2, 5))

/*function invocation can be done with few or more parametrss than defined
*/
//different ways of function invocation
const b = new find()
const c = find.call(null, 2, 3)
const d = find.apply(null, [2, 4, 4])

//function Expression-not hoisted

const compute = function (x, y) {
    return x + y
}
const y = compute(3, 4)
console.log(y)

//IIFE - immediately invoked function expression
const h = (function (x, y) {
    return x + y
})(2, 6)
console.log(h)

//Arrow functions-faster and clean-implicit return
//this is used in arrow whwn it inherits something from other function

const sum = (x, y) => x + y
console.log(sum(1, 1))

//functions are object
const person = {
    name: 'bhavyatha',
    age: 21

}
function displayName() {
    return this.name
}

const q = displayName.call(person)
console.log(q)

/*Referential transparency:expression which can be reduced or resolved without affecting the working of program .
each time the function is called thhe output should be same.
value:something that measures or contains something,transparent
*/
const exp1 = 1 + 4
const exp2 = exp1 + 6
console.log(exp1)

/*side effects-if the computation effects the outside(outside computation)
 eg:console.log
 */

//not pure-fucntion changes the output
const today = () => new Date()
console.log(today())

//slice fucntion -pure-each time its called it reurns the same value
const arr = [0, 1, 2, 3]
const ar = arr.slice(1, 3)
console.log(ar)

//splice - not pure -each time its called returns different output
const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 0]
arr1.splice(1, 3)
arr1.splice(1, 3)
arr1.splice(1, 3)
console.log(arr1)

//Evaluation of expresssion:rewritting given expression based on certain rules.
const l = 1 + 8
const w = 3 + 4
const area = (l, w) => l + w
console.log(area(l, w))

/*memoization:storing result of function based on previous usage
optimize,for future invocation of same function,cache
only for pure functions
*/
//nano-memoization
const add = (a, b) => a + b

console.log(add(2, 7))
console.log(add(2, 19))
const cache = {
    "2 7": 9
}

/* Higher-Order functions-
1.can be passed as input to other functions
2.can be returned from other funcction as output
*/
//passing function as input
const profile = fn => {
    console.log(`started at ${Date()}`);
    const result = fn();
    console.log(`Computing :${result}`)
    console.log(`End at :${Date()}`)
}
const com = (x, y) => x + y
profile(com)

//Abstraction -hide details

const isGreater = (num) => num > 10
console.log(isGreater(11))

//sorting numbers
//sort method- abstracts the way of comparing each element

const array = [1, 11, 2, 33, 22]
const toOrder = (a, b) => a - b
console.log(array.sort(toOrder))

/*Predicate function-returns boolean values*/
// const isGreater =(num)=>num>10
// console.log(isGreater(11))
//example - const isEmpty,isNull....

//Filter() Array Method
const peep = [
    { name: 'bhavyatha', age: 21 },
    { name: 'bhavya', age: 21 },
    { name: 'Raaj', age: 34 },
    { name: 'Priya', age: 13 },
]
const result = peep.filter(res => res.name === 'Priya')
console.log(result)

//map() Array method -produce array of same size with changes given in map function
const number = [2, 5, 6, 3, 6, 6]
const n = number.map(num => num + 1)
console.log(n)
//reduce() Array method- recombine given array into single value based on some condition
const add1 = (a, b) => a + b
const sub = number.reduce(add1, 0)
//reduce tabkes a function,initial value as argument
console.log(sub)

const slices = [
    [1, 2, 3], [2, 3, 4, 5], [1], [5, 6]
]
const search = (s, t) =>{
return(s.length > t.length )? s: t }

    const r = slices.reduce(search, [])
    console.log(r)