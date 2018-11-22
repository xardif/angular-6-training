import { NgModule } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { SimpleDataSource } from "./datasource.model";
// import { SimpleDataSource } from "./datasource.model";
// import { Model } from "./repository.model";

// @NgModule({
//     providers: [SimpleDataSource, Model]
// })
@NgModule({
    providers: [Model, SimpleDataSource]
})
export class ModelModule {}
