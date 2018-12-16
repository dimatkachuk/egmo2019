import { Component, Prop } from '@stencil/core';
import {IAppProgram} from "../../interfaces/app-program.interface";

@Component({
    tag: 'app-program',
    styleUrl: 'app-program.scss'
})
export class AppProgram {

    @Prop() viewState: IAppProgram;

    render() {
        return (
            <section class="program">
                <div class="program-content wrapper">
                    <p class="program-title">
                        {this.viewState.title}&nbsp;<span>{this.viewState.titleSuffix}</span>
                    </p>
                    <div class="program-container flex-center">
                        {/*<div class="program-baseline"></div>*/}
                        <div class="program-schedule flex-column-between">
                            {
                                this.viewState.dailyPrograms.map((day, i) =>
                                    <div class="program-schedule-item flex">
                                        <div class="item-circle"></div>
                                        <div class="program-schedule-item-left flex-column">
                                            <p class="item-title">{day.title}&nbsp;{i+1}</p>
                                            <p class="item-date">{day.date}</p>
                                            <p class="item-weekday">{day.weekDay}</p>
                                        </div>
                                        <div class="program-schedule-item-right flex-column">
                                            {
                                                day.schedule.map((event) =>
                                                    <p class="day-activity">{event.name}&nbsp;({event.time})</p>
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
