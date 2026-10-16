import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  protected nbItems = Number(0);
  protected btnText = "Ajouter un élément";
  protected objectifText = String();
  protected objectifs = Array();

  constructor(private monRouteur : Router){

  }

  /**
   * ajoutItem
   */
  public ajoutItem() {
    this.nbItems++;
    this.objectifs.push(this.objectifText);
    setTimeout(() => {
      this.monRouteur.navigate(["/about"]);
    }, 1000);
  }
}
