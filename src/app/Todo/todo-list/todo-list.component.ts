import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService, Todo } from 'src/app/Services/crud.service';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tableColumns  :  string[] = ['ID','title', 'description','createdAt', 'updatedAt','edit', 'delete'];
  index: number;
  id: number;
  Todos: any = [];
 
  constructor(
    public crudService: CrudService, public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.crudService.getTodos().subscribe((result)=>{
      this.Todos =result
   console.log(this.Todos)
    })
  }

  fetchTodos() {
    return this.crudService.getTodos().subscribe((res) => {
      this.Todos = res;
      console.log(this.Todos)
    })
  }

  delete(id) {
    if (window.confirm('Really?')){
      this.crudService.deleteTodo(id).subscribe(res => {
        this.fetchTodos()
      })
    }
  }

  

editDialog(id) {
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  dialogConfig.data = {
      id: id,
  };

  this.dialog.open(EditTodoComponent, dialogConfig);
  
  const dialogRef = this.dialog.open(EditTodoComponent, dialogConfig);

  
  dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
  );    
}

addDialog() {
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  dialogConfig.data = {
      
  };

  this.dialog.open(AddTodoComponent, dialogConfig);
  
  const dialogRef = this.dialog.open(AddTodoComponent, dialogConfig);

  
  dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
  );    
}

}
