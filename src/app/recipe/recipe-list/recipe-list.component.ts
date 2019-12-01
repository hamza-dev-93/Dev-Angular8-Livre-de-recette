import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
  // tslint:disable-next-line: max-line-length
  new Recipe('Family meal recipes', 'Kids and grownups will love these family dinners from Good Food, ', '../../../assets/img/1.jpg'),
  new Recipe('Puff pizza tart', 'Unroll the pastry onto a large baking sheet and prick all over with a fork. Spread over the pesto', '../../../assets/img/2.jpg'),
  new Recipe('Beanburger puffs', 'Preheat the oven to fan 180C/ conventional 200C/gas 6. In a large bowl).', '../../../assets/img/3.jpg'),



];

@Output() theRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }


  onRecipeSelect(recipe: Recipe) {
    this.theRecipe.emit(recipe);
  }

}
