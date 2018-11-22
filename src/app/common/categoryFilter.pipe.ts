import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "./../model/product.model";

@Pipe({
    name: "filter",
    pure: false
})
export class PaCategoryFilterPipe implements PipeTransform {
    transform(products: Product[], category: string): Product[] {
        return category == undefined || category == '' ? products : products.filter(p => p.category == category);
    }
}
