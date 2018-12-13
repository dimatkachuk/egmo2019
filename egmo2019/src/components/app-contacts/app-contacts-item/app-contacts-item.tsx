import {Component, Prop} from '@stencil/core';
import {IAppContactsItem} from "../../../interfaces/app-contacts-item.interface";

@Component({
    tag: 'app-contacts-item',
    styleUrl: 'app-contacts-item.scss'
})
export class AppContactsItem {
    @Prop() viewState: IAppContactsItem;

    render() {
        return (

            <div class="app-contacts-item">
                <img src={this.viewState.imgUrl}/>
                <h3>{this.viewState.fullName}</h3>
                <p>Tel:&nbsp;{this.viewState.telNumber}</p>
                <p>Email:&nbsp;{this.viewState.email}</p>
            </div>
        );
    }
}