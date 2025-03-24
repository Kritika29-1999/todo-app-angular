import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  @Output() delete = new EventEmitter(); 
  @Input() name?: string;
  onDelete(){
    this.delete.emit();
  }

}
