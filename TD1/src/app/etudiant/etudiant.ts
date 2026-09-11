import { Component, input, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-etudiant',
  styleUrl: './etudiant.scss',
  templateUrl: './etudiant.html',
})
export class Etudiant {
  protected readonly retNomEtu = () => "Bon";
  protected readonly retPrenomEtu = () => "Jean";
  protected statutEtu = signal("absent");

  estPresent = input<boolean>();
}
