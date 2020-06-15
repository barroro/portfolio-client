import { socialNetworkActionTypes } from "../actions/socialNetworkActions"

const INITIALSTATE = {
  socialNetworks: [],
  socialNetwork: null,
  socialNetworksLoading: false,
  socialNetworkLoading: false,
  socialNetworkSaving: false,
  editing: false,
  modal: {
    open: false,
    data: null,
    editing: false
  }
}

const socialNetworkReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case socialNetworkActionTypes.GET_SOCIAL_NETWORKS:
      return {
        ...state,
        socialNetworksLoading: true
      }

    case socialNetworkActionTypes.GET_SOCIAL_NETWORKS_SUCCESS:
      return {
        ...state,
        socialNetworks: action.payload,
        socialNetworksLoading: false
      }

    case socialNetworkActionTypes.GET_SOCIAL_NETWORK:
      return {
        ...state,
        socialNetworkLoading: true
      }

    case socialNetworkActionTypes.GET_SOCIAL_NETWORK_SUCCESS:
      return {
        ...state,
        socialNetwork: action.payload,
        socialNetworkLoading: false
      }

    case socialNetworkActionTypes.CREATE_SOCIAL_NETWORK:
      return {
        ...state,
        socialNetworkSaving: true
      }

    case socialNetworkActionTypes.CREATE_SOCIAL_NETWORK_SUCCESS:
      return {
        ...state,
        socialNetworks: [...state.socialNetworks, action.payload],
        modal: {
          open: false,
          editing: false,
          data: null
        },
        socialNetworkSaving: false
      }

    case socialNetworkActionTypes.UPDATE_SOCIAL_NETWORK:
      return {
        ...state,
        socialNetworkSaving: true
      }

    case socialNetworkActionTypes.UPDATE_SOCIAL_NETWORK_SUCCESS:
      return {
        ...state,
        socialNetworks: state.socialNetworks.map(c => {
          if (c.id == action.payload.id) {
            c = action.payload;
            return c;
          }
          return c;
        }),
        modal: {
          open: false,
          editing: false,
          data: null
        },
        socialNetworkSaving: false
      }

    case socialNetworkActionTypes.DELETE_SOCIAL_NETWORK_SUCCESS:
      return {
        ...state,
        socialNetworks: state.socialNetworks.filter(c => c.id !== action.payload),
      }

    case socialNetworkActionTypes.OPEN_SOCIAL_NETWORK_MODAL:
      return {
        ...state,
        modal: action.payload
      }

    case socialNetworkActionTypes.CLOSE_SOCIAL_NETWORK_MODAL:
      return {
        ...state,
        modal: action.payload
      }

    default:
      return state
  }
}
export default socialNetworkReducer