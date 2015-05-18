
/*
 * @fileoverview Custom reporters for gulp-scsslint
 * @author J-Sek
 */

/*
 * Emit error formatted for Visual Studio on first error
 * Note: Intentially ignore warnings 
 * Usage: Inline - intended for 'customReportField'
 */
var extend, getReporter;

extend = require('util')._extend;

getReporter = function(opts) {
  var print;
  if (opts == null) {
    opts = {};
  }
  opts = extend(opts);
  print = function(file, stream) {
    var i, issue, len, message, place, ref;
    if ((opts.errorsOnly && file.scsslint.errors > 0) || file.scsslint.issues > 0) {
      ref = file.scsslint.issues;
      for (i = 0, len = ref.length; i < len; i++) {
        issue = ref[i];
        if (opts.errorsOnly && issue.severity !== 'error') {
          continue;
        }
        place = "(" + issue.line + "," + issue.column + ")";
        message = "" + file.path + place + ": ScssLint " + issue.severity + ": (" + issue.linter + ") " + issue.reason;
        process.stderr.write(message + '\n');
      }
      if (!opts.printAll) {
        return process.exit(1);
      }
    }
  };
  return print;
};

module.exports = getReporter;
