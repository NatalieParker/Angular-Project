import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-users-list',
    templateUrl: './usersList.component.html',
    styleUrl: './usersList.component.scss',
    standalone: false
})
export class UsersListComponent {
    @Input() users: {id: string; name: string; age: number}[] = [];
    @Output() removeUserEvent = new EventEmitter();
    @Output() addUserEvent = new EventEmitter();
    newUserName: string = "";

    setNewUserName(userName: Event): void {
        const input = userName.target as HTMLInputElement;
        const value = input?.value || "";
        this.newUserName = value;
    }

    addUser(): void {
        if (this.newUserName !== ""){
            this.addUserEvent.emit(this.newUserName);
            this.newUserName = "";
        }
    }
}