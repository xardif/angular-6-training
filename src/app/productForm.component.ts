import { Component, Output, EventEmitter, SkipSelf, Inject } from "@angular/core";
import { Product } from "./model/product.model";
import { Model } from "./model/repository.model";
import { VALUE_SERVICE } from "./common/valueDisplay.directive";

@Component({
    selector: "paProductForm",
    templateUrl: "./productForm.component.html",
    styleUrls: ["productForm.component.css"],
    // providers: [{ provide: VALUE_SERVICE, useValue: "Windows" }]
    viewProviders: [{ provide: VALUE_SERVICE, useValue: "Windows" }]
})
export class ProductFormComponent {
    newProduct: Product = new Product();

    constructor(
        private dataModel: Model,
        @Inject(VALUE_SERVICE) @SkipSelf() private serviceValue: string
    ) {
        console.log("===> " + serviceValue);
    }

    submitForm(form: any) {
        if (form.valid) {
            this.dataModel.saveProduct(this.newProduct);
        }
    }
}
