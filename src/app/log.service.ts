import { Injectable } from "@angular/core";

export enum LogLevel {
    DEBUG,
    INFO,
    ERROR
}
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
