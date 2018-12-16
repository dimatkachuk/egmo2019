import {IAppProgramDay} from "./app-program-day.interface";

export interface IAppProgram {
    title: string,
    titleSuffix: string,
    dailyPrograms: IAppProgramDay[]

}