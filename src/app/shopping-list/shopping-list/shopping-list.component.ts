import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatos", 10)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
