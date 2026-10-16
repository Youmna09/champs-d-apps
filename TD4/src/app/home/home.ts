import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  /**
   * ajoutItem
   */
  public ajoutItem() {
    this.nbItems++;
    this.objectifs.push(this.objectifText);
  }
}
