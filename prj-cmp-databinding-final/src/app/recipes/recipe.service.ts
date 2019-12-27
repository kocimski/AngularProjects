import {Recipe} from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

      recipes: Recipe[] = [
    new Recipe('A Tasty Schintzel', 
    'This is a delicious tasty schintzel - just awesome', 
    'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    [
        new Ingredient('meat' , 1),
     new Ingredient('French Fries', 20) 
]),
    new Recipe('Big Fat Burger', 
    'What can you have better?', 
    'https://upload.wikimedia.org/wikipedia/commons/9/9a/Big_Mac_hamburger.jpg',
    [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
    ])
  ];

  constructor(private slService: ShoppingListService){

  }

  getRecipes(){
      return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
    
  }
}