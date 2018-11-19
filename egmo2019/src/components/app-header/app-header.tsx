import {Component } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss'
})
export class AppHeader {

  render() {
    return (
      <header class="wrapper">
        <div class="header-languages">
          <div class="header-language">ENG</div>
          <div class="header-language">UKR</div>
        </div>
        <div class="header-logo-container">
          <div class="header-logo-disclaimer">
            EGMO 2019
          </div>
          <div class="header-logo">
          </div>
          <div class="header-logo-disclaimer">
            UKRAINE, KYIV
          </div>
        </div>
        <div class="header-menu">
        </div>
      </header>
    );
  }
}
