import { Component } from "@angular/core"

@Component({
    selector: "paProductForm",
    template: "<div>{{model}}</div>"
})
export class ProductFormComponent {
    model:string = "this is a model";
}