module.exports = function (grunt) {
    grunt.util.linefeed = "\n";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            options: {
                strictMath: true,
                sourceMap: true,
                outputSourceFiles: true
            },
            main: {
                files: [
                    {
                        src: ['less/main.less'],
                        dest: 'css/main.css'
                    }
                ]
            }
        },
        cssmin: {
            main: {
                files: [{
                    src: 'css/main.css',
                    dest: 'css/main.min.css'
                }]
            }
        },
        clean: {
            css: {
                files: [{
                    src: ['css/main.css']
                }]
            },
            js: {
                files: [{
                    src: ['js/all.js']
                }]
            }
        },
        watch: {
            lessGlobal: {
                files: ['less/**'],
                tasks: ['prepareCss']
            },
            js: {
                files: [
                    'js/template.js',
                    'js/main.js'
                ],
                tasks: ['prepareJs']
            }
        },
        concat: {
            js: {
                files: [
                    {
                        src: [
                            'js/jquery-2.1.4.min.js',
                            'js/lodash.js',
                            'js/jquery-ui-1.12.1/jquery-ui.min.js',
                            'js/jquery.ui.touch-punch.js',
                            'js/jquery.easing.min.js',
                            'js/jquery.nicescroll.js',
                            'js/jquery.ui.touch-punch.js',
                            'js/jquery.knob.js',
                            'js/bootstrap.js',
                            'js/bootstrap-toggle.js',
                            'js/handlebars-v4.0.5.js',
                            'js/gridstack.min.js',
                            'js/main.js'
                        ],
                        dest: 'js/all.js'
                    }
                ]
            },
            css: {
                files: [
                    {
                        src: [
                            'css/common/gridstack.css',
                            'css/common/gridstack-extra.css',
                            'css/jquery-ui.min.css',
                            'css/jquery-ui.structure.min.css',
                            'css/jquery-ui.theme.min.css',
                            'css/izolafont.css',
                            'css/font-awesome.min.css',
                            'css/bootstrap.css',
                            'css/bookblock.css',
                            'css/old/bootstrap-theme.css',
                            'css/main.css'
                        ],
                        dest: 'css/main.css'
                    }
                ]
            }
        },
        uglify: {
            js:{
                files: [{
                    src: 'js/all.js',
                    dest: 'js/all.min.js'
                }]
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('prepareCss', ['less', 'concat:css','cssmin', 'clean:css']);
    grunt.registerTask('prepareJs', ['concat:js', 'uglify', 'clean:js']);
};