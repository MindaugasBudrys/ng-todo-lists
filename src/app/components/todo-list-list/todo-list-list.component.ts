import { Component, ViewChild, ElementRef } from '@angular/core';
import { TodoList } from 'src/app/models/TodoList';

@Component({
  selector: 'app-todo-list-list',
  templateUrl: './todo-list-list.component.html',
  styleUrls: ['./todo-list-list.component.scss']
})
export class TodoListListComponent {

  @ViewChild('listInput', { static: false }) listInput: ElementRef<
  HTMLInputElement
>;

  private list: TodoList[] = [];

  get lists(): TodoList[] {
    return this.list;
  }

  //load clicked list
  goToList(){
    //
  }
  
  addList(title: string): void {
    if (!title) {
      return;
    }
    this.list = [...this.list, TodoList.create(title)];
    this.listInput.nativeElement.value = '';
  }

}
