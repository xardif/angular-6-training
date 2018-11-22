import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// import { AppComponent } from './app.component';
import { ProductComponent } from "./component";
import { ProductFormComponent } from "./productForm.component";
import { ProductTableComponent } from "./productTable.component";
import { PaToggleView } from "./toggleView.component";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { PaCellColorSwitchesDirective } from "./cellColorSwitches.directive";
import { ModelModule } from "./model/model.module";
import { CommonModule } from "./common/common.module";

@NgModule({
    declarations: [
        ProductComponent,
        ProductFormComponent,
        ProductTableComponent,
        PaToggleView,
        PaDiscountDisplayComponent,
        PaDiscountEditorComponent,
        PaCellColorSwitchesDirective
    ],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, ModelModule, CommonModule],
    bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule {}
