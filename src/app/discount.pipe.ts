import { Pipe, PipeTransform } from "@angular/core";
import { DiscountService } from "./discount.service";

@Pipe({
    name: "discount",
    pure: false
})
export class PaDiscountPipe implements PipeTransform {

    
    constructor(private discounter: DiscountService){}

    transform(price: number): number {
        return this.discounter.applyDiscount(price);
    }
}
