import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { isSubmittingSelector } from "../../store/selectors";

import { registerAction } from "../../store/actions";
import { AppStateInterface } from "../../types/appState.interface";

@Component({
    selector: "mc-register",
    templateUrl: "./register.component.html",
    styleUrl: "./register.component.scss",
    standalone: false
})
export class RegisterComponent implements OnInit {
    form: FormGroup = new FormGroup({});
    isSubmitting$!: Observable<boolean>;

    constructor(
        private fb: FormBuilder,
        private store: Store<AppStateInterface>
    ) {}

    ngOnInit(): void {
        this.initializeForm();
        this.initializeValues();
    }

    initializeForm(): void {
        console.log("Initialize Form");
        this.form = this.fb.group({
            username: ["", Validators.required],
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.isSubmitting$.subscribe((data) =>
            console.log("IS SUBMITTING: ", data)
        );
        // this.store
        //     .select(isSubmittingSelector)
        //     .subscribe((data) => console.log("DATA: ", data));
    }

    onSubmit(): void {
        console.log("submit", this.form.value, this.form.valid);
        this.store.dispatch(registerAction(this.form.value));
    }
}
