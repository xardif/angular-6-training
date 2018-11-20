import {
    Directive,
    ElementRef,
    Attribute,
    Input,
    SimpleChange
} from "@angular/core";

@Directive({
    selector: "[psi-attr]"
})
export class PsiAttrDirective {
    // constructor(ref: ElementRef, @Attribute("psi-attr") bgClass: string) {
    //     ref.nativeElement.classList.add(bgClass);
    // }

    constructor(private element: ElementRef) {}

    @Input("psi-attr")
    bgClass: string;

    // lifecycle method
    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        let change = changes["bgClass"];

        let classList = this.element.nativeElement.classList;
        if (!change.firstChange && classList.contains(change.previousValue)) {
            classList.remove(change.previousValue);
        }
        if (!classList.contains(change.currentValue)) {
            this.element.nativeElement.classList.add(
                change.currentValue
            );
        }
    }
}
