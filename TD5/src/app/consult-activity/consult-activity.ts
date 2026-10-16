import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from '../services/activite';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-consult-activity',
  imports: [FormsModule],
  templateUrl: './consult-activity.html',
  styleUrl: './consult-activity.scss',
})
export class ConsultActivity {
  protected id = Number();
  protected name = String();
  protected modif = "";
  protected modifMode = false;


  public constructor(
    protected routeurActive : ActivatedRoute, 
    protected serviceActivite: Activite, 
    protected routeur : Router)
  
    {
    this.id = this.routeurActive.snapshot.params["id"];
    this.name = this.routeurActive.snapshot.params["name"];
    this.modif = this.serviceActivite.objectifs[this.id];
  }

  public supprimeElem(){
    this.serviceActivite.removeItem(this.id);
    this.routeur.navigate([""]);
  }

  public setModifMode(){
    this.modifMode = !this.modifMode;
  }

  public modifElem(){
    this.serviceActivite.editItem(this.id, this.modif);
    this.modifMode = !this.modifMode;
  }

  
}
