import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { PaToggleView } from "./toggleView.component";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { CommonModule } from "../common/common.module";

@NgModule({
    imports: [
        BrowserModule,
        ModelModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ProductFormComponent,
        ProductTableComponent,
        PaToggleView,
        PaDiscountDisplayComponent,
        PaDiscountEditorComponent
    ],
    exports: [ProductFormComponent, ProductTableComponent]
})
export class ComponentsModule {}
