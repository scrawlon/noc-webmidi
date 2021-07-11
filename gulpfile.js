const browserify = require('browserify');
const gulp = require('gulp');
const log = require('fancy-log');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const terser = require('gulp-terser');

const sourceDirectory = './src/js/';

gulp.task('browserify', function () {
  gulp.src(sourceDirectory + 'noc-webmidi.js')
    .on('error', function (err) { log('error', err) })
    .pipe(rename(function (path) {
      var inputName = sourceDirectory + path.basename + path.extname;
      var outputName = path.basename + ".min" + path.extname;
      var bundle = browserify(inputName).bundle();

      bundle
        .pipe(source(outputName))
        // .pipe(terser())
        .pipe(gulp.dest('./dist/js/'));
    }));
});

gulp.task('package', function () {
  return browserify('./src/js/index.js', { standalone: 'nocWebMidi' })
    .bundle()
    .pipe(source('index.js'))
    // .pipe(terser())
    .pipe(gulp.dest('./lib'));
});

gulp.task('watch', function () {
  gulp.watch(sourceDirectory + '**/*.js', ['browserify', 'package']);
});
