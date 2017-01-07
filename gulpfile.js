var browserify = require('browserify'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  rename = require('gulp-rename'),
  source = require('vinyl-source-stream'),
  sourceDirectory = './src/js/',
  streamify = require('gulp-streamify'),
  uglify = require('gulp-uglify');

gulp.task('browserify', function() {
  gulp.src(sourceDirectory + 'novation-circuit-midi-cc-connector.js')
    .on('error', function(err) { gutil.log('error', err) })
    .pipe(rename(function(path) {
      var inputName = sourceDirectory + path.basename + path.extname,
        outputName = path.basename + path.extname,
        devOutputName = path.basename + ".min" + path.extname,
        bundle = browserify(inputName).bundle();

      bundle
        .pipe(source(outputName))
        .pipe(gulp.dest('./dist/js/'));

      bundle
        .pipe(source(devOutputName))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./dist/js/'));
    }));
});

gulp.task('watch', function() {
  gulp.watch(sourceDirectory+'*.js', ['browserify']);
});
