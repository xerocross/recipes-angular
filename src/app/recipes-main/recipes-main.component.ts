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
      new Recipe("A Test Recipe", "This is simply a test", "https://www.simplyrecipes.com/thmb/IbY_MK3pA1G_ZHzWltgZCxe_OUk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-vertical-a-1600-0eafb4cd27b74617abb36379751eed51.jpg"),
      new Recipe("Black Beans", "A black beans recipe.", ""),
      new Recipe("Mashed potatoes", "A mashed potatoes recipe.", "")
    ];

    this.selectedRecipe = this.recipes[0];
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
