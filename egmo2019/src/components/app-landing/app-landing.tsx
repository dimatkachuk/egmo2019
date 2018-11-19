import {Component } from '@stencil/core';

@Component({
  tag: 'app-landing',
  styleUrl: 'app-landing.scss'
})
export class AppLanding {

  render() {
    return (
      <section class="landing-section">
        <p class="landing-title">
          WELCOME TO <br/>
          EUROPEAN GIRLS`MATHEMATICAL OLYMPIAD <br/>
          <span>2019</span>
        </p>
      </section>
    );
  }
}
