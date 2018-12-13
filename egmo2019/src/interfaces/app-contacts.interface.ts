import {IAppContactsItem} from "./app-contacts-item.interface";

export interface IAppContacts {
    title: string;
    subtitle: string;
    smallSubtitle: string;
    contacts: Array<IAppContactsItem>;
}