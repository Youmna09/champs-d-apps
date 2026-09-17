import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Etudiant } from "./etudiant/etudiant";
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [Etudiant, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = "TD2";
  protected readonly resume = "suite de la première application";
  protected estAuth = signal(false);
  protected commentaireSeance = "";

  public constructor() {
    setTimeout(() => {this.estAuth.update((value) => true)}, 3000);
  }
  
  public rendTousPresents() {
    console.log("Présents");

  }
}

bootstrapApplication(App);


