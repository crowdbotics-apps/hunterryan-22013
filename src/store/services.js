import axios from "axios"
const hunterRyanAPI = axios.create({
  baseURL: "https://hunterryan-22013.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_allourparts_list(action) {
  return hunterRyanAPI.get(`/api/v1/allourparts/`)
}
function api_v1_allourparts_create(action) {
  return hunterRyanAPI.post(`/api/v1/allourparts/`, null, { data: action.data })
}
function api_v1_allourparts_read(action) {
  return hunterRyanAPI.get(`/api/v1/allourparts/${action.id}/`)
}
function api_v1_allourparts_update(action) {
  return hunterRyanAPI.put(`/api/v1/allourparts/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_allourparts_partial_update(action) {
  return hunterRyanAPI.patch(`/api/v1/allourparts/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_allourparts_delete(action) {
  return hunterRyanAPI.delete(`/api/v1/allourparts/${action.id}/`)
}
function api_v1_cdocs_list(action) {
  return hunterRyanAPI.get(`/api/v1/cdocs/`)
}
function api_v1_cdocs_create(action) {
  return hunterRyanAPI.post(`/api/v1/cdocs/`, null, { data: action.data })
}
function api_v1_cdocs_read(action) {
  return hunterRyanAPI.get(`/api/v1/cdocs/${action.id}/`)
}
function api_v1_cdocs_update(action) {
  return hunterRyanAPI.put(`/api/v1/cdocs/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_cdocs_partial_update(action) {
  return hunterRyanAPI.patch(`/api/v1/cdocs/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_cdocs_delete(action) {
  return hunterRyanAPI.delete(`/api/v1/cdocs/${action.id}/`)
}
function api_v1_columns_list(action) {
  return hunterRyanAPI.get(`/api/v1/columns/`)
}
function api_v1_columns_create(action) {
  return hunterRyanAPI.post(`/api/v1/columns/`, null, { data: action.data })
}
function api_v1_columns_read(action) {
  return hunterRyanAPI.get(`/api/v1/columns/${action.id}/`)
}
function api_v1_columns_update(action) {
  return hunterRyanAPI.put(`/api/v1/columns/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_columns_partial_update(action) {
  return hunterRyanAPI.patch(`/api/v1/columns/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_columns_delete(action) {
  return hunterRyanAPI.delete(`/api/v1/columns/${action.id}/`)
}
function api_v1_customtext_list(action) {
  return hunterRyanAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(action) {
  return hunterRyanAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(action) {
  return hunterRyanAPI.put(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customtext_partial_update(action) {
  return hunterRyanAPI.patch(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_list(action) {
  return hunterRyanAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(action) {
  return hunterRyanAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(action) {
  return hunterRyanAPI.put(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_partial_update(action) {
  return hunterRyanAPI.patch(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_jdocs_list(action) {
  return hunterRyanAPI.get(`/api/v1/jdocs/`)
}
function api_v1_jdocs_create(action) {
  return hunterRyanAPI.post(`/api/v1/jdocs/`, null, { data: action.data })
}
function api_v1_jdocs_read(action) {
  return hunterRyanAPI.get(`/api/v1/jdocs/${action.id}/`)
}
function api_v1_jdocs_update(action) {
  return hunterRyanAPI.put(`/api/v1/jdocs/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_jdocs_partial_update(action) {
  return hunterRyanAPI.patch(`/api/v1/jdocs/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_jdocs_delete(action) {
  return hunterRyanAPI.delete(`/api/v1/jdocs/${action.id}/`)
}
function api_v1_login_create(action) {
  return hunterRyanAPI.post(`/api/v1/login/`)
}
function api_v1_noun_list(action) {
  return hunterRyanAPI.get(`/api/v1/noun/`)
}
function api_v1_noun_create(action) {
  return hunterRyanAPI.post(`/api/v1/noun/`, null, { data: action.data })
}
function api_v1_noun_read(action) {
  return hunterRyanAPI.get(`/api/v1/noun/${action.id}/`)
}
function api_v1_noun_update(action) {
  return hunterRyanAPI.put(`/api/v1/noun/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_noun_partial_update(action) {
  return hunterRyanAPI.patch(`/api/v1/noun/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_noun_delete(action) {
  return hunterRyanAPI.delete(`/api/v1/noun/${action.id}/`)
}
function api_v1_production_list(action) {
  return hunterRyanAPI.get(`/api/v1/production/`)
}
function api_v1_production_create(action) {
  return hunterRyanAPI.post(`/api/v1/production/`, null, { data: action.data })
}
function api_v1_production_read(action) {
  return hunterRyanAPI.get(`/api/v1/production/${action.id}/`)
}
function api_v1_production_update(action) {
  return hunterRyanAPI.put(`/api/v1/production/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_production_partial_update(action) {
  return hunterRyanAPI.patch(`/api/v1/production/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_production_delete(action) {
  return hunterRyanAPI.delete(`/api/v1/production/${action.id}/`)
}
function api_v1_signup_create(action) {
  return hunterRyanAPI.post(`/api/v1/signup/`, null, { data: action.data })
}
function api_v1_stats_list(action) {
  return hunterRyanAPI.get(`/api/v1/stats/`)
}
function api_v1_stats_create(action) {
  return hunterRyanAPI.post(`/api/v1/stats/`, null, { data: action.data })
}
function api_v1_stats_read(action) {
  return hunterRyanAPI.get(`/api/v1/stats/${action.id}/`)
}
function api_v1_stats_update(action) {
  return hunterRyanAPI.put(`/api/v1/stats/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_stats_partial_update(action) {
  return hunterRyanAPI.patch(`/api/v1/stats/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_stats_delete(action) {
  return hunterRyanAPI.delete(`/api/v1/stats/${action.id}/`)
}
function api_v1_status_list(action) {
  return hunterRyanAPI.get(`/api/v1/status/`)
}
function api_v1_status_create(action) {
  return hunterRyanAPI.post(`/api/v1/status/`, null, { data: action.data })
}
function api_v1_status_read(action) {
  return hunterRyanAPI.get(`/api/v1/status/${action.id}/`)
}
function api_v1_status_update(action) {
  return hunterRyanAPI.put(`/api/v1/status/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_status_partial_update(action) {
  return hunterRyanAPI.patch(`/api/v1/status/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_status_delete(action) {
  return hunterRyanAPI.delete(`/api/v1/status/${action.id}/`)
}
function rest_auth_login_create(action) {
  return hunterRyanAPI.post(`/rest-auth/login/`, null, { data: action.data })
}
function rest_auth_logout_list(action) {
  return hunterRyanAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(action) {
  return hunterRyanAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(action) {
  return hunterRyanAPI.post(`/rest-auth/password/change/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_create(action) {
  return hunterRyanAPI.post(`/rest-auth/password/reset/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_confirm_create(action) {
  return hunterRyanAPI.post(`/rest-auth/password/reset/confirm/`, null, {
    data: action.data
  })
}
function rest_auth_registration_create(action) {
  return hunterRyanAPI.post(`/rest-auth/registration/`, null, {
    data: action.data
  })
}
function rest_auth_registration_verify_email_create(action) {
  return hunterRyanAPI.post(`/rest-auth/registration/verify-email/`, null, {
    data: action.data
  })
}
function rest_auth_user_read(action) {
  return hunterRyanAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(action) {
  return hunterRyanAPI.put(`/rest-auth/user/`, null, { data: action.data })
}
function rest_auth_user_partial_update(action) {
  return hunterRyanAPI.patch(`/rest-auth/user/`, null, { data: action.data })
}
export const apiService = {
  api_v1_allourparts_list,
  api_v1_allourparts_create,
  api_v1_allourparts_read,
  api_v1_allourparts_update,
  api_v1_allourparts_partial_update,
  api_v1_allourparts_delete,
  api_v1_cdocs_list,
  api_v1_cdocs_create,
  api_v1_cdocs_read,
  api_v1_cdocs_update,
  api_v1_cdocs_partial_update,
  api_v1_cdocs_delete,
  api_v1_columns_list,
  api_v1_columns_create,
  api_v1_columns_read,
  api_v1_columns_update,
  api_v1_columns_partial_update,
  api_v1_columns_delete,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_jdocs_list,
  api_v1_jdocs_create,
  api_v1_jdocs_read,
  api_v1_jdocs_update,
  api_v1_jdocs_partial_update,
  api_v1_jdocs_delete,
  api_v1_login_create,
  api_v1_noun_list,
  api_v1_noun_create,
  api_v1_noun_read,
  api_v1_noun_update,
  api_v1_noun_partial_update,
  api_v1_noun_delete,
  api_v1_production_list,
  api_v1_production_create,
  api_v1_production_read,
  api_v1_production_update,
  api_v1_production_partial_update,
  api_v1_production_delete,
  api_v1_signup_create,
  api_v1_stats_list,
  api_v1_stats_create,
  api_v1_stats_read,
  api_v1_stats_update,
  api_v1_stats_partial_update,
  api_v1_stats_delete,
  api_v1_status_list,
  api_v1_status_create,
  api_v1_status_read,
  api_v1_status_update,
  api_v1_status_partial_update,
  api_v1_status_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
