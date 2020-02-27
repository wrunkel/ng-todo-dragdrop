import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoForm: FormGroup;

  constructor() {
    this.todoForm = new FormGroup({
      todoInput: new FormControl('')
    });
  }

  // Transfer Items Between Lists
  MoviesList = [
    'Einkaufen',
    'Wäsche waschen',
    'Auto tanken',
    'Putzen',
    'Eltern Anrufen',
  ];

  MoviesWatched = [
  ];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  logTodo() {
    console.log(this.todoForm.value.todoInput);
    this.MoviesList.push(this.todoForm.value.todoInput);

  }
}
