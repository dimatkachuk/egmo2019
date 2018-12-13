import {Component, Prop } from '@stencil/core';
import {IAppUsefulInformation} from "../../interfaces/app-useful-information.interface";

@Component({
    tag: 'app-useful-information',
    styleUrl: 'app-useful-information.scss'
})
export class AppUsefulInformation {
    @Prop() viewState: IAppUsefulInformation;

    render() {
        return (
            <section class="app-useful-information">
                <h1>
                    {this.viewState.title}&nbsp;
                    <span>{this.viewState.subtitle}</span>
                </h1>
                <div class="app-useful-information__items-wrapper">
                    {
                        this.viewState.infoItems.map(item =>
                            (
                                <app-useful-information-item viewState={item}/>
                            )
                        )
                    }
                </div>
            </section>
        );
    }
}