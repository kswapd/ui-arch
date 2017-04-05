var gulp        = require('gulp');
var less        = require('gulp-less');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var inject = require('gulp-inject');

// 静态服务器

var lessFile = ['./src/**/*.less'];








var injectOptions = {
        /*transform: function (filePath, file, i, length) {
            console.log('injdect path:' + filePath);
            newPath = filePath.replace('src', '');
            console.log('after injdect path:' + newPath + ' file:');
            return newPath;
        },
        starttag: '// injector',
        endtag: '// endinjector',
        addRootSlash: false*/
    };





gulp.task('cssInject', function () {
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(lessFile, {read: false});

 // var sources = gulp.src(['./src/**/*.js', './src/**/*.css'], {read: false});
 
  return target.pipe(inject(sources, injectOptions))
    .pipe(gulp.dest('./src'))
    .pipe(reload({stream: true}));
});





gulp.task('lessEncode', function(){
	console.log('encoding less files');
	gulp.src(lessFile)
	    .pipe(less())
            .pipe(gulp.dest('src/styles'));
});



gulp.task('dev',['fileWatch'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('fileWatch', function(){
   gulp.watch(lessFile, ['lessEncode', 'cssInject']); 
});

