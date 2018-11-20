import {Directive,ElementRef,Attribute, Input} from "@angular/core"

@Directive({
    selector:"[psi-attr]"
})
export class PsiAttrDirective {

    // constructor(ref: ElementRef, @Attribute("psi-attr") bgClass: string) {
    //     ref.nativeElement.classList.add(bgClass);
    // }

    constructor(private element: ElementRef) {
    }

    @Input("psi-attr")
    bgClass:string;

    // lifecycle method
    ngOnInit() {
        this.element.nativeElement.classList.add(this.bgClass || 'bg-success');
    }

}