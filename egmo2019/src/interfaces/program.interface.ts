import {IProgramDay} from "./program-day.interface";

export interface IProgram {
    title: string,
    titleSuffix: string,
    dailyPrograms: IProgramDay[]

}