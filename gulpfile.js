var
	browserSync = require("browser-sync"),
	del					= require("del"),
	gulp 				= require("gulp"),
	gulpIf			= require("gulp-if"),
	runSequence	= require("run-sequence"),
	sass 				= require("gulp-sass"),
  uglify      = require("gulp-uglify"),
	useref			= require("gulp-useref");

//==============================
// Development tasks
//==============================
gulp.task("sass-dev", function() {
	return gulp.src("src/styles/scss/*.scss")
		.pipe(sass({outputStyle:"compressed"}))
		.pipe(gulp.dest("src/styles"))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task("browserSync", function() {
	browserSync.init({
		server: {
			baseDir: "src"
		}
	})
});

gulp.task("watch", ["browserSync", "sass-dev"], function() {
	gulp.watch("src/*.html", browserSync.reload);
	gulp.watch("src/styles/scss/**/*.scss", ["sass-dev"]);
	gulp.watch("src/scripts/*.js", browserSync.reload);
});

//==============================
// Building tasks
//==============================
gulp.task("clean:dist", function() {
	return del.sync("dist");
});

gulp.task("sass-prod", function() {
	return gulp.src("src/styles/scss/*.scss")
		.pipe(sass({outputStyle:"compressed"}))
		.pipe(gulp.dest("dist/styles"))
});

gulp.task("useref", function() {
	return gulp.src("src/index.html")
		.pipe(useref({ noconcat: false }))
    // .pipe(gulpIf("*.js", uglify()))
		.pipe(gulp.dest("dist"))
});

gulp.task("copyDemoFiles", function() {
  return gulp.src("src/scripts/*.js")
    .pipe(gulp.dest("dist/scripts"))
});

//==============================
// Global tasks
//==============================
gulp.task("serve", function(cb) {
	runSequence(["sass-dev", "browserSync", "watch"], cb);
});

gulp.task("build", function(cb) {
	runSequence("clean:dist", ["sass-prod", "useref", "copyDemoFiles"], cb)
});
