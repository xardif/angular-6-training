import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "addTax",
    pure: false
})
export class PaAddTaxPipe implements PipeTransform {
    defaultRate: number = 10;

    transform(value: any, rate?: any): number {
        let valueNumber = Number(value);
        let rateNumber = rate == undefined ? this.defaultRate : Number(rate);
        return valueNumber + valueNumber * (rateNumber / 100);
    }
}
