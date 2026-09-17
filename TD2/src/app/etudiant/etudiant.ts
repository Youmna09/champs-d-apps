import { Component, input, signal } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  imports: [NgIf],
  selector: 'app-etudiant',
  styleUrl: './etudiant.scss',
  templateUrl: './etudiant.html',
})
export class Etudiant {
  protected readonly retNomEtu = () => "Bon";
  protected readonly retPrenomEtu = () => "Jean";
  protected statutEtu = signal("absent");

  nomEtu = input<string>();
  prenomEtu = input<string>();
  estPresent = input<boolean>();
  commentaire = input<string>();
}
