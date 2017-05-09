var gulp        = require('gulp');
var less        = require('gulp-less');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var inject = require('gulp-inject');

// 静态服务器

var lessFile = ['./src/**/*.less'];

var jsFile = ['./src/**/*.js'];


var cssFile = ['./dist/*.css'];
var cssjsFile = ['./src/**/*.js','./dist/*.css'];


var wiredep = require('wiredep').stream;

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


var wiredepOptions = {
    directory: 'bower_components',
    devDependencies: true
};



gulp.task('cssInject', function () {
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(cssFile, {read: false});

 // var sources = gulp.src(['./src/**/*.js', './src/**/*.css'], {read: false});
 
  return target.pipe(inject(sources, injectOptions))
    .pipe(wiredep(wiredepOptions))
    .pipe(gulp.dest("./dist/"))
      .pipe(reload({stream: true}));
});




gulp.task('jsInject', function () {
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(jsFile, {read: false});


 
  return target.pipe(inject(sources, injectOptions))
        .pipe(wiredep(wiredepOptions))
        .pipe(gulp.dest('./dist/'))
        .pipe(reload({stream: true}));
});


gulp.task('cssjsInject',['lessEncode'], function () {
    var target = gulp.src('./src/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(cssjsFile, {read: false});



    return target.pipe(inject(sources, injectOptions))
        .pipe(wiredep(wiredepOptions))
        .pipe(gulp.dest('./dist/'))
        .pipe(reload({stream: true}));
});
/*

gulp.task('cssJsInject', function () {
  var target = gulp.src('./src/index.html');

 
  return target.pipe(inject(sources, injectOptions))
    .pipe(reload({stream: true}))
    .pipe(gulp.dest('./src/'));
});
*/


gulp.task('lessEncode', function(){
	console.log('encoding less files');
	gulp.src(lessFile)
      .pipe(wiredep(wiredepOptions))
	    .pipe(less())
      .pipe(gulp.dest('./dist/'));
});



gulp.task('dev',['fileWatch'], function() {
    browserSync.init({
        server: {
            baseDir: ["./dist/", "./", "./src/assets/"],
            index: "index.html"
        }
    });
    gulp.start('cssjsInject');
    
});

gulp.task('fileWatch', function(){
   //gulp.watch(lessFile, ['jsInject','lessEncode', 'cssInject']);
   //gulp.watch(jsFile, ['jsInject','lessEncode', 'cssInject']);
   gulp.watch(['./src/**/*.less', './src/**/*.js','./dist/*.css'], ['cssjsInject']);

});

