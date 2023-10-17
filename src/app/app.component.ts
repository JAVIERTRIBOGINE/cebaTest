import { Component, OnDestroy } from '@angular/core';
import { Userservice } from './user.service';
import { of, Subject, switchMap, delay, takeUntil, Observable } from 'rxjs';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  // users: User[] = this.userService.getUsers();
  // query = '';
  // querySubject: Subject<string> = new Subject<string>();
  // onDestroy$: Subject<boolean> = new Subject<boolean>();
  // title = 'cebaTest';
  // search$: Observable<User[]> = this.querySubject.asObservable().pipe(
  //   takeUntil(this.onDestroy$),
  //   delay(1000),
  //   switchMap((q: string) => of(this.userService.findUsers(q))),
  // );

  // constructor(private userService: Userservice) {
  //   this.search$.subscribe({
  //     next: (res: User[]) => (this.users = res),
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.onDestroy$.next(true);
  // }
}
