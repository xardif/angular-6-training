import { Component, Output, EventEmitter } from "@angular/core";
import { Product } from "./product.model";

@Component({
    selector: "paToggleView",
    templateUrl: "./toggleView.component.html"
})
export class PaToggleView {
    showContent: boolean = true;
    
}
