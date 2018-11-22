import { NgModule } from "@angular/core";
import { PsiAttrDirective } from "./attr.directive";
import { PaModel } from "./twoway.directive";
import { PaStrctureDirective } from "./structure.directive";
import { PaIteratorDirective } from "./iterator.directive";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { PaDiscountPipe } from "./discount.pipe";
import { PaDiscountAmountDirective } from "./discountAmount.directive";
import {
    LogService,
    LOG_SERVICE,
    LOG_LEVEL,
    SpecialLogService,
    LogLevel
} from "./log.service";
import {
    PaValueDisplayDirective,
    VALUE_SERVICE
} from "./valueDisplay.directive";
import { PaCellColorSwitchesDirective } from "./cellColorSwitches.directive";

@NgModule({
    declarations: [
        PsiAttrDirective,
        PaModel,
        PaStrctureDirective,
        PaIteratorDirective,
        PaAddTaxPipe,
        PaCategoryFilterPipe,
        PaDiscountPipe,
        PaDiscountAmountDirective,
        PaValueDisplayDirective,
        PaCellColorSwitchesDirective
    ],
    providers: [
        { provide: VALUE_SERVICE, useValue: "Apples" },
        { provide: LOG_LEVEL, useValue: LogLevel.DEBUG },
        { provide: "debugLevel", useExisting: LOG_LEVEL },
        {
            provide: LogService,
            deps: ["debugLevel"],
            useFactory: level => {
                let logger = new LogService();
                logger.minLogLevel = level;
                return logger;
            }
        }
    ],
    exports: [
        PsiAttrDirective,
        PaModel,
        PaStrctureDirective,
        PaIteratorDirective,
        PaAddTaxPipe,
        PaCategoryFilterPipe,
        PaDiscountPipe,
        PaDiscountAmountDirective,
        PaValueDisplayDirective,
        PaCellColorSwitchesDirective
    ]
})
export class CommonModule {}
