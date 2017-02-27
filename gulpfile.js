var browserify = require("browserify");
var gulp = require("gulp");
var babelify = require("babelify");
var runSequence = require("run-sequence");
var source = require("vinyl-source-stream");
var del = require("del");

gulp.task("client:build-sources", function() {
    return browserify({ "entries": "./client/src/js/index.jsx", "extensions": [".jsx", ".js"], "debug": true })
        .transform(babelify, { "presets": ["es2015", "react"] })
        .bundle()
        .on("error", function(err) {
            console.log("Error : " + err.message);
        })
        .pipe(source("app-min.js"))
        .pipe(gulp.dest("./dist/client"));
});

gulp.task("client:watch", () => {
    return gulp.watch("./client/src/js/**/*[.jsx, .js]", ["client:build-sources"]);
});

gulp.task("client:copy-resources", function() {
    return gulp.src("./client/src/index.html")
    .pipe(gulp.dest("./dist/client"));
});


gulp.task("client:clean", function() {
    del("./dist/client");
});

gulp.task("client:build", function(callback) {
    runSequence("client:copy-resources", "client:build-sources", callback);
});