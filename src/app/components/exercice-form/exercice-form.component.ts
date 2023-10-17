import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { isNotToday } from 'src/app/utils';
import { FormUser } from 'src/app/models/form-user.model';

@Component({
  selector: 'app-exercice-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './exercice-form.component.html',
  styleUrls: ['./exercice-form.component.css'],
})
export class ExerciceFormComponent {
  @Output()
  postFormEvent = new EventEmitter<FormUser>();
  form: FormGroup = this.formBuilder.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    birthday: [new Date(), isNotToday],
    address: this.formBuilder.group({
      zip: [null, Validators.required],
      city: ['', Validators.pattern(/^[a-zA-Z ]+$/)]
    })
  })
  constructor(private formBuilder: FormBuilder) {}

  get invalidForm() {
    return !this.form.valid;
    // return false;
  }

  doSubmit(): void {
    console.log("form:", this.form);
    this.postFormEvent.emit(this.form.value);
  }
}
