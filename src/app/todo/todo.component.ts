import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}
  todoItems: TodoItem[] = [];
  todoItem: string = '';
  isTodoListEmpty!: boolean;

  ngOnInit(): void {
    // this.todoItems = [
    //   {
    //     todoId: 1,
    //     todoText: 'Do homeWork',
    //     isCompleted: false,
    //     buttonText: 'Done',
    //   },
    //   {
    //     todoId: 2,
    //     todoText: 'Do house work',
    //     isCompleted: false,
    //     buttonText: 'Done',
    //   },
    // ];
    this.isTodoListEmpty = true;
  }
  addTodo() {
    console.log('button clicked');
    if (this.todoItem != '') {
      console.log('adding the todoText - ', this.todoItem);
      let todoObj: TodoItem = {
        todoId: this.todoItems.length,
        todoText: this.todoItem,
        isCompleted: false,
        buttonText: 'Done',
      };
      this.todoItems.push(todoObj);
      this.todoItem = '';
      this.isTodoListEmpty = false;
    }
  }
  completeTodo(id: number) {
    if (this.todoItems[id].isCompleted) {
      this.todoItems[id].buttonText = 'Done';
      this.todoItems[id].isCompleted = false;
    } else {
      this.todoItems[id].buttonText = 'Undo';
      this.todoItems[id].isCompleted = true;
    }
  }
  deleteTodo(id: number) {
    this.todoItems.splice(id, 1);
  }
}
