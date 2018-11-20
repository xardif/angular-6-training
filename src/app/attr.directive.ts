import {
    Directive,
    ElementRef,
    Attribute,
    Input,
    SimpleChange,
    Output,
    EventEmitter
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
    bgClass: string;

    // lifecycle method
    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        let change = changes["bgClass"];

        let classList = this.element.nativeElement.classList;
        if (
            !change.isFirstChange() &&
            classList.contains(change.previousValue)
        ) {
            classList.remove(change.previousValue);
        }
        if (!classList.contains(change.currentValue)) {
            classList.add(change.currentValue);
        }
    }

    @Input("psi-product")
    product: Product;

    // we could raise events using output properties
    @Output("psi-category")
    click = new EventEmitter<string>();
}
