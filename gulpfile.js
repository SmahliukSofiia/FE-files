const gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require("gulp-cssnano"),
    prefix = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin');
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    sourcemaps  = require('gulp-sourcemaps'),
    concat = require('gulp-concat');

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError)) 
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('concat', function() {
    return gulp.src(['./dist/styles/normalize.css', './dist/styles/main.min.css'])
        .pipe(concat('style.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/'));
})

gulp.task('scripts', function () {
    return gulp.src('src/js/**/*.js') 
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js')); 
});

gulp.task('imgs', function () {
    return gulp.src('src/images/*.+(jpg|jpeg|png|gif)')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest('dist/images'))
});

gulp.task('watch', function() {
    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/sass/*.scss', gulp.series('sass'));
    gulp.watch('src/js/*.js', gulp.series('scripts'));
    gulp.watch('src/images/*.+(jpg|jpeg|png|gif)', gulp.series('imgs'));
})