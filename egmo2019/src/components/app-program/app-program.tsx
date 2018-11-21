import { Component } from '@stencil/core';

@Component({
    tag: 'app-program',
    styleUrl: 'app-program.scss'
})
export class AppProgram {

    render() {
        return (
            <section class="program">
                <div class="program-content wrapper">
                    <p class="program-title"></p>
                    <div class="program-baseline">

                    </div>
                </div>
            </section>
        );
    }
}
