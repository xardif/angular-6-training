import {Directive,ElementRef} from "@angular/core"

@Directive({
    selector:"[psi-attr]"
})
export class PsiAttrDirective {

    constructor(ref: ElementRef) {
        ref.nativeElement.classList.add("bg-danger");
    }

}