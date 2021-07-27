module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('@sap/grunt-sapui5-bestpractice-build');
    grunt.config.merge({
        compatVersion: 'edge',
        deploy_mode: 'html_repo',
        copy: {
            copyToDeploy: {
                files: [
                    {
                        expand: true,
                        src: ['**/*'],
                        dest: 'webapps/soldtoparty-ui',
                        cwd: 'dist'
                    }
                ]
            }
        }
    });
    grunt.registerTask('default', ['clean', 'build', 'copy:copyToDeploy']);
};
