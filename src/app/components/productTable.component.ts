import { Component, Input } from "@angular/core";
import { Model } from "./../model/repository.model";
import { Product } from "./../model/product.model";

@Component({
    selector: "paProductTable",
    templateUrl: "./productTable.component.html"
})
export class ProductTableComponent {

    taxRate: number = 0;
    categoryFilter: string;
    itemCount: number = 5;

    constructor(private dataModel: Model){}

    getProduct(key: number): Product {
        return this.dataModel.getProduct(key);
    }
    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }

    deleteProduct(key: number) {
        this.dataModel.deleteProduct(key);
    }

    // to verify date pipe
    dateObject: Date = new Date(2020, 1, 20);
    dateString: string = "2020-02-20T00:00:00.000Z"
    dateNumber: number = 123412341;
}
