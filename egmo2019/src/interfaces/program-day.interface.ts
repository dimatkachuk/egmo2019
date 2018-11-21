import {IProgramDayActivity} from "./program-day-activity.interface";

export interface IProgramDay {
    title: string,
    index: number,
    date: string,
    weekDay: string,
    schedule: IProgramDayActivity[]
}