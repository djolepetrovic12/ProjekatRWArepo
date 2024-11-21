import { createReducer, on } from "@ngrx/store";
import { Flashcard } from "../../models/flashcard";
import * as Actions from "../actions/flashcard.action";

export interface FlashcardState {
    flashcards: Flashcard[];
    selectedFlashcard: number;
}

export const InitialState : FlashcardState = {
    flashcards : [],
    selectedFlashcard : -1,
}

//kad hoces da iskoristis store moras da ga injectujes u constructor
//i da navedes da je tipa AppState

export const flashcardReducer = createReducer(
    InitialState,
    on(Actions.selectFlashcard, (state,{fcID}) => {
        return {
            ...state,
            selectedFlashCard: fcID,
        };
    })
)