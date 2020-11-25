import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
import { LoginComponent } from './Auth/login/login.component';
import { AddTodoComponent } from './Todo/add-todo/add-todo.component';
import { EditTodoComponent } from './Todo/edit-todo/edit-todo.component';
import { TodoListComponent } from './Todo/todo-list/todo-list.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'/list'},
  {path:'login', component: LoginComponent},
  // {path:'edit/:id', component: EditTodoComponent},
  {path: 'list', component: TodoListComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
