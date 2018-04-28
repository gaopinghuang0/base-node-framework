## Welcome to base-node-framework
Minimum Nodejs template with auto-reload. Built on the MEAN stack.

### Tech Stack
- MEAN stack (MongoDB, Express, Angularjs, Nodejs)
- Jade template
- SASS
- jQuery
- Bootstrap
- Grunt


### Reset to a git tag
```bash
$ git tag   # list tag_name, e.g., v0.1, ...
# see http://stackoverflow.com/questions/6872223/how-do-i-revert-master-branch-to-a-tag-in-git
$ git checkout master
$ git reset --hard tag_name
```

### Install
```bash
$ npm install   # back-end
$ npm install -g grunt-cli   # grunt command line
$ bower install   # front-end
```

### Run
```bash
$ mongod  # OR: mongod -f mongod.conf
$ grunt
```

### Permission Issues
On remote server with no write permission, just install bower and grunt-cli locally
```bash
$ npm install bower grunt-cli
```

Then add alias in `.bashrc` or `.bash_profile`
```
alias grunt="node_modules/.bin/grunt"
alias bower="node_modules/.bin/bower"
```

Similarly, some tools cannot be installed globally, such Sass, then install locally
```bash
$ gem install -n /path/to/sass sass
# For example: gem install -n ~/.sass sass
```
Then add PATH in `.bashrc`
```
export PATH=$HOME/.sass:/usr/local/bin:$PATH
```
