import { Component, Output, EventEmitter, Input } from "@angular/core";
import { DiscountService } from "./../common/discount.service";

@Component({
    selector: "paDiscountEditor",
    template:
        "<input [(ngModel)]='discounter.discount' type='text' name='discount'/>"
})
export class PaDiscountEditorComponent {
    constructor(public discounter: DiscountService) {}
}
