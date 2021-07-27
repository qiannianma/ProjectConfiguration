const { TMP_DIR_BABEL } = require('../variable');
module.exports = function (grunt) {
    // Let the browser fit require(commonJS,CMD)
    grunt.config.set('browserify', {
        dist: {
            files: [
                {
                    expand: true,
                    src: ['**/*.js'],
                    dest: TMP_DIR_BABEL,
                    cwd: TMP_DIR_BABEL
                }
            ]
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
};
