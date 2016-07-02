export module Main {

    angular.module("myApp", []);

    angular.module("myApp").run(() => {
        console.log('angular myApp initialized');
    });

    // -------------------------

    class Controller {
        variable : string = 'This is a string.';
    }

    angular.module("myApp").controller("Controller", Controller);

}