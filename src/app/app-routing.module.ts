import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceComponent } from './components/exercice/exercice.component';
import { ContainerExerciceFormComponent } from './components/container-exercice-form/container-exercice-form.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: 'exercise', component: ExerciceComponent },
  { path: 'exerciseForm', component: ContainerExerciceFormComponent },
  { path: 'bootstrapExercice', component: BootstrapComponent },
  { path: 'userListExecice', component: UserListComponent },
  { path: '', redirectTo:"exercise", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
