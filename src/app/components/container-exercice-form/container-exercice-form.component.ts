import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciceFormComponent } from '../exercice-form/exercice-form.component';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { FormUser } from 'src/app/models/form-user.model';

@Component({
  selector: 'app-container-exercice-form',
  standalone: true,
  imports: [CommonModule, ExerciceFormComponent],
  templateUrl: './container-exercice-form.component.html',
  styleUrls: ['./container-exercice-form.component.css'],
})
export class ContainerExerciceFormComponent {
  formUser!: FormUser;

  formData(event: FormUser): void {
    this.formUser = event;
  }
}
