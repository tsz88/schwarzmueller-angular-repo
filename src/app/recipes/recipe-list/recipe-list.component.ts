import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is the description',
      'https://upload.wikimedia.org/wikipedia/commons/b/bb/Yummy_brunch%21.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
