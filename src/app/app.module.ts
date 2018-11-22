import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductFormComponent } from "./components/productForm.component";
import { ProductTableComponent } from "./components/productTable.component";
import { ComponentsModule } from "./components/components.module";

@NgModule({
    imports: [BrowserModule, ComponentsModule],
    bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule {}
