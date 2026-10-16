import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-consult-activity',
  imports: [],
  templateUrl: './consult-activity.html',
  styleUrl: './consult-activity.scss',
})
export class ConsultActivity {
  protected id = String();
  protected name = String();
  public constructor(protected routeur : ActivatedRoute){
    this.id = this.routeur.snapshot.params["id"];
    this.name = this.routeur.snapshot.params["name"];
  }
}
