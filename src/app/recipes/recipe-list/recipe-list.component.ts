import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes;
  @Output() selectRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(recipe : Recipe) {
    console.log("selected recipe");
    console.log(recipe);
    this.selectRecipe.emit(recipe);
  }

}
