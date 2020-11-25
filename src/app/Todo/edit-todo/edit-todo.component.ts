import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/Services/crud.service';
import { MAT_DIALOG_DATA, MatDialog,MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  textFormControl = new FormControl('', [
    Validators.required,
  
  ]);
  descriptionFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  // id = this.actRoute.snapshot.params['id'];
  todoObj: any = {};

  form: FormGroup;
  description:string;
  id: any;

  constructor(
    public crudService: CrudService,
    public actRoute: ActivatedRoute,
    public router: Router,
    public dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id}
    
  ) {

    this.id =this.data.id
   }


  ngOnInit() { 
    this.crudService.getSingleTodo(this.id).subscribe((res: {}) => {
      this.todoObj = res;
     console.log(this.id)
    });

  }



close():void {
    this.dialogRef.close(this.data);
}
  save(id, data) {
    if(window.confirm('Yes, please...')){
      this.crudService.updateTodo(this.id, data).subscribe(res => {
        window.location.reload();
      })
    }
  }
}
