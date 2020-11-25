import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './Todo/add-todo/add-todo.component';
import { EditTodoComponent } from './Todo/edit-todo/edit-todo.component';
import { TodoListComponent } from './Todo/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    EditTodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule ,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
