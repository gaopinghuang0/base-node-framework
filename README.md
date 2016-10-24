## Welcome to base-node-framework
Minimum Nodejs template with auto-reload. Built on the MEAN stack.

### Tech Stack
- MEAN stack (MongoDB, Express, Angularjs, Nodejs)
- Jade template
- SASS
- jQuery
- Bootstrap
- Grunt

### Install
```bash
npm install  #back-end
bower install  #front-end
```

### Run
```shell
npm install -g grunt-cli
mongod
grunt
```

### On remote server with no global write access
Install bower and grunt-cli locally
```shell
npm install bower grunt-cli
```

Then add alias in .bashrc or .bash\_profile
```
alias grunt="node_modules/.bin/grunt"
alias bower="node_modules/.bin/bower"
```

### Other issues
If some tools cannot be installed globally, such Sass.
```
gem install -n /path/to/sass sass
# For example: gem install -n ~/.sass sass
```
Then add PATH in .bashrc
```
export PATH=$HOME/.sass:/usr/local/bin:$PATH
```
