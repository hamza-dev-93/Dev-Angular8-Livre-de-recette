import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
title = "bedoui hammouda";
  recipes: Recipe[] = [
  // tslint:disable-next-line: max-line-length
  new Recipe('test recipe', 'this is just a description of test recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/gfkids_maccheese.jpg')
];

  constructor() { }

  ngOnInit() {
  }

}
