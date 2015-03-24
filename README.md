# karma-typescript-coverage
write unit test in typescript and try to generate code coverage



in src directory, there are 2 typescript files which are compiled into a single js file
to do this from command, go to src directory and type:
tsc --out final.js *.ts --target ES5

karma.conf.js - gives coverage based on test files
it appends the src code referenced in the test file and gives coverage on that

karma.conf-2.js - gives coverage based on source files
but somehow the function definition does not come in coverage
you can try using this file and see the diff

this code runs test in phantomjs and chrome
it assumes you have both on your machine

you can add CHROME_BIN as an environment variable and point it to chrome.exe (on windows)

for phantomjs, add phantomjs directory to your PATH variable


karma is required to run the tests and generate coverage
https://www.npmjs.com/package/karma

to install karma globally use npm install -g karma

To run type karma start from the root directory where this code is present.