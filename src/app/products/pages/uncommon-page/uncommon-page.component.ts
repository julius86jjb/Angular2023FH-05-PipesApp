import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Fernando'
  public gender: 'male' | 'female' = 'male'

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }


  changeClient(): void {
    this.name = 'Melissa',
    this.gender = 'female'
  }

  //i18nPlural

  public clients: string[] = ['Maria', 'Paco', 'Juan', 'Pedro', 'Antonio', 'Juanita']
  public clientsMap = {
    '=0': 'Ningún cliente en espera',
    '=1': 'Actualmente tenemos 1 cliente en espera',
    'other': 'Actualmente tenemos # clientes en espera'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //keyValue Pipe

  public person = {
    name: 'Julio',
    city: 'Las Palmas, España',
    age: 37

  }

  //Async Pipe

  public myObservableTimer: Observable<number> = interval(2000)


  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data en la promesa.')
    }, 3500)
  })

}
