import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activite } from '../services/activite';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  public constructor(public routeur : Router, protected serviceActivite : Activite){
  }
}
