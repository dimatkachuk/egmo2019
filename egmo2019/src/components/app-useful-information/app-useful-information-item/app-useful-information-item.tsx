import {Component, Prop} from '@stencil/core';

@Component({
    tag: 'app-useful-information-item',
    styleUrl: 'app-useful-information-item.scss'
})
export class AppUsefulInformationItem {
    @Prop() viewState: any;

    render() {
        return (
            <div class="app-useful-information-item">
                <h2>{this.viewState.title}</h2>
                <p>{this.viewState.description}</p>
            </div>
        );
    }
}