import {
    Directive,
    ElementRef,
    Attribute,
    Input,
    SimpleChange,
    Output,
    EventEmitter,
    HostBinding,
    HostListener,
    Inject,
    InjectionToken
} from "@angular/core";

export const VALUE_SERVICE = new InjectionToken("value_service");

@Directive({
    selector: "[paDisplayValue]"
})
export class PaValueDisplayDirective {
    constructor(@Inject(VALUE_SERVICE) serviceValue: string) {
        this.elementContent = serviceValue;
    }

    @HostBinding("textContent")
    elementContent: string;
}
