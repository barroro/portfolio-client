
export const socialNetworkActionTypes = {
  GET_SOCIAL_NETWORKS: 'GET_SOCIAL_NETWORKS',
  GET_SOCIAL_NETWORKS_SUCCESS: 'GET_SOCIAL_NETWORKS_SUCCESS',
  GET_SOCIAL_NETWORKS_ERROR: 'GET_SOCIAL_NETWORKS_ERROR',
  CREATE_SOCIAL_NETWORK: 'CREATE_SOCIAL_NETWORK',
  CREATE_SOCIAL_NETWORK_SUCCESS: 'CREATE_SOCIAL_NETWORK_SUCCESS',
  CREATE_SOCIAL_NETWORK_ERROR: 'CREATE_SOCIAL_NETWORK_ERROR',
  UPDATE_SOCIAL_NETWORK: 'UPDATE_SOCIAL_NETWORK',
  UPDATE_SOCIAL_NETWORK_SUCCESS: 'UPDATE_SOCIAL_NETWORK_SUCCESS',
  UPDATE_SOCIAL_NETWORK_ERROR: 'UPDATE_SOCIAL_NETWORK_ERROR',
  DELETE_SOCIAL_NETWORK: 'DELETE_SOCIAL_NETWORK',
  DELETE_SOCIAL_NETWORK_SUCCESS: 'DELETE_SOCIAL_NETWORK_SUCCESS',
  DELETE_SOCIAL_NETWORK_ERROR: 'DELETE_SOCIAL_NETWORK_ERROR',
  GET_SOCIAL_NETWORK: 'GET_SOCIAL_NETWORK',
  GET_SOCIAL_NETWORK_SUCCESS: 'GET_SOCIAL_NETWORK_SUCCESS',
  GET_SOCIAL_NETWORK_ERROR: 'GET_SOCIAL_NETWORK_ERROR',
  OPEN_SOCIAL_NETWORK_MODAL: 'OPEN_SOCIAL_NETWORK_MODAL',
  CLOSE_SOCIAL_NETWORK_MODAL: 'CLOSE_SOCIAL_NETWORK_MODAL'
};

export const socialNetworkActions = {
  getSocialNetworksAction: (payload) => ({
    type: socialNetworkActionTypes.GET_SOCIAL_NETWORKS,
    payload
  }),
  getSocialNetworksSuccessAction: (payload) => ({
    type: socialNetworkActionTypes.GET_SOCIAL_NETWORKS_SUCCESS,
    payload
  }),
  getSocialNetworksErrorAction: (payload) => ({
    type: socialNetworkActionTypes.GET_SOCIAL_NETWORKS_ERROR,
    payload
  }),
  createSocialNetworkAction: (payload) => ({
    type: socialNetworkActionTypes.CREATE_SOCIAL_NETWORK,
    payload
  }),
  createSocialNetworkSuccessAction: (payload) => ({
    type: socialNetworkActionTypes.CREATE_SOCIAL_NETWORK_SUCCESS,
    payload
  }),
  createSocialNetworkErrorAction: (payload) => ({
    type: socialNetworkActionTypes.CREATE_SOCIAL_NETWORK_ERROR,
    payload
  }),
  updateSocialNetworkAction: (payload) => ({
    type: socialNetworkActionTypes.UPDATE_SOCIAL_NETWORK,
    payload
  }),
  updateSocialNetworkSuccessAction: (payload) => ({
    type: socialNetworkActionTypes.UPDATE_SOCIAL_NETWORK_SUCCESS,
    payload
  }),
  updateSocialNetworkErrorAction: (payload) => ({
    type: socialNetworkActionTypes.UPDATE_SOCIAL_NETWORK_ERROR,
    payload
  }),
  deleteSocialNetworkAction: (payload) => ({
    type: socialNetworkActionTypes.DELETE_SOCIAL_NETWORK,
    payload
  }),
  deleteSocialNetworkSuccessAction: (payload) => ({
    type: socialNetworkActionTypes.DELETE_SOCIAL_NETWORK_SUCCESS,
    payload
  }),
  deleteSocialNetworkErrorAction: (payload) => ({
    type: socialNetworkActionTypes.DELETE_SOCIAL_NETWORK_ERROR,
    payload
  }),
  getSocialNetworkAction: (payload) => ({
    type: socialNetworkActionTypes.GET_SOCIAL_NETWORK,
    payload
  }),
  getSocialNetworkSuccessAction: (payload) => ({
    type: socialNetworkActionTypes.GET_SOCIAL_NETWORK_SUCCESS,
    payload
  }),
  getSocialNetworkErrorAction: (payload) => ({
    type: socialNetworkActionTypes.GET_SOCIAL_NETWORK_ERROR,
    payload
  }),
  openSocialNetworkModalAction: (payload) => ({
    type: socialNetworkActionTypes.OPEN_SOCIAL_NETWORK_MODAL,
    payload
  }),
  closeSocialNetworkModalAction: (payload) => ({
    type: socialNetworkActionTypes.CLOSE_SOCIAL_NETWORK_MODAL,
    payload
  }),
}