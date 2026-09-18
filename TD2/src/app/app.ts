import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Etudiant } from "./etudiant/etudiant";
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Etudiant, FormsModule, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = "TD2";
  protected readonly resume = "Gestion des données dynamiques (suite et fin) & structures de documents";
  protected estAuth = signal(false);
  protected commentaireSeance = "";

  public constructor() {
    setTimeout(() => {this.estAuth.update((value) => true)}, 3000);
  }
  public tabEtudiants = [
    {
      nom : "Dupont",
      prenom : "Jean",
      present : true
    },
    {
      nom : "Martin",
      prenom : "Sophie",
      present : false
    },
    {
      nom : "Croute",
      prenom : "Marie",
      present : false
    }
  ];
  
  public rendTousPresents() {
    console.log("Présents");

    for (let index = 0; index < this.tabEtudiants.length; index++) {
      this.tabEtudiants[index].present = true;
      
    }
  }

}

bootstrapApplication(App);


