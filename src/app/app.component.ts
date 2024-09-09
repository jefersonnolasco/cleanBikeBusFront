import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { P1Component } from './components/p1/p1.component';
import { QuadradoComponent } from './components/quadrado/quadrado.component';
import { Signal1Component } from './components/signal1/signal1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    P1Component,
    QuadradoComponent,
    Signal1Component],
  template: `
    <router-outlet />
  `,
  styles: `
   h2 {
      color: red;
    }
  `
})
export class AppComponent {
  title = 'no-name';
}
