import { Component } from '@angular/core';
import { UserInterface } from './types/user.interface';
import { UserService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '2ndAngular';

  users: UserInterface[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe((users: UserInterface[]) => {
      console.log('users', users);
      this.users = users;
    })
  }

  removeUser(id: string): void {
    this.userService.removeUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }

  addUser(name: string): void {
    this.userService.addUser(name).subscribe(newUser => {
        this.users.push(newUser);
    })
        // const uniqueId = Math.random().toString(16);
        // const newUser = {
        //     id: uniqueId,
        //     name,
        //     age: 30
        // };
  }
}
