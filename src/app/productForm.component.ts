import { Component, Output, EventEmitter } from "@angular/core"
import { Product } from "./product.model";
import { Model } from "./repository.model";

@Component({
    selector: "paProductForm",
    templateUrl: "./productForm.component.html",
    styleUrls: ["productForm.component.css"]
})
export class ProductFormComponent {

    newProduct: Product = new Product();

    constructor(private dataModel: Model){}

    submitForm(form:any) {
        if(form.valid) {
            this.dataModel.saveProduct(this.newProduct);
        }
    }

}