import { Component, Output, EventEmitter, Input } from "@angular/core";
import { Product } from "./model/product.model";
import { DiscountService } from "./common/discount.service";

@Component({
    selector: "paDiscountDisplay",
    template: "The discount is {{ discounter.discount }}"
})
export class PaDiscountDisplayComponent {
    constructor(private discounter: DiscountService) {}
}
