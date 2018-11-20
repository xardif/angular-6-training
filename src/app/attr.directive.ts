import {Directive,ElementRef,Attribute} from "@angular/core"

@Directive({
    selector:"[psi-attr]"
})
export class PsiAttrDirective {

    constructor(ref: ElementRef, @Attribute("psi-attr") bgClass: string) {
        ref.nativeElement.classList.add(bgClass);
    }

}