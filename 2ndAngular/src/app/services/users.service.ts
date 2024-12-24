import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInterface } from "../types/user.interface";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<UserInterface[]> {
        return this.http
            .get<UserInterface[]>('http://localhost:3000/users');
    }

    removeUser(id: string): Observable<{}> {
        return this.http.delete('http://localhost:3000/users/' + id);
        // return this.http.get<UserInterface[]>(id);
    }

    addUser(name: string): Observable<UserInterface> {
        const user = {
            name,
            age: 30
        }
        return this.http
            .post<UserInterface>('http://localhost:3000/users', user);
    }
}