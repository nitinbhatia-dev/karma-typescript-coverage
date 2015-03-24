// Karma configuration
// Generated on Mon Mar 23 2015 14:56:53 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      'test-main.js',
       {pattern: 'src/*.js', included: true},
      {pattern: 'src/*.ts', included: false},
      {pattern: 'test/*Test.ts', included: false}
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/*Test.ts':['typescript','coverage']//,
        //'src/*.ts':['typescript','coverage']//,
        //'src/*.js':['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],

//      typescriptPreprocessor: {
//          options: {
//                sourceMap: true,
//                  target: 'ES5'//, // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
////                module: 'commonjs', // (optional) Specify module code generation: 'commonjs' or 'amd'
////                noImplicitAny: false, // (optional) Warn on expressions and declarations with an implied 'any' type.
////                noResolve: true, // (optional) Skip resolution and preprocessing.
////                removeComments: true // (optional) Do not emit comments to output.
//          }
//            ,
////            //transforming the filenames
//            transformPath: function (path) {
//                return path.replace(/\.ts$/, '.js');
//            }
//      },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS', 'Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

      plugins: [
          'karma-jasmine',
          'karma-chrome-launcher',
          'karma-phantomjs-launcher',
          'karma-typescript-preprocessor',
          'karma-requirejs',
          'karma-coverage'
          //require('../../../node_modules/karma-typescript-preprocessor/index.js')
      ]
  });
};
