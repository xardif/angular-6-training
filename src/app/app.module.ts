import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// import { AppComponent } from './app.component';
import { ProductComponent } from "./component";
import { PsiAttrDirective } from "./attr.directive";
import { PaModel } from "./twoway.directive";
import { PaStrctureDirective } from "./structure.directive";
import { PaIteratorDirective } from "./iterator.directive";
import { ProductFormComponent } from "./productForm.component";
import { ProductTableComponent } from "./productTable.component";
import { PaToggleView } from "./toggleView.component";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { PaDiscountPipe } from "./discount.pipe";
import { PaDiscountAmountDirective } from "./discountAmount.directive";
import { LogService, LOG_SERVICE } from "./log.service";

@NgModule({
    declarations: [
        ProductComponent,
        PsiAttrDirective,
        PaModel,
        PaStrctureDirective,
        PaIteratorDirective,
        ProductFormComponent,
        ProductTableComponent,
        PaToggleView,
        PaAddTaxPipe,
        PaCategoryFilterPipe,
        PaDiscountDisplayComponent,
        PaDiscountEditorComponent,
        PaDiscountPipe,
        PaDiscountAmountDirective
    ],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    providers: [
        {
            provide: LOG_SERVICE,
            useClass: LogService
        }
    ],
    bootstrap: [ProductComponent]
})
export class AppModule {}
