const gulp = require("gulp");
const uglify = require("gulp-uglify-es").default;
const browserSync = require('browser-sync').create();
const plugs = require('gulp-load-plugins')({ lazy: false });
const php = require('gulp-connect-php');
const cleanCSS = require('gulp-clean-css');
var imageminMozjpeg = require('imagemin-mozjpeg');
var imageminPngquant = require('imagemin-pngquant');
const imageminZopfli = require('imagemin-zopfli');

// -- FILE PATHS

const paths = {
  sass: {
    src: 'src/css/**/*.sass',
    dist: 'dist/assets/css'
  },
  php: {
    src: 'src/**/*.php',
    dist: 'dist/'
  },
  js: {
    src: 'src/js/**/*.js',
    dist: 'dist/assets/js'
  },
  img: {
    src: 'src/img/*',
    dist: 'dist/assets/img'
  }
}


// -- FILE TASKS

gulp.task('sass', () => {
  return gulp.src(paths.sass.src)
    .pipe(plugs.sass().on('error', plugs.sass.logError))
    .pipe(plugs.autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.sass.dist));
});

gulp.task('scripts', () => {
  return gulp.src(paths.js.src)
    .pipe(plugs.babel({ presets: ['env'] }))
    .pipe(uglify())
    .pipe(plugs.concat('app.js'))
    .pipe(gulp.dest(paths.js.dist));
});

gulp.task('image-min', async () => {
  await plugs.imagemin([paths.img.src], paths.img.dist, {
    use: [
      imageminMozjpeg({ quality: 90 }),
      imageminPngquant({
        speed: 10,
        quality: 90
      }),
      imageminZopfli({
        more: true
        // iterations: 50 // very slow but more effective
      }),
      plugs.imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]
  })
});

gulp.task('php', () => {
  return gulp.src(paths.php.src).pipe(gulp.dest(paths.php.dist))
})

// -- MAIN TASKS

gulp.task('browser-sync', () => {
  php.server({
    port: 8080,
    base: './dist',
    debug: false
  }, function () {
    browserSync.init({
      proxy: '127.0.0.1:8080/',
      notify: false
    });
  });

  gulp.watch(paths.js.src, gulp.series("scripts")).on('change', browserSync.reload);
  gulp.watch(paths.img.src, gulp.series("image-min")).on('change', browserSync.reload);
  gulp.watch(paths.sass.src, gulp.series("sass")).on('change', browserSync.reload);
  gulp.watch(paths.php.src, gulp.series("php")).on('change', browserSync.reload);
});

const build = gulp.series('sass', 'scripts', 'image-min', 'php', 'browser-sync');

gulp.task('default', build);
gulp.task('prod', build); // add minify scripts