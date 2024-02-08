import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18nSelect
  public name: string = 'Joseph';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  public colaMap = {
    '=0': 'No hay más clientes esperando',
    '=1': 'Tenemos un cliente esperando',
    other: 'Actualmente hay # clientes esperando',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }
  //i18nPlural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Manuel',
    'Paula',
    'Antonio',
    'Ursula',
    'Claudia',
    'Adri',
    'Aaron',
  ];
  restarCliente(): void {
    this.clients.shift();
  }
  //keyValue
  public person = {
    name: 'Joseph',
    age: '36',
    address: 'Tenerife',
  };

  //asyncPipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('tenemos data en la promesa');
    }, 3500);
  });
}
