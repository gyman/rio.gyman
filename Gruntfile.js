module.exports = function (grunt) {
    var cssVendors = [
        'css/bootstrap.css',
        'src/Dende/LayoutBundle/Resources/public/plugins/misc/qtip/jquery.qtip.css',
        'src/Dende/LayoutBundle/Resources/public/plugins/misc/fullcalendar/fullcalendar.css',
        'src/Dende/LayoutBundle/Resources/public/plugins/misc/search/tipuesearch.css',
        'src/Dende/LayoutBundle/Resources/public/plugins/forms/uniform/uniform.default.css',
        'src/Dende/LayoutBundle/Resources/public/css/supr-theme/jquery-ui-timepicker-addon.css',
        'src/Dende/LayoutBundle/Resources/public/css/supr-theme/jquery.ui.autocomplete.css',
        'src/Dende/LayoutBundle/Resources/public/css/supr-theme/jquery.ui.combobox.css',
        'src/Dende/LayoutBundle/Resources/public/css/supr-theme/jquery.ui.core.css',
        'src/Dende/LayoutBundle/Resources/public/css/supr-theme/jquery.ui.datepicker.css',
        'src/Dende/LayoutBundle/Resources/public/css/supr-theme/jquery.ui.dialog.css',
        'src/Dende/LayoutBundle/Resources/public/css/supr-theme/jquery.ui.progressbar.css',
        'src/Dende/LayoutBundle/Resources/public/css/supr-theme/jquery.ui.resizable.css',
        'src/Dende/LayoutBundle/Resources/public/css/supr-theme/jquery.ui.slider.css',
        'src/Dende/LayoutBundle/Resources/public/css/supr-theme/jquery.ui.spinner.css',
        'src/Dende/LayoutBundle/Resources/public/css/supr-theme/jquery.ui.theme.css',
        'src/Dende/LayoutBundle/Resources/public/css/supr-theme/jquery.ui.tooltip.css',
        'src/Dende/LayoutBundle/Resources/public/css/supr-theme/jquery.pnotify.default.css',
        'src/Dende/LayoutBundle/Resources/public/css/main.css',
        'src/Dende/LayoutBundle/Resources/public/css/custom.css',
        'src/Dende/LayoutBundle/Resources/public/css/ie8.css',
        'src/Dende/LayoutBundle/Resources/public/css/icons.css'
    ];

    var lessFiles = [
        'src/Dende/DefaultBundle/Resources/public/less/main.less'
    ];

    var mainLibraries = [
        'src/Dende/LayoutBundle/Resources/public/js/js/jquery.js',
        'src/Dende/LayoutBundle/Resources/public/js/js/bootstrap.js',
        'src/Dende/LayoutBundle/Resources/public/js/jquery-migrate-1.2.1.min.js',
        'src/Dende/LayoutBundle/Resources/public/plugins/forms/placeholder/jquery.placeholder.min.js',
        'src/Dende/LayoutBundle/Resources/public/js/libs/excanvas.min.js',
        'src/Dende/LayoutBundle/Resources/public/js/libs/jRespond.min.js',
        'src/Dende/LayoutBundle/Resources/public/js/libs/respond.min.js',
        'src/Dende/LayoutBundle/Resources/public/js/libs/modernizr.js',
        'src/Dende/LayoutBundle/Resources/public/js/jquery.blockUI.js',
        'src/Dende/LayoutBundle/Resources/public/js/libs/jquery.knob.js',
        'src/Dende/LayoutBundle/Resources/public/plugins/misc/fullcalendar/fullcalendar.min.js',
        'src/Dende/LayoutBundle/Resources/public/plugins/misc/qtip/jquery.qtip.min.js',
        'src/Dende/LayoutBundle/Resources/public/plugins/misc/totop/jquery.ui.totop.min.js',
        'src/Dende/LayoutBundle/Resources/public/plugins/forms/uniform/jquery.uniform.min.js',
        'src/Dende/LayoutBundle/Resources/public/js/supr-theme/jquery-ui-1.8.22.custom.min.js',
        'src/Dende/LayoutBundle/Resources/public/js/supr-theme/jquery-ui-sliderAccess.js',
        'src/Dende/LayoutBundle/Resources/public/js/supr-theme/jquery-ui-timepicker-addon.js',
        'src/Dende/LayoutBundle/Resources/public/js/libs/jquery.pnotify.min.js'
    ];

    var coffeeFiles = [
        'src/Dende/DefaultBundle/Resources/public/coffee/configs.coffee',
        'src/Dende/DefaultBundle/Resources/public/coffee/modal.coffee',
        'src/Dende/DefaultBundle/Resources/public/coffee/main.coffee',
        'src/Dende/DefaultBundle/Resources/public/coffee/keyboardTyping.coffee'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            build:            { src: "build/assets" },
            web:              { src: [ "web/assets", "web/js", "web/css", "web/fonts", "web/images"] },
            "dev-assets":     { src: ["!web/js/*.js", "!web/js/*.min.js", "!web/css/*.css", "!web/css/*.min.css"] }
        },
        watch: {
            scripts: {
                files: coffeeFiles,
                tasks: ['coffee:development'],
                options: {
                    spawn: false,
                },
            },
            styles: {
                files: lessFiles,
                tasks: ['less:development-project'],
                options: {
                    spawn: false,
                },
            }
        },
        less: {
            "development-vendors": {
                options: {
                    paths: [ "bower_components" ],
                    compress: false,
                    yuicompress: false,
                    optimization: 0
                },
                files : {
                    "build/assets/css/bootstrap.css" : [
                        "bower_components/bootstrap/less/bootstrap.less",
                        "bower_components/bootstrap/less/responsive.less",
                        "bower_components/bootstrap/less/bootstrap-datetimepicker.less",
                    ]
                }
            },
            "development-project": {
                options: {
                    paths: [ "src", 'app/Resources' ],
                    compress: false,
                    yuicompress: false,
                    optimization: 0
                },
                files : {
                    "web/css/project.css" : [
                        "src/**/*.less",
                        "app/Resources/**/*.less"
                    ]
                }
            },
        },
        uglify: {
            production: {
                files: {
                    'web/js/vendors.min.js': 'web/js/vendors.js',
                    'web/js/project.min.js': 'web/js/project.js'
                },
            },
        },
        cssmin: {
            "production-vendors": {
                src: 'web/css/vendors.css',
                dest: 'web/css/vendors.min.css'
            },
            "production-project": {
                src: 'web/css/project.css',
                dest: 'web/css/project.min.css'
            },
        },
        coffee: {
            development: {
                files: {
                    'web/js/project.js': coffeeFiles
                },
            },
        },
        concat: {
            "vendors.css": {
                src: cssVendors,
                dest: 'web/css/vendors.css',
                nonull: true
            },
            "vendors.js": {
                src: mainLibraries,
                dest: 'web/js/vendors.js',
                nonull: true
            },
        },
        exec: {
            "assets-install": {
                command: './app/console assets:install web --symlink',
                stdout: true
            },
        },
        copy: {
            "webcam-swf": {
                flatten: true,
                expand: true,
                cwd: 'bower_components/webcam/',
                src: 'jscam_canvas_only.swf',
                dest: 'web/assets/swf/'
            },
            "select2-images": {
                expand: true,
                cwd: 'bower_components/select2',
                src: '*',
                dest: 'build/assets/images/'
            },
            "datetimepicker": {
                src: "bower_components/bootstrap-datetimepicker/src/less/bootstrap-datetimepicker.less",
                dest: "bower_components/bootstrap/less/bootstrap-datetimepicker.less"
            },
            fonts: {
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: [
                    './vendor/gyman/supr/css/fonts/*',
                ],
                dest: "./web/fonts/"
            },
            images: {
                expand: true,
                flatten: true,
                cwd: '',
                filter: 'isFile',
                src: [
                    './vendor/gyman/supr/images/**/*.{png,jpg,svg,gif}',
                    './bower_components/bootstrap/images/*.{png,jpg,svg,gif}',
                    './bower_components/DataTables/media/images/*.{png,jpg,svg,gif}',
                    './bower_components/jquery-file-upload/img/*.{png,jpg,svg,gif}',
                    './bower_components/jquery.uniform/themes/default/images/*.{png,jpg,svg,gif}',
                    './bower_components/select2/*.{png,jpg,svg,gif}',
                ],
                dest: "./web/images"
            },

        },
    });

    grunt.registerTask('css:development', [
        "copy:datetimepicker",                  // datetimepicker to bootstrap dir
        "less:development-vendors",             // compiles *.less from vendors
        "concat:vendors.css",                   // concatenates vendors into one web/css/vendors.css file
        "less:development-project",             // compiles *.less from project into one web/css/project.css file
    ]);

    grunt.registerTask('js:development', [
        "coffee:development",                  // compiles *.coffee files into one web/js/project.js
        "concat:vendors.js",                   // concatenates vendors into one web/js/vendors.js
    ]);

    grunt.registerTask('development', [
        "clean:build",
        "clean:web",
        "css:development",
        "js:development",
        "copy:webcam-swf",
        "copy:images",
        "copy:fonts",
    ]);

    grunt.registerTask('production', [
        "development",
        "cssmin:production-vendors",
        "cssmin:production-project",
        "uglify:production",
        "clean:dev-assets"
    ]);

    grunt.registerTask('default', [
        'production'
    ]);

    grunt.config.set('color', 0);
    grunt.option('no-color');

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-exec");
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks("grunt-css-url-rewrite");
    //grunt.loadNpmTasks("grunt-image-embed");
};
