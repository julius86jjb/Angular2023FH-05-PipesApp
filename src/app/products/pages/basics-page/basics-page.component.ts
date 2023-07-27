import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'julius'
  public nameUpper: string = 'JULIUS'
  public fullName: string = 'JuLIUs'

  public customDate: Date = new Date();

}
