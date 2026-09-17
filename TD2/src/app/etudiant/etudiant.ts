import { Component, computed, input, signal } from '@angular/core';
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
  estPresent = input<boolean>();
  commentaire = input<string>();
  
  protected statutEtu = this.estPresent();
  getColorEtu() {
    if (this.statutEtu) {
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
    this.statutEtu = true;
  }
}
