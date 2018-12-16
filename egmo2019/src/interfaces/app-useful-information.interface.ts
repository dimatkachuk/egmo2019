import {IAppUsefulInformationItem} from "./app-useful-information-item.interface";

export interface IAppUsefulInformation {
    title: string;
    subtitle: string;
    infoItems: Array<IAppUsefulInformationItem>
}