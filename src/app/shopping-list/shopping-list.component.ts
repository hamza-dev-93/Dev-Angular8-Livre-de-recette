import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Strl pate and tomate', 250),
    new Ingredient('Poire sel and potatos', 400)
  ]

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

  }

}
