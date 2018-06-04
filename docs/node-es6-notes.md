
## Node ES6 Notes

### My current way to support ES6 on Nodejs
* For node server, use `import` but the modules should be named as `*.mjs`. The option `--experimental-modules` should also be enabled. 
* For client, use babel and browserify to transform to ES5. See these posts: 
    * [Using Babel + grunt to work with ES6](https://stackoverflow.com/a/41100748) from StackOverflow
    * [Setting up Babel 6](https://babeljs.io/blog/2015/10/31/setting-up-babel-6), especially about `babel-preset-env`.
    * [grunt-browserify examples](https://github.com/jmreidy/grunt-browserify/tree/master/examples)


### Why?

Great posts for more details:
1. [ES6 modules, Node.js and the Michael Jackson Solution](https://medium.com/dailyjs/es6-modules-node-js-and-the-michael-jackson-solution-828dc244b8b)
2. [Node.js, TC-39, and Modules](https://hackernoon.com/node-js-tc-39-and-modules-a1118aecf95e) by James M Snell
3. [An Update on ES6 Modules in Node.js](https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c) by James M Snell

There are several important differences between Node.js module (CommonJS) and ES6 module (ESM).

CommonJS module uses `require()`, while ESM uses `import`.
```js
// CommonJS Module
// app.js
const {foo, bar} = require('foobar');
console.log(foo(), bar());
// foobar.js
function foo() {
  return 'bar';
}
function bar() {
  return 'foo';
}
module.exports.foo = foo;
module.exports.bar = bar;


// ES6 Module
// app.js
import {foo, bar} from 'foobar';
console.log(foo(), bar());
// foobar.js
export function foo() {
  return 'bar';
}
export function bar() {
  return 'foo';
}
```
The above examples are from the third post above.

**The major difference is about the evaluation timing:** 

> The variables foo and bar are imported from foobar during the resolution phase — *before* any of the code is actually evaluated. This is possible in the ES6 Module world because the shape of the module is known in advance.
>
> With CommonJS, on the other hand, the shape of a module is not known until after the code is evaluated. What this means is, without making significant changes to the ECMAScript language spec, it will not be possible to use Named Imports from a CommonJS module. 

> Critical to understanding the difference between CommonJS and ES6 modules is the fact that the shape (the API) of a CommonJS module cannot be determined until after the code is evaluated — and even after evaluation, the shape can be mutated by other code at any time.
> 