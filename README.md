## basic-node-boilerplate
Minimum Nodejs boilerplate with auto-reload.

### Tech Stack
- Express
- Pug template
- SASS
- ES6 (important notes: [node es6](./docs/node-es6-notes.md))
- Grunt

### Getting Started
#### Install
```bash
$ npm install -g grunt-cli yarn  # grunt and yarn if not installed before
$ yarn install   # the packages can also be used in client code via import
```

#### Run
```bash
$ grunt
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
