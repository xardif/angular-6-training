import { Component, Output, EventEmitter, Input } from "@angular/core";
import { Product } from "./product.model";
import { DiscountService } from "./discount.service";

@Component({
    selector: "paDiscountDisplay",
    template: "The discount is {{ discounter.discount }}"
})
export class PaDiscountDisplayComponent {
    constructor(private discounter: DiscountService) {}
}
