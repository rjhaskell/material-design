namespace Lesson06.Filters {
    let module: ng.IModule = angular.module('app.filters', []);

    module.filter('ifEmpty', Filters.IfEmptyFilter);
}