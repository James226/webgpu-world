import 'jasmine-core/lib/jasmine-core/jasmine.css'

import 'jasmine-core/lib/jasmine-core/jasmine-html.js'
import 'jasmine-core/lib/jasmine-core/boot0.js'
import 'jasmine-core/lib/jasmine-core/boot1.js'

// @ts-ignore
const tests = require.context(
    "./", // context folder
    true, // include subdirectories
    /.test.(j|t)s$/ // RegExp
);

const testFiles = tests.keys();
for (let test in testFiles) {
    tests(testFiles[test]);
}
