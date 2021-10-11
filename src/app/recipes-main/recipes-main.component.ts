import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipes-main',
  templateUrl: './recipes-main.component.html',
  styleUrls: ['./recipes-main.component.scss']
})
export class RecipesMainComponent implements OnInit {
  recipes : Recipe[] 
  selectedRecipe : Recipe;

  constructor() { 
    this.recipes = [
      new Recipe("A Test Recipe", "This is simply a test", "assets/recipes/recipe1.jpg"),
      new Recipe("Black Beans", "A black beans recipe.", "assets/recipes/recipe2.jpg"),
      new Recipe("Mashed potatoes", "A mashed potatoes recipe.", "assets/recipes/recipe3.jpg")
    ];

    this.recipes[0].ingredients = [
      new Ingredient("test ingredient 1", 1),
      new Ingredient("test ingredient 2", 1)
    ]

  }

  ngOnInit(): void {
  }


  onSelectRecipe(recipe : Recipe) {
    this.selectedRecipe = recipe;
  }

}
