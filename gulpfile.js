const gulp = require('gulp')
const babel = require('gulp-babel')

gulp.task('build', () => gulp.src('src/**')
  .pipe(babel({presets: ['es2015']}))
  .pipe(gulp.dest('dist'))
)

gulp.task('watch', ['build'], () => gulp.watch('src/**', ['build']))
