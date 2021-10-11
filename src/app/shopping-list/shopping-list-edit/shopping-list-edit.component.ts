import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("nameInput", {static: false}) ingredientNameInputRef : ElementRef;
  @ViewChild("amountInput", {static: false}) ingredientAmtInputRef : ElementRef;
  @Output("addIngredient") ingredientEmitter = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    this.ingredientEmitter.emit(new Ingredient(this.ingredientNameInputRef.nativeElement.value, this.ingredientAmtInputRef.nativeElement.value))
  }

  onClear(){}

}
