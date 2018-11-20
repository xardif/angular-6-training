import {
    Directive,
    ViewContainerRef,
    TemplateRef,
    Input,
    SimpleChange
} from "@angular/core";

@Directive({
    selector: "[paIf]"
})
export class PaStrctureDirective {
    constructor(
        private container: ViewContainerRef,
        private template: TemplateRef<any>
    ) {}

    @Input("paIf")
    expressionResult: boolean;

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        let change = changes["expressionResult"];
        if (!change.isFirstChange() && !change.currentValue) {
            this.container.clear();
        } else if (change.currentValue) {
            this.container.createEmbeddedView(this.template);
        }
    }
}
