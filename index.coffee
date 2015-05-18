###
 * @fileoverview Custom reporters for gulp-scsslint
 * @author J-Sek
###

###
 * Emit error formatted for Visual Studio on first error
 * Note: Intentially ignore warnings 
 * Usage: Inline - intended for 'customReportField'
###

extend = require('util')._extend

getReporter = (opts = {}) ->

    opts = extend opts

    print = (file, stream) ->
        if file.scsslint.errors > 0 or not opts.errorsOnly

            for issue in file.scsslint.issues
                if (opts.errorsOnly and issue.severity isnt 'error') then continue
                place = "(#{issue.line},#{issue.column})"
                message = "#{file.path}#{place}: ScssLint #{issue.severity}: #{issue.reason}"
                process.stderr.write(message+'\n')

            unless opts.printAll
                process.exit 1
            
    return print

module.exports = getReporter