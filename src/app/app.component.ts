import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeCompocnent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeCompocnent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  exibirHome:boolean = true;

  destruir() {
    this.exibirHome = false;
  }
}
