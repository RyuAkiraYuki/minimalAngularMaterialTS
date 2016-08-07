/// <reference path="./../_all.ts" />

module MinimalMaterialApp {

    export interface ISampleService {
        loadAllObjects():ng.IPromise<BaseModel[]>;
        selectedObject:BaseModel;
    }

    export class SampleService implements ISampleService {

        static $inject = ['$q'];

        constructor(private $q:ng.IQService) {

        }

        selectedObject:BaseModel = null;

        // Method for fetching data from Sample Service
        loadAllObjects():ng.IPromise<BaseModel[]> {
            return this.$q.when(this.baseModelObjects);
        }

        // Sample mock data
        private baseModelObjects:BaseModel[] = [
            {
                "title": "object Title 1"
            },
            {
                "title": "object Title 2"
            },
            {
                "title": "object Title 3"
            }
        ]
    }


}