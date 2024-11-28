import { Component, Input, OnInit, OnChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  template: `
    <div class="container">
      <h2>Ciclo de Vida do Angular</h2>
      <p><strong>Entrada:</strong> {{ entrada }}</p>
      <ul>
        <li *ngFor="let evento of eventos">{{ evento }}</li>
      </ul>
    </div>
  `,
  styles: [
    `
      .container {
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 20px auto;
      }
    `
  ],
  standalone: true,
})
export class CicloVidaComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() entrada: string = '';
  eventos: string[] = [];

  constructor() {
    this.logEvento('Construtor');
  }

  ngOnChanges(): void {
    this.logEvento('ngOnChanges');
  }

  ngOnInit(): void {
    this.logEvento('ngOnInit');
  }

  ngDoCheck(): void {
    this.logEvento('ngDoCheck');
  }

  ngOnDestroy(): void {
    this.logEvento('ngOnDestroy');
  }

  private logEvento(hook: string): void {
    this.eventos.push(`${hook} chamado em ${new Date().toLocaleTimeString()}`);
  }
}

