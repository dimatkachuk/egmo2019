import {Component } from '@stencil/core';

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
        <app-useful-information></app-useful-information>,
        <app-contacts></app-contacts>,
        <app-footer></app-footer>
      ]
    );
  }
}
