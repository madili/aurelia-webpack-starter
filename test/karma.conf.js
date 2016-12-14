'use strict';

const path = require('path');
require('babel-register')({ only: "*.babel.js" });

module.exports = function (config) {
    config.set({

        /**
         * Base path that will be used to resolve all patterns (e.g. files, exclude)
         */
        basePath: __dirname,

        /**
         * Frameworks to use
         * 
         * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
         */
        frameworks: ['jasmine'],

        /**
         * List of files to exclude
         */
        exclude: [],

        /**
         * List of files / patterns to load in the browser
         * 
         * We are building the test enviroment in ./spec-bundle.js
         */
        files: [
            { pattern: 'spec-bundle.js', watched: false }
        ],

        /**
         * Preprocess matching files before serving them to browser
         * available preprocess: https://npmjs.org/browse/keyword/karma-preprocessor
         */
        preprocessors: {
            'spec-bundle.js': ['coverage', 'webpack', 'sourcemap']
        },

        webpack: require('../webpack.config.babel'),

        coverageReporter: {
            reporters: [
                {
                    type: 'json',
                    subdir: '.',
                    file: 'coverage-final.json'
                }
            ]
        },

        remapIstanbulReporter: {
            src: path.join(__dirname, 'coverage/coverage-final.json'),
            reports: {
                html: path.join(__dirname, 'coverage/')
            },
            timeoutNotCreated: 1000,
            timeoutNoMoreFiles: 1000
        },

        /**
         * Webpack please don´t spam the console when running in karma!
         */
        webpackServer: { noInfo: true },

        /**
         * Test results reporter ti use
         * 
         * possible values: 'dots', 'progress'
         * available reporters: https://npmjs.org/browse/keyword/karma-reporter
         */
        reporters: ['mocha', 'coverage', 'karma-remap-istanbul'],

        /**
         * Web server port
         */
        port: 9876,

        /**
         * Enable / disable colors in the output (reporters and logs)
         */
        colors: true,

        /**
         * Level of logging
         * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
         */
        logLevel: config.LOG_INFO,

        /**
         * Enable / disable watching file and executing tests whenever any file changes
         */
        autoWatch: false,

        /**
         * Start these browsers
         * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
         */
        browsers: [
            'Chrome',
        ],

        /**
         * Continuous Integration mode
         * if true, karma captures browsers, runs the tests and exits
         */
        singleRun: true
    });
};