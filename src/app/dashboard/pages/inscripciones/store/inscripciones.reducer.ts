import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionesActions } from './inscripciones.actions';
import { InscripcionWithAll } from '../models';

export const inscripcionesFeatureKey = 'inscripciones';

export interface State {
  loading: boolean;
  inscripciones: InscripcionWithAll[];
  error: unknown;
}

export const initialState: State = {
  loading: false,
  inscripciones: [],
  error: null,
};

export const reducer = createReducer<State>(
  initialState,

  on(InscripcionesActions.loadInscripciones, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(InscripcionesActions.loadInscripcionesSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      inscripciones: action.data,
    };
  }),

  on(InscripcionesActions.loadInscripcionesFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }),

  on(InscripcionesActions.deleteInscripcion, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(InscripcionesActions.deleteInscripcionSuccess, (state, action) => {
    return {
      ...state,
      inscripciones: state.inscripciones.filter((i) => i.id !== action.data),
      loading: false,
    };
  }),

  on(InscripcionesActions.deleteInscripcionFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }),

  on(InscripcionesActions.createInscripcion, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(InscripcionesActions.createInscripcionSuccess, (state, action) => {
    const newInscripcion = action.data;
    return {
      ...state,
      loading: false,
      inscripciones: [...state.inscripciones, newInscripcion],
    };
  }),

  on(InscripcionesActions.createInscripcionFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  })
);

export const inscripcionesFeature = createFeature({
  name: inscripcionesFeatureKey,
  reducer,
});
