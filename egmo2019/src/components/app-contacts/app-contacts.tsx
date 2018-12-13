import {Component, Prop} from '@stencil/core';
import {IAppContacts} from "../../interfaces/app-contacts.interface";

@Component({
    tag: 'app-contacts',
    styleUrl: 'app-contacts.scss'
})
export class AppContacts {
    @Prop() viewState: IAppContacts;

    render() {
        return (
            <section class="app-contacts">
                <h2>{this.viewState.title}</h2>
                <h1>
                    {this.viewState.subtitle}&nbsp;
                    <span>{this.viewState.smallSubtitle}</span>
                </h1>
                <div class="app-contacts__items-wrapper">
                    {
                        this.viewState.contacts.map(contact =>
                            (
                                <app-contacts-item viewState={contact}/>
                            )
                        )
                    }
                </div>
            </section>
        );
    }
}