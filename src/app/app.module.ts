import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductFormComponent } from "./components/productForm.component";
import { ProductTableComponent } from "./components/productTable.component";
import { ComponentsModule } from "./components/components.module";
import { PaToggleView } from "./components/toggleView.component";

@NgModule({
    imports: [BrowserModule, ComponentsModule],
    bootstrap: [ProductFormComponent, ProductTableComponent, PaToggleView]
})
export class AppModule {}
