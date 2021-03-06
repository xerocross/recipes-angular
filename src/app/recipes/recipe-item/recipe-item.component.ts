import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Output() selectRecipe = new EventEmitter<void>();
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe() {
    this.selectRecipe.emit();
  }
}
