import { Component, Output, EventEmitter } from "@angular/core"
import { Product } from "./product.model";

@Component({
    selector: "paProductForm",
    templateUrl: "./productForm.component.html"
})
export class ProductFormComponent {

    newProduct: Product = new Product();

    @Output("paNewProduct")
    newProductEvent = new EventEmitter<Product>();

    submitForm(form:any) {
        if(form.valid) {
            this.newProductEvent.emit(this.newProduct);
        }
    }

}