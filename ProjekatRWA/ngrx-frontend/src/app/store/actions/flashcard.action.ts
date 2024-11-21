import { createAction, props } from '@ngrx/store';


export const loadFlashcards = createAction("load flashcards");
export const loadFlashcardsSuccess = createAction("load flashcards success");
export const selectFlashcard = createAction("select a Flashcard", props<{fcID:number}>());