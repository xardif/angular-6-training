import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
import { ProductComponent } from './component';
import { PsiAttrDirective } from './attr.directive';
import { PaModel } from './twoway.directive';
import { PaStrctureDirective } from './structure.directive';
import { PaIteratorDirective } from './iterator.directive';
import { ProductFormComponent } from './productForm.component';
import { ProductTableComponent } from './productTable.component';
import { PaToggleView } from './toggleView.component';
import { PaAddTaxPipe } from './addTax.pipe';
import { PaCategoryFilterPipe } from './categoryFilter.pipe';
import { PaDiscountDisplayComponent } from './discountDisplay.component';
import { PaDiscountEditorComponent } from './discountEditor.component';
import { DiscountService } from './discount.service';

@NgModule({
  declarations: [
    ProductComponent, PsiAttrDirective, PaModel, PaStrctureDirective, PaIteratorDirective,
    ProductFormComponent, ProductTableComponent, PaToggleView, PaAddTaxPipe, PaCategoryFilterPipe,
    PaDiscountDisplayComponent, PaDiscountEditorComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [DiscountService],
  bootstrap: [ProductComponent]
})
export class AppModule { }
