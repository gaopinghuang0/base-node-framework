## basic-node-boilerplate
Minimum Nodejs boilerplate with auto-reload.

This particular branch `grunt-redux` is for grunt + react-redux. Also, it contains source code from an example: [TODO List](https://redux.js.org/basics/exampletodolist) from Redux. The code structure is similar to [CodePen TODO List](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos)

### Tech Stack
- Express
- Pug template
- SASS
- ES6 (important notes: [node es6](./docs/node-es6-notes.md))
- **React-Redux**
- Grunt

### Getting Started
#### Install dependencies
```bash
$ npm install -g grunt-cli yarn  # grunt and yarn if not installed before
$ yarn install   # the packages can also be used in client code via import
```

#### Run
For development
```sh
grunt
```
For production
```sh
yarn build  # OR: npm run build
yarn start  # OR: npm start
# OR use `forever`
forever start -c "yarn start" ./
```

#### Restart
```sh
# forever list
forever stop 0
ps aux | grep node
kill <pid1> <pid2>
forever start -c "yarn start" ./
```


### Installation Issues, e.g., Permission Error

#### Nodejs and npm

Just install `nvm`, which is a lifesaver for me. See https://github.com/creationix/nvm.

It supports multiple versions of Node and `npm`. Also, the `npm` installed in this way can support `npm install -g pkg`, without worrying about the permission.

#### Sass
Some tools cannot be installed globally, such as Sass, then install locally
```bash
# credit: https://stackoverflow.com/a/38259128
gem install sass --user-install
# Add the path to .bashrc
export PATH="$HOME/.gem/ruby/2.0.0/bin:$PATH"
```

### Bugs
1. On network drive, the `npm install --save` does not update package.json. See [Network install error: "ENOTSUP: operation not supported on socket, fsync"](https://github.com/npm/npm/issues/17066).
