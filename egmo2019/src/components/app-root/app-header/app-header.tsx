import { Component } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss'
})
export class AppRoot {

  render() {
    return (
        <div class='header-content wrapper'>
          <div class='header-languages'>
            <div class='header-language'>EN</div>
            <div class='header-language'>UA</div>
          </div>
          <div class='header-logo'>
          </div>
          <div class='header-menu'></div>
        </div>
    );
  }
}
