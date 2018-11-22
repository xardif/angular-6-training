import { Component, Output, EventEmitter } from "@angular/core";
import { Product } from "./model/product.model";

@Component({
    selector: "paToggleView",
    templateUrl: "./toggleView.component.html"
})
export class PaToggleView {
    showContent: boolean = true;
    
}
