### Installation Issues, e.g., Permission Error

#### Nodejs and npm

Just install `nvm`, which is a lifesaver for me. See https://github.com/creationix/nvm.

It supports multiple versions of Node and `npm`. Also, the `npm` installed in this way can support `npm install -g pkg`, without worrying about the permission.

#### Sass
Some tools cannot be installed globally, such as Sass, then install locally

Option1: use npm (recommended)
```bash
npm install -g sass  # this is only valid if we install nodejs via nvm as above
```

Option2: use gem (not recommended)
```bash
# credit: https://stackoverflow.com/a/38259128
gem install sass --user-install
# Add the path to .bashrc
export PATH="$HOME/.gem/ruby/2.0.0/bin:$PATH"
```
