import { ApplicationRef, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Model } from "./repository.model";
import { Product } from "./product.model";
@Component({
    selector: "app",
    templateUrl: "template.html"
})
export class ProductComponent {
    // constructor(private model: Model) {}
    // addProduct(p: Product) {
    //     this.model.saveProduct(p);
    // }
}
