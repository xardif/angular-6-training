import { Pipe, PipeTransform, Optional } from "@angular/core";
import { DiscountService } from "./discount.service";
import { LogService } from "./log.service";

@Pipe({
    name: "discount",
    pure: false
})
export class PaDiscountPipe implements PipeTransform {
    constructor(
        private discounter: DiscountService,
        private logger: LogService
    ) {}

    transform(price: number): number {
        if (price > 100) {
            this.logger.logInfoMessage("Large price");
        }
        return this.discounter.applyDiscount(price);
    }
}
