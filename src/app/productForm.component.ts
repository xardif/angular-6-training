import { Component, Output, EventEmitter } from "@angular/core";
import { Product } from "./product.model";
import { Model } from "./repository.model";
import { VALUE_SERVICE } from "./valueDisplay.directive";

@Component({
    selector: "paProductForm",
    templateUrl: "./productForm.component.html",
    styleUrls: ["productForm.component.css"],
    // providers: [{ provide: VALUE_SERVICE, useValue: "Windows" }]
    viewProviders: [{ provide: VALUE_SERVICE, useValue: "Windows" }]
})
export class ProductFormComponent {
    newProduct: Product = new Product();

    constructor(private dataModel: Model) {}

    submitForm(form: any) {
        if (form.valid) {
            this.dataModel.saveProduct(this.newProduct);
        }
    }
}
