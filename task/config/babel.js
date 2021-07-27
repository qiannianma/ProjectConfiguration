/**
 * babel files
 */
const { WEB_APP_DIR, TMP_DIR_BABEL } = require('../variable');
module.exports = function (grunt) {
    grunt.config.set('babel', {
        options: {
            sourceMap: false,
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
                        },
                        modules: 'commonjs',
                        corejs: '3',
                        useBuiltIns: 'usage'
                    }
                ]
            ]
        },
        dist: {
            files: [
                {
                    expand: true, // Enable dynamic expansion.
                    cwd: WEB_APP_DIR, // Src matches are relative to this path.
                    src: ['**/*.js'],
                    dest: TMP_DIR_BABEL, // Destination path prefix.
                    filter: function (filepath) {
                        return !filepath.match(new RegExp('webapp/(static|test)', 'gi'));
                    }
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-babel');
};
