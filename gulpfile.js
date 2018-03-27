var browserify = require('browserify'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  rename = require('gulp-rename'),
  source = require('vinyl-source-stream'),
  sourceDirectory = './src/js/',
  streamify = require('gulp-streamify'),
  uglify = require('gulp-uglify');

gulp.task('browserify', function() {
  gulp.src(sourceDirectory + 'noc-webmidi.js')
    .on('error', function(err) { gutil.log('error', err) })
    .pipe(rename(function(path) {
      var inputName = sourceDirectory + path.basename + path.extname,
        outputName = path.basename + ".min" + path.extname,
        bundle = browserify(inputName).bundle();

      bundle
        .pipe(source(outputName))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./dist/js/'));
    }));
});

gulp.task('package', function() {
    return browserify('./src/js/index.js', { standalone: 'nocWebMidi' }).bundle() // .bundle is a browserify function
    .pipe(source('index.js'))    // Pass to output using vinyl-source-stream
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./lib'));
});

gulp.task('watch', function() {
  gulp.watch(sourceDirectory+'*.js', ['browserify', 'package']);
});
