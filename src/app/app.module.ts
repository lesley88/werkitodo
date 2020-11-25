import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './Auth/login/login.component';
import { EditTodoComponent } from './Todo/edit-todo/edit-todo.component';
import { AddTodoComponent } from './Todo/add-todo/add-todo.component';
import { MatTableModule } from '@angular/material/table';
import { TodoListComponent } from './Todo/todo-list/todo-list.component';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { appInitializer } from './initalisers/appInitailier';
import { AuthService } from './Auth/auth.service';
import { JwtInterceptor } from './Auth/interceptor';
import {UnauthorizedInterceptor} from './Auth/unauthorised';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditTodoComponent,
    AddTodoComponent,
    TodoListComponent,
    HeaderComponent,
    

    
  ],
  imports: [
    FormsModule,
ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
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
    MatInputModule,
    MatIconModule,
    MatDialogModule,
  
  
  ],
  exports: [

  ],
  // providers: [ {
  //   provide: APP_INITIALIZER,
  //   useFactory: appInitializer,
  //   multi: true,
  //   deps: [AuthService],
  // },
  // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: UnauthorizedInterceptor,
  //   multi: true,
  // },],
  bootstrap: [AppComponent],
  entryComponents:[EditTodoComponent]
})
export class AppModule { }
