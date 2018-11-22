import { Injectable, InjectionToken } from "@angular/core";

export enum LogLevel {
    DEBUG,
    INFO,
    ERROR
}

export const LOG_SERVICE = new InjectionToken("logger");

@Injectable()
// @Injectable({
//     providedIn: "root"
// })
export class LogService {
    minLogLevel: LogLevel = LogLevel.INFO;

    logInfoMessage(message: string) {
        this.logMessage(LogLevel.INFO, message);
    }

    logDebugMessage(message: string) {
        this.logMessage(LogLevel.DEBUG, message);
    }

    logErrorMessage(message: string) {
        this.logMessage(LogLevel.ERROR, message);
    }
    logMessage(level: LogLevel, message: string): any {
        if (level >= this.minLogLevel) {
            console.log(LogLevel[level] + " " + message);
        }
    }
}
