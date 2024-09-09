import { AsyncPipe, NgClass, NgFor, NgIf, NgStyle, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { QuadradoComponent } from '../quadrado/quadrado.component';

@Component({
  selector: 'app-p1',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf, NgFor, NgSwitch, AsyncPipe, QuadradoComponent],
  templateUrl: './p1.component.html',
  styleUrl: './p1.component.scss'
})
export class P1Component {
  public nome = 'jefe'
  public idade = 12
  public frutas$: Observable<string[]> =
    of(
      ['Maca','Laranja','Abacaxi']
    ).pipe(delay(500))

    public switchCondition = '1e0'
}
