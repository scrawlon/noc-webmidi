const { task, series, src, dest, watch } = require('gulp');
const browserify = require('browserify');
const log = require('fancy-log');
// const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
// const terser = require('gulp-terser');

const sourceDirectory = './src/js/';

task('buildDist', function () {
  return src(sourceDirectory + 'noc-webmidi.js')
    .on('error', function (err) { log('error', err) })
    .pipe(rename(function (path) {
      var inputName = `${sourceDirectory}${path.basename}${path.extname}`;
      var outputName = `${path.basename}.min${path.extname}`;
      var bundle = browserify(inputName).bundle();
      log({ inputName, outputName })

      return bundle
        .pipe(source(outputName))
        // .pipe(terser())
        .pipe(dest('./dist/js/'));
    }));
});

task('buildLib', function () {
  return browserify('./src/js/index.js', { standalone: 'nocWebMidi' })
    .bundle()
    .pipe(source('index.js'))
    // .pipe(terser())
    .pipe(dest('./lib'));
});

task('watch', function () {
  watch(['./src/js/**/*.js'], series('buildLib'));
});

// function bundleLib() {
//   return series('buildDist', 'buildLib');
// }

// watch(['./src/js/**/*.js'], series('buildLib'));

// exports.watch = bundleLib;