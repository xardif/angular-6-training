import {
    Directive,
    ElementRef,
    Attribute,
    Input,
    SimpleChange,
    Output,
    EventEmitter,
    HostBinding
} from "@angular/core";
import { Product } from "./product.model";

@Directive({
    selector: "[psi-attr]"
})
export class PsiAttrDirective {

    constructor(private element: ElementRef) {
        this.element.nativeElement.addEventListener("click", e => {
            if (this.product != null) {
                this.click.emit(this.product.category);
            }
        });
    }

    @Input("psi-attr")
    @HostBinding("class")
    bgClass: string;

    @Input("psi-product")
    product: Product;

    // we could raise events using output properties
    @Output("psi-category")
    click = new EventEmitter<string>();
}
