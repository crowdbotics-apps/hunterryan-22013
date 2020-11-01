import * as types from "./constants"
export const api_v1_allourparts_list = () => ({
  type: types.API_V1_ALLOURPARTS_LIST
})
export const api_v1_allourparts_listSucceeded = (response, starter) => ({
  type: types.API_V1_ALLOURPARTS_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_allourparts_listFailed = (error, starter) => ({
  type: types.API_V1_ALLOURPARTS_LIST_FAILED,
  error,
  starter
})
export const api_v1_allourparts_create = data => ({
  type: types.API_V1_ALLOURPARTS_CREATE,
  data
})
export const api_v1_allourparts_createSucceeded = (response, starter) => ({
  type: types.API_V1_ALLOURPARTS_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_allourparts_createFailed = (error, starter) => ({
  type: types.API_V1_ALLOURPARTS_CREATE_FAILED,
  error,
  starter
})
export const api_v1_allourparts_read = () => ({
  type: types.API_V1_ALLOURPARTS_READ
})
export const api_v1_allourparts_readSucceeded = (response, starter) => ({
  type: types.API_V1_ALLOURPARTS_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_allourparts_readFailed = (error, starter) => ({
  type: types.API_V1_ALLOURPARTS_READ_FAILED,
  error,
  starter
})
export const api_v1_allourparts_update = data => ({
  type: types.API_V1_ALLOURPARTS_UPDATE,
  data
})
export const api_v1_allourparts_updateSucceeded = (response, starter) => ({
  type: types.API_V1_ALLOURPARTS_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_allourparts_updateFailed = (error, starter) => ({
  type: types.API_V1_ALLOURPARTS_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_allourparts_partial_update = data => ({
  type: types.API_V1_ALLOURPARTS_PARTIAL_UPDATE,
  data
})
export const api_v1_allourparts_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_ALLOURPARTS_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_allourparts_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_ALLOURPARTS_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_allourparts_delete = () => ({
  type: types.API_V1_ALLOURPARTS_DELETE
})
export const api_v1_allourparts_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_ALLOURPARTS_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_allourparts_deleteFailed = (error, starter) => ({
  type: types.API_V1_ALLOURPARTS_DELETE_FAILED,
  error,
  starter
})
export const api_v1_cdocs_list = () => ({ type: types.API_V1_CDOCS_LIST })
export const api_v1_cdocs_listSucceeded = (response, starter) => ({
  type: types.API_V1_CDOCS_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_cdocs_listFailed = (error, starter) => ({
  type: types.API_V1_CDOCS_LIST_FAILED,
  error,
  starter
})
export const api_v1_cdocs_create = data => ({
  type: types.API_V1_CDOCS_CREATE,
  data
})
export const api_v1_cdocs_createSucceeded = (response, starter) => ({
  type: types.API_V1_CDOCS_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_cdocs_createFailed = (error, starter) => ({
  type: types.API_V1_CDOCS_CREATE_FAILED,
  error,
  starter
})
export const api_v1_cdocs_read = () => ({ type: types.API_V1_CDOCS_READ })
export const api_v1_cdocs_readSucceeded = (response, starter) => ({
  type: types.API_V1_CDOCS_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_cdocs_readFailed = (error, starter) => ({
  type: types.API_V1_CDOCS_READ_FAILED,
  error,
  starter
})
export const api_v1_cdocs_update = data => ({
  type: types.API_V1_CDOCS_UPDATE,
  data
})
export const api_v1_cdocs_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CDOCS_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_cdocs_updateFailed = (error, starter) => ({
  type: types.API_V1_CDOCS_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_cdocs_partial_update = data => ({
  type: types.API_V1_CDOCS_PARTIAL_UPDATE,
  data
})
export const api_v1_cdocs_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CDOCS_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_cdocs_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_CDOCS_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_cdocs_delete = () => ({ type: types.API_V1_CDOCS_DELETE })
export const api_v1_cdocs_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_CDOCS_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_cdocs_deleteFailed = (error, starter) => ({
  type: types.API_V1_CDOCS_DELETE_FAILED,
  error,
  starter
})
export const api_v1_columns_list = () => ({ type: types.API_V1_COLUMNS_LIST })
export const api_v1_columns_listSucceeded = (response, starter) => ({
  type: types.API_V1_COLUMNS_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_columns_listFailed = (error, starter) => ({
  type: types.API_V1_COLUMNS_LIST_FAILED,
  error,
  starter
})
export const api_v1_columns_create = data => ({
  type: types.API_V1_COLUMNS_CREATE,
  data
})
export const api_v1_columns_createSucceeded = (response, starter) => ({
  type: types.API_V1_COLUMNS_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_columns_createFailed = (error, starter) => ({
  type: types.API_V1_COLUMNS_CREATE_FAILED,
  error,
  starter
})
export const api_v1_columns_read = () => ({ type: types.API_V1_COLUMNS_READ })
export const api_v1_columns_readSucceeded = (response, starter) => ({
  type: types.API_V1_COLUMNS_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_columns_readFailed = (error, starter) => ({
  type: types.API_V1_COLUMNS_READ_FAILED,
  error,
  starter
})
export const api_v1_columns_update = data => ({
  type: types.API_V1_COLUMNS_UPDATE,
  data
})
export const api_v1_columns_updateSucceeded = (response, starter) => ({
  type: types.API_V1_COLUMNS_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_columns_updateFailed = (error, starter) => ({
  type: types.API_V1_COLUMNS_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_columns_partial_update = data => ({
  type: types.API_V1_COLUMNS_PARTIAL_UPDATE,
  data
})
export const api_v1_columns_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_COLUMNS_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_columns_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_COLUMNS_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_columns_delete = () => ({
  type: types.API_V1_COLUMNS_DELETE
})
export const api_v1_columns_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_COLUMNS_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_columns_deleteFailed = (error, starter) => ({
  type: types.API_V1_COLUMNS_DELETE_FAILED,
  error,
  starter
})
export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST
})
export const api_v1_customtext_listSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_listFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  error,
  starter
})
export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ
})
export const api_v1_customtext_readSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_readFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  error,
  starter
})
export const api_v1_customtext_update = data => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE,
  data
})
export const api_v1_customtext_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_customtext_partial_update = data => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
  data
})
export const api_v1_customtext_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_listFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  error,
  starter
})
export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_readFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  error,
  starter
})
export const api_v1_homepage_update = data => ({
  type: types.API_V1_HOMEPAGE_UPDATE,
  data
})
export const api_v1_homepage_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_updateFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_homepage_partial_update = data => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
  data
})
export const api_v1_homepage_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_jdocs_list = () => ({ type: types.API_V1_JDOCS_LIST })
export const api_v1_jdocs_listSucceeded = (response, starter) => ({
  type: types.API_V1_JDOCS_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_jdocs_listFailed = (error, starter) => ({
  type: types.API_V1_JDOCS_LIST_FAILED,
  error,
  starter
})
export const api_v1_jdocs_create = data => ({
  type: types.API_V1_JDOCS_CREATE,
  data
})
export const api_v1_jdocs_createSucceeded = (response, starter) => ({
  type: types.API_V1_JDOCS_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_jdocs_createFailed = (error, starter) => ({
  type: types.API_V1_JDOCS_CREATE_FAILED,
  error,
  starter
})
export const api_v1_jdocs_read = () => ({ type: types.API_V1_JDOCS_READ })
export const api_v1_jdocs_readSucceeded = (response, starter) => ({
  type: types.API_V1_JDOCS_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_jdocs_readFailed = (error, starter) => ({
  type: types.API_V1_JDOCS_READ_FAILED,
  error,
  starter
})
export const api_v1_jdocs_update = data => ({
  type: types.API_V1_JDOCS_UPDATE,
  data
})
export const api_v1_jdocs_updateSucceeded = (response, starter) => ({
  type: types.API_V1_JDOCS_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_jdocs_updateFailed = (error, starter) => ({
  type: types.API_V1_JDOCS_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_jdocs_partial_update = data => ({
  type: types.API_V1_JDOCS_PARTIAL_UPDATE,
  data
})
export const api_v1_jdocs_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_JDOCS_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_jdocs_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_JDOCS_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_jdocs_delete = () => ({ type: types.API_V1_JDOCS_DELETE })
export const api_v1_jdocs_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_JDOCS_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_jdocs_deleteFailed = (error, starter) => ({
  type: types.API_V1_JDOCS_DELETE_FAILED,
  error,
  starter
})
export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_login_createFailed = (error, starter) => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  error,
  starter
})
export const api_v1_noun_list = () => ({ type: types.API_V1_NOUN_LIST })
export const api_v1_noun_listSucceeded = (response, starter) => ({
  type: types.API_V1_NOUN_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_noun_listFailed = (error, starter) => ({
  type: types.API_V1_NOUN_LIST_FAILED,
  error,
  starter
})
export const api_v1_noun_create = data => ({
  type: types.API_V1_NOUN_CREATE,
  data
})
export const api_v1_noun_createSucceeded = (response, starter) => ({
  type: types.API_V1_NOUN_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_noun_createFailed = (error, starter) => ({
  type: types.API_V1_NOUN_CREATE_FAILED,
  error,
  starter
})
export const api_v1_noun_read = () => ({ type: types.API_V1_NOUN_READ })
export const api_v1_noun_readSucceeded = (response, starter) => ({
  type: types.API_V1_NOUN_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_noun_readFailed = (error, starter) => ({
  type: types.API_V1_NOUN_READ_FAILED,
  error,
  starter
})
export const api_v1_noun_update = data => ({
  type: types.API_V1_NOUN_UPDATE,
  data
})
export const api_v1_noun_updateSucceeded = (response, starter) => ({
  type: types.API_V1_NOUN_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_noun_updateFailed = (error, starter) => ({
  type: types.API_V1_NOUN_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_noun_partial_update = data => ({
  type: types.API_V1_NOUN_PARTIAL_UPDATE,
  data
})
export const api_v1_noun_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_NOUN_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_noun_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_NOUN_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_noun_delete = () => ({ type: types.API_V1_NOUN_DELETE })
export const api_v1_noun_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_NOUN_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_noun_deleteFailed = (error, starter) => ({
  type: types.API_V1_NOUN_DELETE_FAILED,
  error,
  starter
})
export const api_v1_production_list = () => ({
  type: types.API_V1_PRODUCTION_LIST
})
export const api_v1_production_listSucceeded = (response, starter) => ({
  type: types.API_V1_PRODUCTION_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_production_listFailed = (error, starter) => ({
  type: types.API_V1_PRODUCTION_LIST_FAILED,
  error,
  starter
})
export const api_v1_production_create = data => ({
  type: types.API_V1_PRODUCTION_CREATE,
  data
})
export const api_v1_production_createSucceeded = (response, starter) => ({
  type: types.API_V1_PRODUCTION_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_production_createFailed = (error, starter) => ({
  type: types.API_V1_PRODUCTION_CREATE_FAILED,
  error,
  starter
})
export const api_v1_production_read = () => ({
  type: types.API_V1_PRODUCTION_READ
})
export const api_v1_production_readSucceeded = (response, starter) => ({
  type: types.API_V1_PRODUCTION_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_production_readFailed = (error, starter) => ({
  type: types.API_V1_PRODUCTION_READ_FAILED,
  error,
  starter
})
export const api_v1_production_update = data => ({
  type: types.API_V1_PRODUCTION_UPDATE,
  data
})
export const api_v1_production_updateSucceeded = (response, starter) => ({
  type: types.API_V1_PRODUCTION_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_production_updateFailed = (error, starter) => ({
  type: types.API_V1_PRODUCTION_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_production_partial_update = data => ({
  type: types.API_V1_PRODUCTION_PARTIAL_UPDATE,
  data
})
export const api_v1_production_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_PRODUCTION_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_production_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_PRODUCTION_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_production_delete = () => ({
  type: types.API_V1_PRODUCTION_DELETE
})
export const api_v1_production_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_PRODUCTION_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_production_deleteFailed = (error, starter) => ({
  type: types.API_V1_PRODUCTION_DELETE_FAILED,
  error,
  starter
})
export const api_v1_signup_create = data => ({
  type: types.API_V1_SIGNUP_CREATE,
  data
})
export const api_v1_signup_createSucceeded = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_signup_createFailed = (error, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  error,
  starter
})
export const api_v1_stats_list = () => ({ type: types.API_V1_STATS_LIST })
export const api_v1_stats_listSucceeded = (response, starter) => ({
  type: types.API_V1_STATS_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_stats_listFailed = (error, starter) => ({
  type: types.API_V1_STATS_LIST_FAILED,
  error,
  starter
})
export const api_v1_stats_create = data => ({
  type: types.API_V1_STATS_CREATE,
  data
})
export const api_v1_stats_createSucceeded = (response, starter) => ({
  type: types.API_V1_STATS_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_stats_createFailed = (error, starter) => ({
  type: types.API_V1_STATS_CREATE_FAILED,
  error,
  starter
})
export const api_v1_stats_read = () => ({ type: types.API_V1_STATS_READ })
export const api_v1_stats_readSucceeded = (response, starter) => ({
  type: types.API_V1_STATS_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_stats_readFailed = (error, starter) => ({
  type: types.API_V1_STATS_READ_FAILED,
  error,
  starter
})
export const api_v1_stats_update = data => ({
  type: types.API_V1_STATS_UPDATE,
  data
})
export const api_v1_stats_updateSucceeded = (response, starter) => ({
  type: types.API_V1_STATS_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_stats_updateFailed = (error, starter) => ({
  type: types.API_V1_STATS_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_stats_partial_update = data => ({
  type: types.API_V1_STATS_PARTIAL_UPDATE,
  data
})
export const api_v1_stats_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_STATS_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_stats_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_STATS_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_stats_delete = () => ({ type: types.API_V1_STATS_DELETE })
export const api_v1_stats_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_STATS_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_stats_deleteFailed = (error, starter) => ({
  type: types.API_V1_STATS_DELETE_FAILED,
  error,
  starter
})
export const api_v1_status_list = () => ({ type: types.API_V1_STATUS_LIST })
export const api_v1_status_listSucceeded = (response, starter) => ({
  type: types.API_V1_STATUS_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_status_listFailed = (error, starter) => ({
  type: types.API_V1_STATUS_LIST_FAILED,
  error,
  starter
})
export const api_v1_status_create = data => ({
  type: types.API_V1_STATUS_CREATE,
  data
})
export const api_v1_status_createSucceeded = (response, starter) => ({
  type: types.API_V1_STATUS_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_status_createFailed = (error, starter) => ({
  type: types.API_V1_STATUS_CREATE_FAILED,
  error,
  starter
})
export const api_v1_status_read = () => ({ type: types.API_V1_STATUS_READ })
export const api_v1_status_readSucceeded = (response, starter) => ({
  type: types.API_V1_STATUS_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_status_readFailed = (error, starter) => ({
  type: types.API_V1_STATUS_READ_FAILED,
  error,
  starter
})
export const api_v1_status_update = data => ({
  type: types.API_V1_STATUS_UPDATE,
  data
})
export const api_v1_status_updateSucceeded = (response, starter) => ({
  type: types.API_V1_STATUS_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_status_updateFailed = (error, starter) => ({
  type: types.API_V1_STATUS_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_status_partial_update = data => ({
  type: types.API_V1_STATUS_PARTIAL_UPDATE,
  data
})
export const api_v1_status_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_STATUS_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_status_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_STATUS_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_status_delete = () => ({ type: types.API_V1_STATUS_DELETE })
export const api_v1_status_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_STATUS_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_status_deleteFailed = (error, starter) => ({
  type: types.API_V1_STATUS_DELETE_FAILED,
  error,
  starter
})
export const rest_auth_login_create = data => ({
  type: types.REST_AUTH_LOGIN_CREATE,
  data
})
export const rest_auth_login_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_login_createFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST
})
export const rest_auth_logout_listSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_listFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  error,
  starter
})
export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE
})
export const rest_auth_logout_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_createFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_password_change_create = data => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE,
  data
})
export const rest_auth_password_change_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_change_createFailed = (error, starter) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_password_reset_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE,
  data
})
export const rest_auth_password_reset_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_createFailed = (error, starter) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_password_reset_confirm_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
  data
})
export const rest_auth_password_reset_confirm_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_confirm_createFailed = (
  error,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_registration_create = data => ({
  type: types.REST_AUTH_REGISTRATION_CREATE,
  data
})
export const rest_auth_registration_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_createFailed = (error, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_registration_verify_email_create = data => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
  data
})
export const rest_auth_registration_verify_email_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_verify_email_createFailed = (
  error,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_readFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  error,
  starter
})
export const rest_auth_user_update = data => ({
  type: types.REST_AUTH_USER_UPDATE,
  data
})
export const rest_auth_user_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_updateFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  error,
  starter
})
export const rest_auth_user_partial_update = data => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE,
  data
})
export const rest_auth_user_partial_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_partial_updateFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
