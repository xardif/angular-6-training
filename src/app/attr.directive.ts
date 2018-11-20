import {
    Directive,
    ElementRef,
    Attribute,
    Input,
    SimpleChange,
    Output,
    EventEmitter,
    HostBinding,
    HostListener
} from "@angular/core";
import { Product } from "./product.model";

@Directive({
    selector: "[psi-attr]"
})
export class PsiAttrDirective {
    @Input("psi-attr")
    @HostBinding("class")
    bgClass: string;

    @Input("psi-product")
    product: Product;

    @Output("psi-category")
    click = new EventEmitter<string>();

    @HostListener("click")
    triggerCustomEvent() {
        if (this.product != null) this.click.emit(this.product.category);
    }
}
