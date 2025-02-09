const { series, parallel, src, dest } = require('gulp');

const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

// gulp.task('scripts', function() {
//   return gulp.src('./lib/*.js')
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest('./dist/'));
// });
function concatstyles(){
  return src('app/**/*.css')
  .pipe(concat('all.css'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(dest('dist/concat'));
}

function mincss(){
  return src('app/style/style.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(dest('test/style/'));
}
// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  console.log('Clean task');
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  console.log('Build task');
  cb();
}

// function test(cb) {
//   // body omitted
//   console.log('Test task');
//   cb();
// }
function test() {
  // return src('app/index.html').pipe(dest('dist/'));
  // return src('app/*.html').pipe(dest('dist/'));
  // return src('app/style/*.css').pipe(dest('dist/'));
  // return src('app/**/*.css').pipe(dest('dist/'));
  return src(['app/**/*.css', 'app/*.html', '!app/**/*.scss']).pipe(dest('dist/'));
}

exports.test = test;
exports.build = build;
exports.concatstyles = concatstyles;
exports.mincss = mincss;
exports.default = series(clean, build, test);
// exports.default = parallel(clean, build, test);