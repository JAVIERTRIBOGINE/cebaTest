import { AbstractControl, ValidationErrors } from "@angular/forms";

export function isNotToday(control: AbstractControl): ValidationErrors | null {
  const dateValue: Date = control.value || '';
  if ( new Date(dateValue) > new Date()) return { isAferToday: true}
  return null;
}
