import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from "../todo-list/todo-list.component"; 
import { CommonModule } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';

  todos: string[] = [];
  inputTodo: string = '';

  addTodo(){
    if(this.inputTodo.trim()){
      this.todos.push(this.inputTodo);
      this.inputTodo = '';
    }
  }
  deleteTodo(index: number){
    this.todos.splice(index,1);

  }
}
