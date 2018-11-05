import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      [
        <app-header></app-header>,
        <app-landing></app-landing>,
        <app-initial-info></app-initial-info>,
        <app-program></app-program>,
        <app-useful-info></app-useful-info>,
        <app-contacts></app-contacts>,
        <app-footer></app-footer>
      ]
    );
  }
}
