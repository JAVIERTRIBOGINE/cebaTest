import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerExerciceFormComponent } from './container-exercice-form.component';

describe('ContainerExerciceFormComponent', () => {
  let component: ContainerExerciceFormComponent;
  let fixture: ComponentFixture<ContainerExerciceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContainerExerciceFormComponent],
    });
    fixture = TestBed.createComponent(ContainerExerciceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
