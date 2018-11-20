import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
import { ProductComponent } from './component';
import { PsiAttrDirective } from './attr.directive';
import { PaModel } from './twoway.directive';
import { PaStrctureDirective } from './structure.directive';

@NgModule({
  declarations: [
    ProductComponent, PsiAttrDirective, PaModel, PaStrctureDirective
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
