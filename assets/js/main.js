/**
 * Created by rkh on 2013-11-18.
 */
//require config
require.config({
    baseUrl: 'assets/js',
    paths: {
        jquery: 'lib/jquery-2.0.3',
        backbone: 'lib/backbone',
        backbone_LS: 'lib/backbone.localStorage',
        bootstrap: 'lib/bootstrap',
        handlebars: 'lib/handlebars-v1.1.2',
        underscore: 'lib/underscore',
        router: 'page/router',
        helloview: 'page/view/helloview'
    },

    //config non-amd scripts
    shim: {
        underscore: { exports: "_" },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

require(['app'], function(App) { App.initialize(); });