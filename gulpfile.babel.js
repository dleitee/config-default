/**
*
* Gulpfile default for my projects
*
* @author Daniel Leite de Oliveira <dleitee@gmail.com>
*
*/

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

(()=>{

  'use strict';

  //All loaded plugins
  const $ = gulpLoadPlugins();

  let task = (name) => {

    // Get all arguments for task function and remove first (name)
    let args = Array.prototype.slice.call(arguments, 1);

    // Add gulp and plugins to arguments
    args.unshift(gulp, $);

    //return task by name and apply arguments
    return require(`./gulp/${name}`).apply({}, args);

  }

  gulp.task('javascript', task('javascript'));

  gulp.task('css', task('css'));

  gulp.task('default', ['javascript', 'css'], ()=>{});

}());


