import { Component, computed, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-signal1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signal1.component.html',
  styleUrl: './signal1.component.scss'
})
export class Signal1Component {
  firstName = signal('')
  lastName = signal('')
  nome1 = '1'
  nome2 = '2'

  public fullName = computed( () => {
    return this.firstName()+ ' ' + this.lastName()
  })

  public array = signal([1])

  constructor(){}

  public updateName() {
    this.firstName.set(this.nome1)
    this.lastName.set(this.nome2)
  }

  public updateArray() {
    this.array.update((oldValues: number[]) => {
      return [...oldValues, oldValues.length+1]
    })
  }
}
