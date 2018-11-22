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
import { Product } from "./model/product.model";

@Directive({
    selector: "input[paModel]",
    exportAs: "exportedPaModel"
})
export class PaModel {

    direction: string = "None";

    @Input("paModel")
    modelProperty: string;

    @HostBinding("value")
    fieldValue: string = "";

    @Output("paModelChange")
    update = new EventEmitter<string>();

    @HostListener("input", ["$event.target.value"])
    updateValue(newValue: string) {
        this.fieldValue = newValue;
        this.update.emit(newValue);
        this.direction = "Element";
    }

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        let change = changes["modelProperty"];
        if (change.currentValue != this.fieldValue) {
            this.fieldValue = change.currentValue || "";
            this.direction = "Model";
        }
    }
}
