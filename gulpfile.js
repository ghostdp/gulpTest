// nodeJS模块

var gulp = require('gulp');
var concat = require('gulp-concat');
var amdOptimize = require("amd-optimize");  
var babel = require("gulp-babel");
var less = require('gulp-less');

gulp.task('default',['lessTask','rjsConcat'], function() {
  	console.log('gulp任务');
});

gulp.task('concat', function() {
  	console.log('gulp合并任务');
	gulp.src('src/*.js').pipe(concat('c.js')).pipe(gulp.dest('dist'));
});

gulp.task('rjsConcat', function() {
  	console.log('gulp之requireJS合并任务');
	gulp.src('src/es5/module_*.js').pipe(amdOptimize("module_c")).pipe(concat('module_c.js')).pipe(gulp.dest('dist'));
});

gulp.task('babelTask',function() {
  	console.log('es6转成es5');
	gulp.src('src/module_*.js').pipe(babel({
        presets: ['es2015']
    })).pipe(gulp.dest('src/es5'));
});

gulp.task('lessTask',function() {
  	console.log('less转成css');
	gulp.src('src/style.less').pipe(less()).pipe(gulp.dest('dist'));
});