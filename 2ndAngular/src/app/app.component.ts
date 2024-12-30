import { Component, OnInit } from '@angular/core';
import { UserInterface } from './types/user.interface';
import { UserService } from './services/users.service';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  fromEvent,
  map,
  of,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = '2ndAngular';

  users: UserInterface[] = [];
  constructor(private userService: UserService) {}

  userList = [
    { id: '1', name: 'John', isActive: true },
    { id: '2', name: 'Dave', isActive: true },
    { id: '3', name: 'Rose', isActive: true },
  ];
  user$ = new BehaviorSubject<{ id: string; name: string } | null>(null);

  users$ = of(this.userList);
  usernames$ = this.users$.pipe(
    map((users) => users.map((users) => users.name))
  );
  filteredUsers$ = this.users$.pipe(
    filter((users) => users.every((user) => user.isActive))
  );

  data$ = combineLatest([
    this.users$,
    this.usernames$,
    this.filteredUsers$,
  ]).pipe(
    map(([users, usernames, filteredUsers]) => ({
      users,
      usernames,
      filteredUsers,
    }))
  );
  // documentClick$ = fromEvent(document, 'click');

  ngOnInit(): void {
    // this.documentClick$.subscribe((e) => {
    //   console.log('e', e);
    // });
    // setTimeout(() => {
    //   this.user$.next({ id: '1', name: 'John' });
    // }, 2000);
    // this.user$.subscribe((user) => {
    //   console.log('user', user);
    // });

    this.userService.getUsers().subscribe((users: UserInterface[]) => {
      this.users = users;
      console.log('users', users);
    });
  }

  removeUser(id: string): void {
    this.userService.removeUser(id).subscribe(() => {
      this.users = this.users.filter((user) => user.id !== id);
    });
  }

  addUser(name: string): void {
    this.userService.addUser(name).subscribe((newUser) => {
      this.users.push(newUser);
    });
    // const uniqueId = Math.random().toString(16);
    // const newUser = {
    //     id: uniqueId,
    //     name,
    //     age: 30
    // };
  }
}
