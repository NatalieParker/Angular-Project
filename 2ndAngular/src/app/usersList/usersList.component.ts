import { Component } from "@angular/core";

@Component({
    selector: 'app-users-list',
    templateUrl: './usersList.component.html',
    styleUrl: './usersList.component.scss',
    standalone: false
})
export class UsersListComponent {
    newUserName: string = "";
    users = [
        {
            id: '1',
            name: "John",
            age: 13
        },
        {
            id: '2',
            name: "Rose",
            age: 15
        },
        {
            id: '3',
            name: "Dave",
            age: 17
        },
        {
            id: '4',
            name: "Jade",
            age: 19
        }
    ];

    removeUser(id: string): void {
        this.users = this.users.filter(user => user.id !== id)
        console.log("remove user", id);
    }

    setNewUserName(userName: Event): void {
        const input = userName.target as HTMLInputElement;
        const value = input?.value || "";
        this.newUserName = value;
    }

    addUser(): void {
        if (this.newUserName !== ""){
            const uniqueId = Math.random().toString(16);
            const newUser = {
                id: uniqueId,
                name: this.newUserName,
                age: 30
            };
            this.users.push(newUser);
            this.newUserName = "";
        }
    }
}