/// <reference path="./../_all.ts" />

module MinimalMaterialApp {
    export class MainController {
        //      A variable to inject modules to be used inside
        //  current controller scope (services, factories, etc)
        static $inject = ['mainService'];

        // Pass modules injected above as private variables
        // Make sure that variables strongly typed
        constructor(private mainService:ISampleService) {
            var self = this;

            this.mainService
                .loadAllObjects()
                .then((baseModelObjects:BaseModel[])=> {
                    self.objectsStorage = baseModelObjects;
                })
        }

        objectsStorage:BaseModel[] = [];
    }

}