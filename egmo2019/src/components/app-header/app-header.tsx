import { Component } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss'
})
export class AppHeader {

  toggleMenu() {
    document.getElementById('header-burger').classList.toggle('open');
  }

  render() {
    return (
      <header>
        <div class="header-content wrapper">
          <div class="header-languages">
            <div class="header-language active">ENG</div>
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
            <div id="header-burger" class="header-menu-button" onClick={() => {this.toggleMenu()}}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
