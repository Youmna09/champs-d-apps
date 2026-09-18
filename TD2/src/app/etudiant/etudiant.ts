import { Component, computed, input, model, signal } from '@angular/core';
import { NgIf, NgFor, NgStyle, NgClass } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  imports: [NgIf, NgStyle, NgClass],
  selector: 'app-etudiant',
  styleUrl: './etudiant.scss',
  templateUrl: './etudiant.html',
})
export class Etudiant {
  protected readonly retNomEtu = () => "Bon";
  protected readonly retPrenomEtu = () => "Jean";
  
  nomEtu = input<string>();
  prenomEtu = input<string>();
  estPresent = model<boolean>();
  commentaire = input<string>();


  getColorEtu() {
    if (this.estPresent()) {
      return {
        class : "list-group-item-success",
        color : "blue"
      };
    }else {
      return {
        class : "list-group-item-danger",
        color : "red"
      };
    } 
  }

  setPresence() {
    this.estPresent.update(() => true);

  }

  setAbscence() {
    this.estPresent.update(() => false);

  }
}
