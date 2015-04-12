module.exports = function (grunt) {
    var cssVendors = [
        'src/Dende/LayoutBundle/Resources/public/css/bootstrap.css',
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
        'src/Dende/LayoutBundle/Resources/public/css/icons.css',
        'src/Dende/LayoutBundle/Resources/public/plugins/tables/dataTables/jquery.dataTables.css',
        'src/Dende/LayoutBundle/Resources/public/plugins/forms/select2/select2.css',
        'src/Dende/LayoutBundle/Resources/public/plugins/forms/select2/select2-bootstrap.css',
        'src/Dende/ScheduleBundle/Resources/public/css/fullcalendar.css',

    ];

    var lessFiles = [
        'src/Dende/DefaultBundle/Resources/public/less/main.less',
        'src/Dende/FiltersBundle/Resources/public/less/filters.less',
        'src/Dende/ListsBundle/Resources/public/less/members-list.less',
        'src/Dende/ListsBundle/Resources/public/less/vouchers-list.less',
    ];

    var mainLibraries = [
        'bower_components/modernizr/modernizr.js',
        'bower_components/jquery/dist/jquery.js',
        'bower_components/jquery-ui/jquery-ui.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/DataTables/media/js/jquery.dataTables.js',
        'bower_components/webcam/jquery.webcam.js',
        'bower_components/moment/min/moment-with-locales.min.js',
        //'bower_components/moment/min/moment-with-locales.js',
        'bower_components/blockui/jquery.blockUI.js',

        'src/Dende/LayoutBundle/Resources/public/js/supr-theme/jquery-ui-sliderAccess.js',
        //'src/Dende/LayoutBundle/Resources/public/plugins/forms/placeholder/jquery.placeholder.min.js',
        //'src/Dende/LayoutBundle/Resources/public/js/libs/excanvas.min.js',
        //'src/Dende/LayoutBundle/Resources/public/js/libs/jRespond.min.js',
        //'src/Dende/LayoutBundle/Resources/public/js/libs/respond.min.js',
        //'src/Dende/LayoutBundle/Resources/public/js/libs/modernizr.js',
        'src/Dende/LayoutBundle/Resources/public/js/libs/jquery.knob.js',
        //'src/Dende/LayoutBundle/Resources/public/plugins/misc/qtip/jquery.qtip.min.js',
        'src/Dende/LayoutBundle/Resources/public/plugins/misc/totop/jquery.ui.totop.min.js',
        //'src/Dende/LayoutBundle/Resources/public/plugins/forms/uniform/jquery.uniform.min.js',
        'src/Dende/LayoutBundle/Resources/public/js/supr-theme/jquery-ui-timepicker-addon.js',
        //'src/Dende/LayoutBundle/Resources/public/js/libs/jquery.pnotify.min.js',
        //'src/Dende/LayoutBundle/Resources/public/plugins/tables/dataTables/jquery.dataTables.js',
        //'src/Dende/LayoutBundle/Resources/public/plugins/forms/select2/select2.min.js',
        //'src/Dende/DefaultBundle/Resources/public/js/jquery.ui.widget.js',
        //'src/Dende/DefaultBundle/Resources/public/js/jquery.ui.spinner.js',
        'src/Dende/DefaultBundle/Resources/public/js/jquery.iframe-transport.js',
        'src/Dende/DefaultBundle/Resources/public/js/jquery.fileupload.js',
        'bower_components/fullcalendar/dist/fullcalendar.js',
    ];

    var coffeeFiles = [
        "./src/Dende/DefaultBundle/Resources/public/coffee/Modal.coffee",
        "./src/Dende/MembersBundle/Resources/public/coffee/members.editMember.coffee",
        "./src/Dende/MembersBundle/Resources/public/coffee/members.webcam.coffee",
        "./src/Dende/MembersBundle/Resources/public/coffee/members.filter.coffee",
        //
        "./src/Dende/EntriesBundle/Resources/public/coffee/entries.modal.class.coffee",
        "./src/Dende/EntriesBundle/Resources/public/coffee/entries.editEntry.coffee",
        //
        "./src/Dende/DefaultBundle/Resources/public/coffee/keyboardTyping.coffee",
        //"./src/Dende/DefaultBundle/Resources/public/coffee/helpers.coffee",
        "./src/Dende/DefaultBundle/Resources/public/coffee/configs.coffee",

        "./src/Dende/VouchersBundle/Resources/public/coffee/vouchers.closeVoucher.coffee",
        "./src/Dende/VouchersBundle/Resources/public/coffee/vouchers.editVoucher.coffee",

        "./src/Dende/DashboardBundle/Resources/public/coffee/dashboard.coffee",

        "./src/Dende/FiltersBundle/Resources/public/coffee/tabs.coffee",
        "./src/Dende/FiltersBundle/Resources/public/coffee/filter.coffee",

        "./src/Dende/ListsBundle/Resources/public/coffee/entries.list.coffee",
        "./src/Dende/ListsBundle/Resources/public/coffee/reloadAjax.coffee",
        "./src/Dende/ListsBundle/Resources/public/coffee/vouchers.list.coffee",
        "./src/Dende/ListsBundle/Resources/public/coffee/members.list.coffee",

        './src/Dende/ScheduleBundle/Resources/public/coffee/schedule-calendar.coffee',
        "./src/Dende/DefaultBundle/Resources/public/coffee/main.coffee",
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
                dest: 'web/swf/'
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
                    './src/Dende/LayoutBundle/Resources/public/css/fonts/*',
                ],
                dest: "./web/css/fonts/"
            },
            images: {
                expand: true,
                flatten: true,
                cwd: '',
                filter: 'isFile',
                src: [
                    './src/Dende/LayoutBundle/Resources/public/images/*',
                ],
                dest: "./web/images"
            },
            datatables: {
                expand: true,
                flatten: true,
                cwd: '',
                filter: 'isFile',
                src: [
                    './src/Dende/LayoutBundle/Resources/public/plugins/tables/dataTables/images/*',
                ],
                dest: "./web/css/images/"
            },
            select2: {
                expand: true,
                flatten: true,
                cwd: '',
                filter: 'isFile',
                src: [
                    './src/Dende/LayoutBundle/Resources/public/plugins/forms/select2/select2.png'
                ],
                dest: "./web/css/"
            },
            patterns: {
                expand: true,
                flatten: true,
                cwd: '',
                filter: 'isFile',
                src: [
                    './src/Dende/LayoutBundle/Resources/public/images/patterns/*',
                ],
                dest: "./web/images/patterns/"
            },

        },
    });

    grunt.registerTask('css:development', [
        "copy:datetimepicker",                  // datetimepicker to bootstrap dir
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
        "copy:patterns",
        "copy:datatables",
        "copy:select2",
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
