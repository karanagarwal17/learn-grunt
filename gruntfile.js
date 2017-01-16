module.exports = function(grunt){

  //configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  //plugins

  //register task
  grunt.registerTask('run',function(){
    console.log('I am running');
  });
  grunt.registerTask('sleep',function(){
    console.log('I am sleeping');
  });
  grunt.registerTask('all',['sleep','run']);
};
