var config = require('./server/config/config')

module.exports = function(grunt) {

    grunt.initConfig({

        watch: {
            options: {
                livereload: true,
            },
            pug: {
                files: ['server/views/**'],
            },
            es6: {
                options: {
                    livereload: false
                },
                files: ['client/src/**/*.js'],
                tasks: ['browserify:dist']
            },
            js: {
                files: ['client/dist/js/*.js'],
            },
            sass: {
                options: {
                    livereload: false
                },
                files: ['client/src/sass/*.scss'],
                tasks: ['sass'],
            },
            css: {
                files: ['client/dist/css/*.css'],
            }
        },

        browserify: {  // task run after watched file changes
            dist: {
                // see: https://github.com/jmreidy/grunt-browserify/tree/master/examples
                files: {
                    'client/dist/js/client.js': 'client/src/es6/client.js'
                },
                options: {
                    transform: ['babelify']
                }
            }
        },

        sass: {  // task run after watched file changes
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'client/dist/css/style.css': 'client/src/sass/style.scss'
                }
            }
        },

        nodemon: {
            dev: {
                script: 'server.mjs',  // .mjs not .js for ES6
                options: {
                    args: [],
                    nodeArgs: ['--experimental-modules'],  // enable ES6 for node@8.0+
                    callback: function (nodemon) {
                        nodemon.on('log', function (event) {
                            console.log(event.colour);
                        });
                    },
                    env: {
                        PORT: config.PORT
                    },
                    cwd: __dirname,
                    ignore: ['node_modules/**', 'README.md', '.DS_Store'],
                    ext: 'js,mjs,coffee',
                    watch: ['server.mjs', './server/'],  // only restart on server code changes
                    delay: 1000,
                    legacyWatch: true
                }
            },
        },

        concurrent: {
            tasks: ['nodemon', 'watch'],  // tasks run on startup
            options: {
                logConcurrentOutput: true
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-concurrent');

    // do not abort when error
    grunt.option('force', true);
    grunt.registerTask('default', ['concurrent']);
}