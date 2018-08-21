var config = require('./server/config/config')

module.exports = function(grunt) {

    grunt.initConfig({

        watch: {
            livereload: {
                options: { livereload: true },
                // reload if client/dist/ and server/ changes, not reload on client/src/
                files: ['client/dist/**/*', 'server/**/*'],
            },
            es6: {
                files: ['client/src/**/*.js'],
                tasks: ['browserify:dist']
            },
            sass: {
                files: ['client/sass/*.scss'],
                tasks: ['sass'],
            },
        },

        browserify: {  // run task if watching file changes
            dist: {
                // see: https://github.com/jmreidy/grunt-browserify/tree/master/examples
                files: {
                    'client/dist/js/index.bundle.js': 'client/src/index.js',
                    // 'client/dist/js/todo.bundle.js': 'client/src/es6/todo.js',  // add multiple output files
                },
                options: {
                    // see: https://stackoverflow.com/a/41100748
                    transform: [['babelify', { presets: ["@babel/preset-env", "@babel/preset-react"] }]]
                }
            }
        },

        sass: {  // run task if watching file changes
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'client/dist/css/style.css': 'client/sass/style.scss'
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
                    env: { PORT: config.PORT },
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
            tasks: ['nodemon', 'watch', 'sass', 'browserify:dist'],  // tasks run on startup
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