

export const WorksActionTypes = {
  GET_WORKS: '[Works] Get works',
  WORKS_GET_SUCCESS: '[Works] Works get success',
  WORKS_GET_ERROR: '[Works] Works get error',
  CREATE_WORK: '[Works] Create work',
  CREATE_WORK_SUCCESS: '[Works] Create work success',
  CREATE_WORK_ERROR: '[Works] Create work error',
  GET_WORK: '[Works] Get work',
  GET_WORK_SUCCESS: '[Works] Get work success',
  GET_WORK_ERROR: '[Works] Get work error',
};

export const worksActions = {
  getWorksAction: (payload) => ({
    type: WorksActionTypes.GET_WORKS,
    payload
  }),
  worksGetSuccessAction: (payload) => ({
    type: WorksActionTypes.WORKS_GET_SUCCESS,
    payload
  }),
  worksGetErrorAction: (payload) => ({
    type: WorksActionTypes.WORKS_GET_ERROR,
    payload
  }),
  createWorkAction: (payload) => ({
    type: WorksActionTypes.GET_WORKS,
    payload
  }),
  createWorkSuccessAction: (payload) => ({
    type: WorksActionTypes.WORKS_GET_SUCCESS,
    payload
  }),
  createWorkErrorAction: (payload) => ({
    type: WorksActionTypes.WORKS_GET_ERROR,
    payload
  }),
  getWorkAction: (payload) => ({
    type: WorksActionTypes.GET_WORK,
    payload
  }),
  getWorkSuccessAction: (payload) => ({
    type: WorksActionTypes.GET_WORK_SUCCESS,
    payload
  }),
  getWorkErrorAction: (payload) => ({
    type: WorksActionTypes.GET_WORK_ERROR,
    payload
  }),
}