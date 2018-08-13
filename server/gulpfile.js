var gulp = require("gulp");
var tsBuilder = require("gulp-typescript");
var tsFile = tsBuilder.createProject("tsconfig.json");
gulp.task("build", function() {
    return tsFile.src().pipe(tsFile()).js.pipe(gulp.dest("./out"))
});