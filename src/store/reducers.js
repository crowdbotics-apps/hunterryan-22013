import * as types from "./constants"

const initialState = { hunterRyanAPI: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.API_V1_ALLOURPARTS_LIST:
    case types.API_V1_ALLOURPARTS_LIST_SUCCEEDED:
    case types.API_V1_ALLOURPARTS_LIST_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_ALLOURPARTS_CREATE:
    case types.API_V1_ALLOURPARTS_CREATE_SUCCEEDED:
    case types.API_V1_ALLOURPARTS_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_ALLOURPARTS_READ:
    case types.API_V1_ALLOURPARTS_READ_SUCCEEDED:
    case types.API_V1_ALLOURPARTS_READ_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_ALLOURPARTS_UPDATE:
    case types.API_V1_ALLOURPARTS_UPDATE_SUCCEEDED:
    case types.API_V1_ALLOURPARTS_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_ALLOURPARTS_PARTIAL_UPDATE:
    case types.API_V1_ALLOURPARTS_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_ALLOURPARTS_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_ALLOURPARTS_DELETE:
    case types.API_V1_ALLOURPARTS_DELETE_SUCCEEDED:
    case types.API_V1_ALLOURPARTS_DELETE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_CDOCS_LIST:
    case types.API_V1_CDOCS_LIST_SUCCEEDED:
    case types.API_V1_CDOCS_LIST_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_CDOCS_CREATE:
    case types.API_V1_CDOCS_CREATE_SUCCEEDED:
    case types.API_V1_CDOCS_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_CDOCS_READ:
    case types.API_V1_CDOCS_READ_SUCCEEDED:
    case types.API_V1_CDOCS_READ_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_CDOCS_UPDATE:
    case types.API_V1_CDOCS_UPDATE_SUCCEEDED:
    case types.API_V1_CDOCS_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_CDOCS_PARTIAL_UPDATE:
    case types.API_V1_CDOCS_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CDOCS_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_CDOCS_DELETE:
    case types.API_V1_CDOCS_DELETE_SUCCEEDED:
    case types.API_V1_CDOCS_DELETE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_COLUMNS_LIST:
    case types.API_V1_COLUMNS_LIST_SUCCEEDED:
    case types.API_V1_COLUMNS_LIST_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_COLUMNS_CREATE:
    case types.API_V1_COLUMNS_CREATE_SUCCEEDED:
    case types.API_V1_COLUMNS_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_COLUMNS_READ:
    case types.API_V1_COLUMNS_READ_SUCCEEDED:
    case types.API_V1_COLUMNS_READ_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_COLUMNS_UPDATE:
    case types.API_V1_COLUMNS_UPDATE_SUCCEEDED:
    case types.API_V1_COLUMNS_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_COLUMNS_PARTIAL_UPDATE:
    case types.API_V1_COLUMNS_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_COLUMNS_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_COLUMNS_DELETE:
    case types.API_V1_COLUMNS_DELETE_SUCCEEDED:
    case types.API_V1_COLUMNS_DELETE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_LIST:
    case types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_LIST_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_READ:
    case types.API_V1_CUSTOMTEXT_READ_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_READ_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_UPDATE:
    case types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_LIST:
    case types.API_V1_HOMEPAGE_LIST_SUCCEEDED:
    case types.API_V1_HOMEPAGE_LIST_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_READ:
    case types.API_V1_HOMEPAGE_READ_SUCCEEDED:
    case types.API_V1_HOMEPAGE_READ_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_UPDATE:
    case types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED:
    case types.API_V1_HOMEPAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_JDOCS_LIST:
    case types.API_V1_JDOCS_LIST_SUCCEEDED:
    case types.API_V1_JDOCS_LIST_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_JDOCS_CREATE:
    case types.API_V1_JDOCS_CREATE_SUCCEEDED:
    case types.API_V1_JDOCS_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_JDOCS_READ:
    case types.API_V1_JDOCS_READ_SUCCEEDED:
    case types.API_V1_JDOCS_READ_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_JDOCS_UPDATE:
    case types.API_V1_JDOCS_UPDATE_SUCCEEDED:
    case types.API_V1_JDOCS_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_JDOCS_PARTIAL_UPDATE:
    case types.API_V1_JDOCS_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_JDOCS_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_JDOCS_DELETE:
    case types.API_V1_JDOCS_DELETE_SUCCEEDED:
    case types.API_V1_JDOCS_DELETE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_LOGIN_CREATE:
    case types.API_V1_LOGIN_CREATE_SUCCEEDED:
    case types.API_V1_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_NOUN_LIST:
    case types.API_V1_NOUN_LIST_SUCCEEDED:
    case types.API_V1_NOUN_LIST_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_NOUN_CREATE:
    case types.API_V1_NOUN_CREATE_SUCCEEDED:
    case types.API_V1_NOUN_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_NOUN_READ:
    case types.API_V1_NOUN_READ_SUCCEEDED:
    case types.API_V1_NOUN_READ_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_NOUN_UPDATE:
    case types.API_V1_NOUN_UPDATE_SUCCEEDED:
    case types.API_V1_NOUN_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_NOUN_PARTIAL_UPDATE:
    case types.API_V1_NOUN_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_NOUN_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_NOUN_DELETE:
    case types.API_V1_NOUN_DELETE_SUCCEEDED:
    case types.API_V1_NOUN_DELETE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_PRODUCTION_LIST:
    case types.API_V1_PRODUCTION_LIST_SUCCEEDED:
    case types.API_V1_PRODUCTION_LIST_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_PRODUCTION_CREATE:
    case types.API_V1_PRODUCTION_CREATE_SUCCEEDED:
    case types.API_V1_PRODUCTION_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_PRODUCTION_READ:
    case types.API_V1_PRODUCTION_READ_SUCCEEDED:
    case types.API_V1_PRODUCTION_READ_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_PRODUCTION_UPDATE:
    case types.API_V1_PRODUCTION_UPDATE_SUCCEEDED:
    case types.API_V1_PRODUCTION_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_PRODUCTION_PARTIAL_UPDATE:
    case types.API_V1_PRODUCTION_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_PRODUCTION_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_PRODUCTION_DELETE:
    case types.API_V1_PRODUCTION_DELETE_SUCCEEDED:
    case types.API_V1_PRODUCTION_DELETE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_SIGNUP_CREATE:
    case types.API_V1_SIGNUP_CREATE_SUCCEEDED:
    case types.API_V1_SIGNUP_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_STATS_LIST:
    case types.API_V1_STATS_LIST_SUCCEEDED:
    case types.API_V1_STATS_LIST_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_STATS_CREATE:
    case types.API_V1_STATS_CREATE_SUCCEEDED:
    case types.API_V1_STATS_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_STATS_READ:
    case types.API_V1_STATS_READ_SUCCEEDED:
    case types.API_V1_STATS_READ_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_STATS_UPDATE:
    case types.API_V1_STATS_UPDATE_SUCCEEDED:
    case types.API_V1_STATS_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_STATS_PARTIAL_UPDATE:
    case types.API_V1_STATS_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_STATS_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_STATS_DELETE:
    case types.API_V1_STATS_DELETE_SUCCEEDED:
    case types.API_V1_STATS_DELETE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_STATUS_LIST:
    case types.API_V1_STATUS_LIST_SUCCEEDED:
    case types.API_V1_STATUS_LIST_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_STATUS_CREATE:
    case types.API_V1_STATUS_CREATE_SUCCEEDED:
    case types.API_V1_STATUS_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_STATUS_READ:
    case types.API_V1_STATUS_READ_SUCCEEDED:
    case types.API_V1_STATUS_READ_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_STATUS_UPDATE:
    case types.API_V1_STATUS_UPDATE_SUCCEEDED:
    case types.API_V1_STATUS_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_STATUS_PARTIAL_UPDATE:
    case types.API_V1_STATUS_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_STATUS_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.API_V1_STATUS_DELETE:
    case types.API_V1_STATUS_DELETE_SUCCEEDED:
    case types.API_V1_STATUS_DELETE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.REST_AUTH_LOGIN_CREATE:
    case types.REST_AUTH_LOGIN_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_LIST:
    case types.REST_AUTH_LOGOUT_LIST_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_LIST_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_CREATE:
    case types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_CREATE:
    case types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED:
    case types.REST_AUTH_REGISTRATION_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.REST_AUTH_USER_READ:
    case types.REST_AUTH_USER_READ_SUCCEEDED:
    case types.REST_AUTH_USER_READ_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.REST_AUTH_USER_UPDATE:
    case types.REST_AUTH_USER_UPDATE_SUCCEEDED:
    case types.REST_AUTH_USER_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        hunterRyanAPI: [...state.hunterRyanAPI, action.response]
      })
    default:
      return state
  }
}
