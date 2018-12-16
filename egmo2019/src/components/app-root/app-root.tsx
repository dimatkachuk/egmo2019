import { Component } from '@stencil/core';
import {APP_PROGRAM_STATE_ENG} from "../../consts/program.const";

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {

  render() {
    return (
      [
        <app-header></app-header>,
        <app-landing></app-landing>,
        <app-about></app-about>,
        <app-program viewState={APP_PROGRAM_STATE_ENG}></app-program>,
        <app-useful-information></app-useful-information>,
        <app-contacts></app-contacts>,
        <app-footer></app-footer>
      ]
    );
  }
}
