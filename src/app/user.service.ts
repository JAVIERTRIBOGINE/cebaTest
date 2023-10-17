import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { USERS } from './users.const';

@Injectable({
  providedIn: 'root',
})
export class Userservice {
  getUsers(): User[] {
    return USERS;
  }
  findUsers(search: string): User[] {
    return search === ''
      ? this.getUsers()
      : (this.getUsers().filter((user) =>
          user.email.includes(search),
        ) as User[]);
  }
}
