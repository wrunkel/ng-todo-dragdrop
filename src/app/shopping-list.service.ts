import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export interface ShoppingListItem {
  title: string;
  amount: number;
}

export class ShoppingListService {

  constructor() { }
}
