import { WorksActionTypes } from "../actions/WorksActions"

const INITIALSTATE = {
  works: [],
  work: null,
  worksLoading: false,
  workLoading: false
}

export const getNewState = (state, newState) => {
  return Object.assign({}, state, newState)
}

const worksReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case WorksActionTypes.GET_WORKS:
      return {
        ...state,
        worksLoading: true
      }

    case WorksActionTypes.WORKS_GET_SUCCESS:
      return {
        ...state,
        works: action.payload,
        worksLoading: false
      }

    case WorksActionTypes.GET_WORK:
      return {
        ...state,
        workLoading: true,
        work: null
      }

    case WorksActionTypes.GET_WORK_SUCCESS:
      return {
        ...state,
        work: action.payload,
        workLoading: false
      }

    case WorksActionTypes.GET_WORK_ERROR:
      return {
        ...state,
        work: action.payload,
        workLoading: false
      }

    case WorksActionTypes.CREATE_WORK_SUCCESS:
      return {
        ...state,
        works: [...state.works, action.payload],
      }

    case WorksActionTypes.UPDATE_WORK_SUCCESS:
      return {
        ...state,
        works: state.works.map(c => {
          if (c.id == action.payload.id) {
            c = action.payload;
            return c;
          }
          return c;
        })
      }

    default:
      return state
  }
}
export default worksReducer