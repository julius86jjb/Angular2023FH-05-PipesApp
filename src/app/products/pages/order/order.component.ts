import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Heroe | undefined | '';

  public heroes: Heroe[] = [
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Batam', canFly: false, color: Color.black },
    { name: 'Daredevil', canFly: false, color: Color.red },
    { name: 'Robin', canFly: false, color: Color.red },
    { name: 'Linterna Verde', canFly: true, color: Color.green },
  ]




  toogleUppercase() {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder (value: keyof Heroe) {
    this.orderBy = value
  }
}


