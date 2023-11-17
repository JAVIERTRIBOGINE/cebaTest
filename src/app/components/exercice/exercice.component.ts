import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil, delay, switchMap, of, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Userservice } from 'src/app/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercice',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnDestroy {
  users: User[] = this.userService.getUsers();
  query = '';
  querySubject: Subject<string> = new Subject<string>();
  onDestroy$: Subject<boolean> = new Subject<boolean>();
  title = 'cebaTest';
  search$: Observable<User[]> = this.querySubject.asObservable().pipe(
    takeUntil(this.onDestroy$),
    delay(1000),
    switchMap((q: string) => of(this.userService.findUsers(q))),
  );

  constructor(private userService: Userservice) {
    this.search$.subscribe({
      next: (res: User[]) => (this.users = res),
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
  }

  // *************************
  // FIRST COMMIT
  // *************************

    // *************************
  // SECOND COMMIT
  // *************************

  // *******************
  // exercise code
  // *******************

  // ngOnInit(): void {
  //   //   this.querySubject.asObservable().pipe(
  //   //   delay(1000),
  //   //   switchMap((q:string) =>
  //   //       of(this.userService.findUsers(q))
  //   //   )
  //   // ).subscribe({
  //   //   next: (res) => this.users = res
  //   // });
  // }

  // *******************

}
