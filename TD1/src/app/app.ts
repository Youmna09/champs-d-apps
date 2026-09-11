import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Etudiant } from "./etudiant/etudiant";
import { bootstrapApplication } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  imports: [Etudiant],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = "TD1";
  protected readonly resume = "prise en main d'Angular, première application";
  protected estAuth = signal(false);

  public constructor() {
    setTimeout(() => {this.estAuth.update((value) => true)}, 3000);
  }
  
  public rendTousPresents() {
    console.log("Présents");

  }
}

bootstrapApplication(App);


