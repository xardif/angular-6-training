import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// import { AppComponent } from './app.component';
import { ProductComponent } from "./component";
import { PsiAttrDirective } from "./attr.directive";
import { PaModel } from "./twoway.directive";
import { PaStrctureDirective } from "./structure.directive";
import { PaIteratorDirective } from "./iterator.directive";
import { ProductFormComponent } from "./productForm.component";
import { ProductTableComponent } from "./productTable.component";
import { PaToggleView } from "./toggleView.component";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { PaDiscountPipe } from "./discount.pipe";
import { PaDiscountAmountDirective } from "./discountAmount.directive";
import {
    LogService,
    LOG_SERVICE,
    LOG_LEVEL,
    SpecialLogService,
    LogLevel
} from "./log.service";
import { PaCellColorSwitchesDirective } from "./cellColorSwitches.directive";
import {
    PaValueDisplayDirective,
    VALUE_SERVICE
} from "./valueDisplay.directive";
import { ModelModule } from "./model/model.module";

@NgModule({
    declarations: [
        ProductComponent,
        PsiAttrDirective,
        PaModel,
        PaStrctureDirective,
        PaIteratorDirective,
        ProductFormComponent,
        ProductTableComponent,
        PaToggleView,
        PaAddTaxPipe,
        PaCategoryFilterPipe,
        PaDiscountDisplayComponent,
        PaDiscountEditorComponent,
        PaDiscountPipe,
        PaDiscountAmountDirective,
        PaCellColorSwitchesDirective,
        PaValueDisplayDirective
    ],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, ModelModule],
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
    bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule {}
