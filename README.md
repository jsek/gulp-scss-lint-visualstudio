Stylish reporter for gulp-scss-lint, compatible with Visual Studio

[![licence](https://img.shields.io/npm/l/gulp-scss-lint-visualstudio.svg)](https://github.com/jsek/gulp-scss-lint-visualstudio/blob/master/LICENSE)
[![npm version](http://img.shields.io/npm/v/gulp-scss-lint-visualstudio.svg)](https://npmjs.org/package/gulp-scss-lint-visualstudio) 
[![downloads](https://img.shields.io/npm/dm/gulp-scss-lint-visualstudio.svg)](https://npmjs.org/package/gulp-scss-lint-visualstudio) 

* [Overview](#overview)
* [Installation](#installation)
* [Usage](#usage)

## Overview

Example console output:

![screenshot](images/screenshot_1.0.0.png)

## Installation

```
npm install --save gulp-scss-lint-visualstudio
```

## Usage

``` javascript
var gulp       = require('gulp'),
    scssLint   = require('gulp-scss-lint'),
    vsReporter = require('gulp-scss-lint-visualstudio');
 
gulp.task('vs-scss-lint', function()
{
    gulp.src('/scss/*.scss')
        .pipe( scssLint({ customReport: vsReporter() }) )
});
```

Alternative usage for errors only:

``` javascript
    gulp.src('/scss/*.scss')
        .pipe( scssLint({ customReport: vsReporter({errorsOnly: true}) }) )
```

Example integration with Visual Studio (Modification in `csproj` file):

```xml
  <Target Name="ScssLint">
    <Exec Command="gulp vs-scss-lint"/>
  </Target>
  
  <PropertyGroup>
    <BuildDependsOn>
      ScssLint;
      $(BuildDependsOn);
    </BuildDependsOn>
  </PropertyGroup>
```