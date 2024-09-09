import { Component } from '@angular/core';
import { QuadradoComponent } from '../../components/quadrado/quadrado.component';
import { Signal1Component } from '../../components/signal1/signal1.component';
import { AppComponent } from '../../app.component';
import { P1Component } from '../../components/p1/p1.component';

@Component({
  selector: 'app-primeiro',
  standalone: true,
  imports: [
    QuadradoComponent,
    Signal1Component,
    P1Component
  ],
  templateUrl: './primeiro.component.html',
  styleUrl: './primeiro.component.scss'
})
export class PrimeiroComponent {

}
