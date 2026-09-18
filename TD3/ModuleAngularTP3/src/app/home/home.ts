import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  protected nbItems = Number(4);
  protected btnText = "Ajouter un élément";
  protected objectifText = "Mon nouvel objectif";
}
