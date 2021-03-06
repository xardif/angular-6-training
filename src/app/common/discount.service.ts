import { Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";

@Injectable({
    providedIn: CommonModule
})
export class DiscountService {
    private discountValue: number = 10;

    public get discount(): number {
        return this.discountValue;
    }

    public set discount(newValue: number) {
        this.discountValue = newValue;
    }

    public applyDiscount(value: number): number {
        return Math.max(value - this.discountValue, Math.min(5, value));
    }
}