/// <reference path="./_all.ts" />

module MinimalMaterialApp {
    angular.module("minimalMaterialApp", [
            'ngMaterial', 'ngMdIcons'
        ])
        .service('mainService', SampleService)
        .controller('mainController', MainController);
        // Angular materials configs
        // .config(
        //     ($mdIconProvider:angular.material.IIconProvider, $mdThemingProvider:angular.material.IThemingProvider) => {
        //         // Icon Provider
        //         $mdIconProvider;
        //         // .defaultIconSet('./assets/svg/avatars.svg',128)
        //         // .icon('menu','./assets/svg/menu.svg',24);
        //
        //         // Theme configuration
        //         $mdThemingProvider
        //         // .theme('default')
        //         // .primaryPalette('blue')
        //         // .accentPalette('red');
        //     });
}