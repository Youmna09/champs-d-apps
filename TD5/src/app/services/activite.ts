import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Activite {
  public objectifs = Array();

  public removeItem(index : number){
    this.objectifs.splice(index, 1);
  }

  public editItem(index : number, edit : String){
    this.objectifs[index] = edit;
  }
}
