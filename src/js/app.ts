namespace Lesson06 {
    let module: ng.IModule = angular.module('app', [
        /*-- Third Party Modules --*/
        'ngResource',
        'ui.router',
        'ngMaterial',
        'ngMessages',


        /*-- Application Modules --*/
        'app.filters',
        'app.services',
        'app.views'
    ]);

    module.config(Configuration);

    module.run(Run);
}