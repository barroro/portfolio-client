

export const WorksActionTypes = {
  GET_WORKS: '[Works] Get works',
  WORKS_GET_SUCCESS: '[Works] Works get success',
  WORKS_GET_ERROR: '[Works] Works get error',
  CREATE_WORK: '[Works] Create work',
  CREATE_WORK_SUCCESS: '[Works] Create work success',
  CREATE_WORK_ERROR: '[Works] Create work error',
  UPDATE_WORK: '[Works] Update work',
  UPDATE_WORK_SUCCESS: '[Works] Update work success',
  UPDATE_WORK_ERROR: '[Works] Update work error',
  GET_WORK: '[Works] Get work',
  GET_WORK_SUCCESS: '[Works] Get work success',
  GET_WORK_ERROR: '[Works] Get work error',
  GET_ACTIVE_WORKS: '[Works] Get active works',
  GET_ACTIVE_WORKS_SUCCESS: '[Works] Get active works success',
  GET_ACTIVE_WORKS_ERROR: '[Works] Get active works error',
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
    type: WorksActionTypes.CREATE_WORK,
    payload
  }),
  createWorkSuccessAction: (payload) => ({
    type: WorksActionTypes.CREATE_WORK_SUCCESS,
    payload
  }),
  createWorkErrorAction: (payload) => ({
    type: WorksActionTypes.CREATE_WORK_ERROR,
    payload
  }),
  updateWorkAction: (payload) => ({
    type: WorksActionTypes.UPDATE_WORK,
    payload
  }),
  updateWorkSuccessAction: (payload) => ({
    type: WorksActionTypes.UPDATE_WORK_SUCCESS,
    payload
  }),
  updateWorkErrorAction: (payload) => ({
    type: WorksActionTypes.UPDATE_WORK_ERROR,
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
  getActiveWorksAction: (payload) => ({
    type: WorksActionTypes.GET_ACTIVE_WORKS,
    payload
  }),
  getActiveWorksSuccessAction: (payload) => ({
    type: WorksActionTypes.GET_ACTIVE_WORKS_SUCCESS,
    payload
  }),
  getActiveWorksErrorAction: (payload) => ({
    type: WorksActionTypes.GET_ACTIVE_WORKS_ERROR,
    payload
  }),
}