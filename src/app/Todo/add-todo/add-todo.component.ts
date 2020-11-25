import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/Services/crud.service';
import { MAT_DIALOG_DATA, MatDialog,MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import {FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Input() todoObj = { title: '', description: '' }
  textFormControl = new FormControl('', [
    Validators.required,
  ]);
  descriptionFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();
  constructor(
    public crudService: CrudService, 
    public router: Router,
    public dialogRef: MatDialogRef<AddTodoComponent>,
  ) { }

  ngOnInit(): void { }

  addTodo(data: any) {
    this.crudService.addTodo(this.todoObj).subscribe((data: {}) => {
      window.location.reload();
    })
  }

  cancel():void {
    this.dialogRef.close();
}

}