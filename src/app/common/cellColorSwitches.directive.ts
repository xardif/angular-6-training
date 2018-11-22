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
import { LogService, LOG_SERVICE, LogLevel, SpecialLogService } from "./log.service";

@Directive({
    selector: "table",
    providers: [{
        provide: LogService,
        useFactory: PaCellColorSwitchesDirective.createLogger
    }]
})
export class PaCellColorSwitchesDirective {

    static createLogger(): LogService {
        let logger = new SpecialLogService();
        return logger;
    }

}
