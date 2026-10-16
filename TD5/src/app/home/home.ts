import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Activite } from '../services/activite';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  protected nbItems = Number(0);
  protected btnText = "Ajouter un élément";
  protected objectifText = String();

  constructor(private monRouteur : Router, protected serviceActivite : Activite){

  }

  public ajoutItem() {
    this.nbItems++;
    this.serviceActivite.objectifs.push(this.objectifText);
    /* setTimeout(() => {
      this.monRouteur.navigate(["/about"]);
    }, 1000); */
  }

  public consultAct(id : Number) {
    setTimeout(() => {
      this.monRouteur.navigate(["consultAct", id]);
    }, 1000);
  }
}
