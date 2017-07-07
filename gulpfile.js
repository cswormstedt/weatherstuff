var gulp 	= require('gulp'),
	less 	= require('gulp-less'),
	watch 	= require('gulp-watch');

gulp.task('hello', function(){
	console.log('yooo');
})

gulp.task('watch', function(){
	gulp.watch(['./server/public/styles/*.less'], ['compile-less']});
})

gulp.task('compile-less', function(){
	gulp.src('./server/public/styles/style.less')
	.pipe(less())
	.pipe(gulp.dest('./server/public/styles/'))
})

gulp.task('default', ['compile-less', 'watch'])