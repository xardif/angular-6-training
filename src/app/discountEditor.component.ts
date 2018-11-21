import { Component, Output, EventEmitter, Input } from "@angular/core"
import { Product } from "./product.model";
import { DiscountService } from "./discount.service";

@Component({
    selector: "paDiscountEditor",
    template: "<input [(ngModel)]='discounter.discount' type='text' name='discount'/>";
})
export class PaDiscountEditorComponent {

    @Input("discounter")
    discounter: DiscountService;

}