import { Pipe, PipeTransform } from "@angular/core";
import { Transform } from "stream";

@Pipe({
    name: "addTax"
})
export class PaAddTaxPipe implements PipeTransform {
    defaultRate: number = 10;

    transform(value: any, rate?: number): number {
        let valueNumber = Number(value);
        let rateNumber = rate == undefined ? this.defaultRate : rate;
        return valueNumber + valueNumber * (rateNumber / 100);
    }
}
