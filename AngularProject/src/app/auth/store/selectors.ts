import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../types/appState.interface";
import { AuthStateInterface } from "../types/authState.interface";

const authFeatureSelector = (state: AppStateInterface) => state.auth;

export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isSubmitting
);
