import {IAppProgramDayActivity} from "./app-program-day-activity.interface";

export interface IAppProgramDay {
    title: string,
    date: string,
    weekDay: string,
    schedule: IAppProgramDayActivity[]
}