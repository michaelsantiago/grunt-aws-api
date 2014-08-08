/*
 * grunt-aws-api
 * https://github.com/michaelsantiago/grunt-aws-api
 *
 * Copyright (c) 2014 Michael Jedrzejczyk
 * Licensed under the MIT license.
 */

'use strict';
var AWS = require('aws-sdk');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('aws_api', 'Call Amazon AWS methods', function() {

    //grunt.log.writeln(grunt.file);
      //console.log(this.data.options.s3Key);

      AWS.config.update({accessKeyId: this.data.options.s3Key, secretAccessKey: this.data.options.s3Secret});
      var s3 = new AWS.S3();
      console.log("1");

      s3.listBuckets(function(error, data) {
          console.log("1.5");
          if (error) {
              console.log("GAH");
              console.log(error); // error is Response.error
          } else {
              console.log(data); // data is Response.data
          }
      });

      console.log("2");


   /*
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });*/

  });

};
