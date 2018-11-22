import {
    Directive,
    ViewContainerRef,
    TemplateRef,
    Input,
    SimpleChange,
    IterableDiffer,
    IterableDiffers,
    ChangeDetectorRef,
    KeyValueDiffers,
    KeyValueDiffer,
    Inject
} from "@angular/core";
import { Product } from "./product.model";
import { ViewRef } from "@angular/core/src/render3/view_ref";
import { DiscountService } from "./discount.service";
import { LogService, LOG_SERVICE, LogLevel } from "./log.service";

@Directive({
    selector: "td[pa-price]",
    exportAs: "discountExportAs"
})
export class PaDiscountAmountDirective {
    differ: KeyValueDiffer<any, any>;

    discountAmount: number;
    logger: LogService;

    constructor(
        private discounter: DiscountService,
        private keyValueDiffers: KeyValueDiffers,
        @Inject(LOG_SERVICE) private loggers: LogService[]
    ) {
        this.logger = this.loggers.find(l => l.minLogLevel == LogLevel.DEBUG);
    }

    @Input("pa-price")
    originalPrice: number;

    ngOnInit() {
        this.differ = this.keyValueDiffers.find(this.discounter).create();
    }

    ngDoCheck() {
        this.logger.logInfoMessage("ngDoCheck");
        if (this.differ.diff(this.discounter)) {
            this.updateValue();
        }
    }

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        if (changes["originalPrice"]) {
            this.updateValue();
        }
    }

    private updateValue() {
        this.discountAmount =
            this.originalPrice -
            this.discounter.applyDiscount(this.originalPrice);
    }
}
