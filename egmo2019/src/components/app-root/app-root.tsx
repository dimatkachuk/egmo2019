import {Component } from '@stencil/core';
import {APP_USEFUL_INFORMATION_STATE_ENG} from "../../consts/app-useful-information.const";
import {APP_CONTACTS_STATE_ENG} from "../../consts/app-contacts.const";

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
        <app-program></app-program>,
        <app-useful-information viewState={APP_USEFUL_INFORMATION_STATE_ENG}></app-useful-information>,
        <app-contacts viewState={APP_CONTACTS_STATE_ENG}></app-contacts>,
        <app-footer></app-footer>
      ]
    );
  }
}
