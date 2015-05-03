var gulp = require('gulp'),
 gutil = require('gulp-util'),
 less = require('gulp-less'),
 path = require('path'),
 clean = require('gulp-clean'),
 uglify = require('gulp-uglify'),
 jslint = require('gulp-jslint'),
 rev = require('gulp-rev'),
 usemin = require('gulp-usemin'),
 uncss = require('gulp-uncss'),
 ngAnnotate = require('gulp-ng-annotate'),
 autoprefixer = require('gulp-autoprefixer'),
 minifyCSS = require('gulp-minify-css');
 var wiredep = require('wiredep').stream;


 var filesToMove = [
        './development/*.html',
        './development/images/**/*.*',
        './development/views/**/*.*',
        './development/styles/main.css'
    ];



//JS Task to minify js and concat
gulp.task('build', function () {
    gulp.src('production/**/*.*', {read: false})
    .pipe(clean());

    gulp.src('./development/styles/main.less')
     .pipe(less({
         paths: [ path.join(__dirname, 'style', 'less') ]
     }))
     .pipe(autoprefixer({
         browsers: ['last 2 versions'],
         cascade: false
     }))
     .pipe(minifyCSS({
         keepBreaks:false,
         advanced: true
     }))
     .pipe(gulp.dest('./development/styles/'))
     .on('error', gutil.log);

     gulp.src('development/index.html')
       .pipe(usemin({
         css:[minifyCSS(), rev()],
         vendor: [uglify(), rev()],
         main: [uglify(), rev()],
       }))
       .pipe(gulp.dest('./production/'))
       .on('error', gutil.log);

       gulp.src(filesToMove, { base: './development' })
         .pipe(gulp.dest('production'))
       .on('error', function (error) {
           console.error(String(error));
       });
});


gulp.task('css', function () {
  gulp.src('./development/styles/main.less')
   .pipe(less({
       paths: [ path.join(__dirname, 'style', 'less') ]
   }))
   .pipe(autoprefixer({
       browsers: ['last 2 versions'],
       cascade: false
   }))
   .pipe(minifyCSS({
       keepBreaks:false,
       advanced: true
   }))
   .pipe(gulp.dest('./development/styles/'))
   .on('error', gutil.log);
});


gulp.task('default', function() {
  // place code for your default task here
});
