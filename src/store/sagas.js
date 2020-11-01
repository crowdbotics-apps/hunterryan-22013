import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* api_v1_allourparts_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_allourparts_list, action)
    yield put(actions.api_v1_allourparts_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_allourparts_listFailed(err, action))
  }
}
function* api_v1_allourparts_listWatcher() {
  yield takeEvery(types.API_V1_ALLOURPARTS_LIST, api_v1_allourparts_listWorker)
}
function* api_v1_allourparts_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_allourparts_create, action)
    yield put(actions.api_v1_allourparts_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_allourparts_createFailed(err, action))
  }
}
function* api_v1_allourparts_createWatcher() {
  yield takeEvery(
    types.API_V1_ALLOURPARTS_CREATE,
    api_v1_allourparts_createWorker
  )
}
function* api_v1_allourparts_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_allourparts_read, action)
    yield put(actions.api_v1_allourparts_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_allourparts_readFailed(err, action))
  }
}
function* api_v1_allourparts_readWatcher() {
  yield takeEvery(types.API_V1_ALLOURPARTS_READ, api_v1_allourparts_readWorker)
}
function* api_v1_allourparts_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_allourparts_update, action)
    yield put(actions.api_v1_allourparts_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_allourparts_updateFailed(err, action))
  }
}
function* api_v1_allourparts_updateWatcher() {
  yield takeEvery(
    types.API_V1_ALLOURPARTS_UPDATE,
    api_v1_allourparts_updateWorker
  )
}
function* api_v1_allourparts_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_allourparts_partial_update,
      action
    )
    yield put(
      actions.api_v1_allourparts_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_allourparts_partial_updateFailed(err, action))
  }
}
function* api_v1_allourparts_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_ALLOURPARTS_PARTIAL_UPDATE,
    api_v1_allourparts_partial_updateWorker
  )
}
function* api_v1_allourparts_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_allourparts_delete, action)
    yield put(actions.api_v1_allourparts_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_allourparts_deleteFailed(err, action))
  }
}
function* api_v1_allourparts_deleteWatcher() {
  yield takeEvery(
    types.API_V1_ALLOURPARTS_DELETE,
    api_v1_allourparts_deleteWorker
  )
}
function* api_v1_cdocs_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_cdocs_list, action)
    yield put(actions.api_v1_cdocs_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_cdocs_listFailed(err, action))
  }
}
function* api_v1_cdocs_listWatcher() {
  yield takeEvery(types.API_V1_CDOCS_LIST, api_v1_cdocs_listWorker)
}
function* api_v1_cdocs_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_cdocs_create, action)
    yield put(actions.api_v1_cdocs_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_cdocs_createFailed(err, action))
  }
}
function* api_v1_cdocs_createWatcher() {
  yield takeEvery(types.API_V1_CDOCS_CREATE, api_v1_cdocs_createWorker)
}
function* api_v1_cdocs_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_cdocs_read, action)
    yield put(actions.api_v1_cdocs_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_cdocs_readFailed(err, action))
  }
}
function* api_v1_cdocs_readWatcher() {
  yield takeEvery(types.API_V1_CDOCS_READ, api_v1_cdocs_readWorker)
}
function* api_v1_cdocs_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_cdocs_update, action)
    yield put(actions.api_v1_cdocs_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_cdocs_updateFailed(err, action))
  }
}
function* api_v1_cdocs_updateWatcher() {
  yield takeEvery(types.API_V1_CDOCS_UPDATE, api_v1_cdocs_updateWorker)
}
function* api_v1_cdocs_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_cdocs_partial_update, action)
    yield put(actions.api_v1_cdocs_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_cdocs_partial_updateFailed(err, action))
  }
}
function* api_v1_cdocs_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CDOCS_PARTIAL_UPDATE,
    api_v1_cdocs_partial_updateWorker
  )
}
function* api_v1_cdocs_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_cdocs_delete, action)
    yield put(actions.api_v1_cdocs_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_cdocs_deleteFailed(err, action))
  }
}
function* api_v1_cdocs_deleteWatcher() {
  yield takeEvery(types.API_V1_CDOCS_DELETE, api_v1_cdocs_deleteWorker)
}
function* api_v1_columns_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_columns_list, action)
    yield put(actions.api_v1_columns_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_columns_listFailed(err, action))
  }
}
function* api_v1_columns_listWatcher() {
  yield takeEvery(types.API_V1_COLUMNS_LIST, api_v1_columns_listWorker)
}
function* api_v1_columns_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_columns_create, action)
    yield put(actions.api_v1_columns_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_columns_createFailed(err, action))
  }
}
function* api_v1_columns_createWatcher() {
  yield takeEvery(types.API_V1_COLUMNS_CREATE, api_v1_columns_createWorker)
}
function* api_v1_columns_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_columns_read, action)
    yield put(actions.api_v1_columns_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_columns_readFailed(err, action))
  }
}
function* api_v1_columns_readWatcher() {
  yield takeEvery(types.API_V1_COLUMNS_READ, api_v1_columns_readWorker)
}
function* api_v1_columns_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_columns_update, action)
    yield put(actions.api_v1_columns_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_columns_updateFailed(err, action))
  }
}
function* api_v1_columns_updateWatcher() {
  yield takeEvery(types.API_V1_COLUMNS_UPDATE, api_v1_columns_updateWorker)
}
function* api_v1_columns_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_columns_partial_update, action)
    yield put(actions.api_v1_columns_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_columns_partial_updateFailed(err, action))
  }
}
function* api_v1_columns_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_COLUMNS_PARTIAL_UPDATE,
    api_v1_columns_partial_updateWorker
  )
}
function* api_v1_columns_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_columns_delete, action)
    yield put(actions.api_v1_columns_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_columns_deleteFailed(err, action))
  }
}
function* api_v1_columns_deleteWatcher() {
  yield takeEvery(types.API_V1_COLUMNS_DELETE, api_v1_columns_deleteWorker)
}
function* api_v1_customtext_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_list, action)
    yield put(actions.api_v1_customtext_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_listFailed(err, action))
  }
}
function* api_v1_customtext_listWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_LIST, api_v1_customtext_listWorker)
}
function* api_v1_customtext_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_read, action)
    yield put(actions.api_v1_customtext_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_readFailed(err, action))
  }
}
function* api_v1_customtext_readWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_READ, api_v1_customtext_readWorker)
}
function* api_v1_customtext_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_update, action)
    yield put(actions.api_v1_customtext_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_updateFailed(err, action))
  }
}
function* api_v1_customtext_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_UPDATE,
    api_v1_customtext_updateWorker
  )
}
function* api_v1_customtext_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customtext_partial_update,
      action
    )
    yield put(actions.api_v1_customtext_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_partial_updateFailed(err, action))
  }
}
function* api_v1_customtext_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
    api_v1_customtext_partial_updateWorker
  )
}
function* api_v1_homepage_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_list, action)
    yield put(actions.api_v1_homepage_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_listFailed(err, action))
  }
}
function* api_v1_homepage_listWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_LIST, api_v1_homepage_listWorker)
}
function* api_v1_homepage_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_read, action)
    yield put(actions.api_v1_homepage_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_readFailed(err, action))
  }
}
function* api_v1_homepage_readWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_READ, api_v1_homepage_readWorker)
}
function* api_v1_homepage_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_update, action)
    yield put(actions.api_v1_homepage_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_updateFailed(err, action))
  }
}
function* api_v1_homepage_updateWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_UPDATE, api_v1_homepage_updateWorker)
}
function* api_v1_homepage_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_partial_update, action)
    yield put(actions.api_v1_homepage_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_partial_updateFailed(err, action))
  }
}
function* api_v1_homepage_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
    api_v1_homepage_partial_updateWorker
  )
}
function* api_v1_jdocs_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jdocs_list, action)
    yield put(actions.api_v1_jdocs_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jdocs_listFailed(err, action))
  }
}
function* api_v1_jdocs_listWatcher() {
  yield takeEvery(types.API_V1_JDOCS_LIST, api_v1_jdocs_listWorker)
}
function* api_v1_jdocs_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jdocs_create, action)
    yield put(actions.api_v1_jdocs_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jdocs_createFailed(err, action))
  }
}
function* api_v1_jdocs_createWatcher() {
  yield takeEvery(types.API_V1_JDOCS_CREATE, api_v1_jdocs_createWorker)
}
function* api_v1_jdocs_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jdocs_read, action)
    yield put(actions.api_v1_jdocs_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jdocs_readFailed(err, action))
  }
}
function* api_v1_jdocs_readWatcher() {
  yield takeEvery(types.API_V1_JDOCS_READ, api_v1_jdocs_readWorker)
}
function* api_v1_jdocs_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jdocs_update, action)
    yield put(actions.api_v1_jdocs_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jdocs_updateFailed(err, action))
  }
}
function* api_v1_jdocs_updateWatcher() {
  yield takeEvery(types.API_V1_JDOCS_UPDATE, api_v1_jdocs_updateWorker)
}
function* api_v1_jdocs_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jdocs_partial_update, action)
    yield put(actions.api_v1_jdocs_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jdocs_partial_updateFailed(err, action))
  }
}
function* api_v1_jdocs_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_JDOCS_PARTIAL_UPDATE,
    api_v1_jdocs_partial_updateWorker
  )
}
function* api_v1_jdocs_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jdocs_delete, action)
    yield put(actions.api_v1_jdocs_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jdocs_deleteFailed(err, action))
  }
}
function* api_v1_jdocs_deleteWatcher() {
  yield takeEvery(types.API_V1_JDOCS_DELETE, api_v1_jdocs_deleteWorker)
}
function* api_v1_login_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_login_create, action)
    yield put(actions.api_v1_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_login_createFailed(err, action))
  }
}
function* api_v1_login_createWatcher() {
  yield takeEvery(types.API_V1_LOGIN_CREATE, api_v1_login_createWorker)
}
function* api_v1_noun_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_noun_list, action)
    yield put(actions.api_v1_noun_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_noun_listFailed(err, action))
  }
}
function* api_v1_noun_listWatcher() {
  yield takeEvery(types.API_V1_NOUN_LIST, api_v1_noun_listWorker)
}
function* api_v1_noun_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_noun_create, action)
    yield put(actions.api_v1_noun_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_noun_createFailed(err, action))
  }
}
function* api_v1_noun_createWatcher() {
  yield takeEvery(types.API_V1_NOUN_CREATE, api_v1_noun_createWorker)
}
function* api_v1_noun_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_noun_read, action)
    yield put(actions.api_v1_noun_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_noun_readFailed(err, action))
  }
}
function* api_v1_noun_readWatcher() {
  yield takeEvery(types.API_V1_NOUN_READ, api_v1_noun_readWorker)
}
function* api_v1_noun_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_noun_update, action)
    yield put(actions.api_v1_noun_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_noun_updateFailed(err, action))
  }
}
function* api_v1_noun_updateWatcher() {
  yield takeEvery(types.API_V1_NOUN_UPDATE, api_v1_noun_updateWorker)
}
function* api_v1_noun_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_noun_partial_update, action)
    yield put(actions.api_v1_noun_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_noun_partial_updateFailed(err, action))
  }
}
function* api_v1_noun_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_NOUN_PARTIAL_UPDATE,
    api_v1_noun_partial_updateWorker
  )
}
function* api_v1_noun_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_noun_delete, action)
    yield put(actions.api_v1_noun_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_noun_deleteFailed(err, action))
  }
}
function* api_v1_noun_deleteWatcher() {
  yield takeEvery(types.API_V1_NOUN_DELETE, api_v1_noun_deleteWorker)
}
function* api_v1_production_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_production_list, action)
    yield put(actions.api_v1_production_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_production_listFailed(err, action))
  }
}
function* api_v1_production_listWatcher() {
  yield takeEvery(types.API_V1_PRODUCTION_LIST, api_v1_production_listWorker)
}
function* api_v1_production_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_production_create, action)
    yield put(actions.api_v1_production_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_production_createFailed(err, action))
  }
}
function* api_v1_production_createWatcher() {
  yield takeEvery(
    types.API_V1_PRODUCTION_CREATE,
    api_v1_production_createWorker
  )
}
function* api_v1_production_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_production_read, action)
    yield put(actions.api_v1_production_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_production_readFailed(err, action))
  }
}
function* api_v1_production_readWatcher() {
  yield takeEvery(types.API_V1_PRODUCTION_READ, api_v1_production_readWorker)
}
function* api_v1_production_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_production_update, action)
    yield put(actions.api_v1_production_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_production_updateFailed(err, action))
  }
}
function* api_v1_production_updateWatcher() {
  yield takeEvery(
    types.API_V1_PRODUCTION_UPDATE,
    api_v1_production_updateWorker
  )
}
function* api_v1_production_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_production_partial_update,
      action
    )
    yield put(actions.api_v1_production_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_production_partial_updateFailed(err, action))
  }
}
function* api_v1_production_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_PRODUCTION_PARTIAL_UPDATE,
    api_v1_production_partial_updateWorker
  )
}
function* api_v1_production_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_production_delete, action)
    yield put(actions.api_v1_production_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_production_deleteFailed(err, action))
  }
}
function* api_v1_production_deleteWatcher() {
  yield takeEvery(
    types.API_V1_PRODUCTION_DELETE,
    api_v1_production_deleteWorker
  )
}
function* api_v1_signup_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_signup_create, action)
    yield put(actions.api_v1_signup_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_signup_createFailed(err, action))
  }
}
function* api_v1_signup_createWatcher() {
  yield takeEvery(types.API_V1_SIGNUP_CREATE, api_v1_signup_createWorker)
}
function* api_v1_stats_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_stats_list, action)
    yield put(actions.api_v1_stats_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_stats_listFailed(err, action))
  }
}
function* api_v1_stats_listWatcher() {
  yield takeEvery(types.API_V1_STATS_LIST, api_v1_stats_listWorker)
}
function* api_v1_stats_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_stats_create, action)
    yield put(actions.api_v1_stats_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_stats_createFailed(err, action))
  }
}
function* api_v1_stats_createWatcher() {
  yield takeEvery(types.API_V1_STATS_CREATE, api_v1_stats_createWorker)
}
function* api_v1_stats_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_stats_read, action)
    yield put(actions.api_v1_stats_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_stats_readFailed(err, action))
  }
}
function* api_v1_stats_readWatcher() {
  yield takeEvery(types.API_V1_STATS_READ, api_v1_stats_readWorker)
}
function* api_v1_stats_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_stats_update, action)
    yield put(actions.api_v1_stats_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_stats_updateFailed(err, action))
  }
}
function* api_v1_stats_updateWatcher() {
  yield takeEvery(types.API_V1_STATS_UPDATE, api_v1_stats_updateWorker)
}
function* api_v1_stats_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_stats_partial_update, action)
    yield put(actions.api_v1_stats_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_stats_partial_updateFailed(err, action))
  }
}
function* api_v1_stats_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_STATS_PARTIAL_UPDATE,
    api_v1_stats_partial_updateWorker
  )
}
function* api_v1_stats_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_stats_delete, action)
    yield put(actions.api_v1_stats_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_stats_deleteFailed(err, action))
  }
}
function* api_v1_stats_deleteWatcher() {
  yield takeEvery(types.API_V1_STATS_DELETE, api_v1_stats_deleteWorker)
}
function* api_v1_status_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_status_list, action)
    yield put(actions.api_v1_status_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_status_listFailed(err, action))
  }
}
function* api_v1_status_listWatcher() {
  yield takeEvery(types.API_V1_STATUS_LIST, api_v1_status_listWorker)
}
function* api_v1_status_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_status_create, action)
    yield put(actions.api_v1_status_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_status_createFailed(err, action))
  }
}
function* api_v1_status_createWatcher() {
  yield takeEvery(types.API_V1_STATUS_CREATE, api_v1_status_createWorker)
}
function* api_v1_status_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_status_read, action)
    yield put(actions.api_v1_status_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_status_readFailed(err, action))
  }
}
function* api_v1_status_readWatcher() {
  yield takeEvery(types.API_V1_STATUS_READ, api_v1_status_readWorker)
}
function* api_v1_status_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_status_update, action)
    yield put(actions.api_v1_status_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_status_updateFailed(err, action))
  }
}
function* api_v1_status_updateWatcher() {
  yield takeEvery(types.API_V1_STATUS_UPDATE, api_v1_status_updateWorker)
}
function* api_v1_status_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_status_partial_update, action)
    yield put(actions.api_v1_status_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_status_partial_updateFailed(err, action))
  }
}
function* api_v1_status_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_STATUS_PARTIAL_UPDATE,
    api_v1_status_partial_updateWorker
  )
}
function* api_v1_status_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_status_delete, action)
    yield put(actions.api_v1_status_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_status_deleteFailed(err, action))
  }
}
function* api_v1_status_deleteWatcher() {
  yield takeEvery(types.API_V1_STATUS_DELETE, api_v1_status_deleteWorker)
}
function* rest_auth_login_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_login_create, action)
    yield put(actions.rest_auth_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_login_createFailed(err, action))
  }
}
function* rest_auth_login_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGIN_CREATE, rest_auth_login_createWorker)
}
function* rest_auth_logout_listWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_list, action)
    yield put(actions.rest_auth_logout_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_listFailed(err, action))
  }
}
function* rest_auth_logout_listWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_LIST, rest_auth_logout_listWorker)
}
function* rest_auth_logout_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_create, action)
    yield put(actions.rest_auth_logout_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_createFailed(err, action))
  }
}
function* rest_auth_logout_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_CREATE, rest_auth_logout_createWorker)
}
function* rest_auth_password_change_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_change_create,
      action
    )
    yield put(actions.rest_auth_password_change_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_change_createFailed(err, action))
  }
}
function* rest_auth_password_change_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_CHANGE_CREATE,
    rest_auth_password_change_createWorker
  )
}
function* rest_auth_password_reset_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_create,
      action
    )
    yield put(actions.rest_auth_password_reset_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_createFailed(err, action))
  }
}
function* rest_auth_password_reset_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CREATE,
    rest_auth_password_reset_createWorker
  )
}
function* rest_auth_password_reset_confirm_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_confirm_create,
      action
    )
    yield put(
      actions.rest_auth_password_reset_confirm_createSucceeded(result, action)
    )
  } catch (err) {
    yield put(
      actions.rest_auth_password_reset_confirm_createFailed(err, action)
    )
  }
}
function* rest_auth_password_reset_confirm_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
    rest_auth_password_reset_confirm_createWorker
  )
}
function* rest_auth_registration_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_registration_create, action)
    yield put(actions.rest_auth_registration_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_registration_createFailed(err, action))
  }
}
function* rest_auth_registration_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_CREATE,
    rest_auth_registration_createWorker
  )
}
function* rest_auth_registration_verify_email_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_registration_verify_email_create,
      action
    )
    yield put(
      actions.rest_auth_registration_verify_email_createSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.rest_auth_registration_verify_email_createFailed(err, action)
    )
  }
}
function* rest_auth_registration_verify_email_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
    rest_auth_registration_verify_email_createWorker
  )
}
function* rest_auth_user_readWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_read, action)
    yield put(actions.rest_auth_user_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_readFailed(err, action))
  }
}
function* rest_auth_user_readWatcher() {
  yield takeEvery(types.REST_AUTH_USER_READ, rest_auth_user_readWorker)
}
function* rest_auth_user_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_update, action)
    yield put(actions.rest_auth_user_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_updateFailed(err, action))
  }
}
function* rest_auth_user_updateWatcher() {
  yield takeEvery(types.REST_AUTH_USER_UPDATE, rest_auth_user_updateWorker)
}
function* rest_auth_user_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_partial_update, action)
    yield put(actions.rest_auth_user_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_partial_updateFailed(err, action))
  }
}
function* rest_auth_user_partial_updateWatcher() {
  yield takeEvery(
    types.REST_AUTH_USER_PARTIAL_UPDATE,
    rest_auth_user_partial_updateWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    api_v1_allourparts_listWatcher,
    api_v1_allourparts_createWatcher,
    api_v1_allourparts_readWatcher,
    api_v1_allourparts_updateWatcher,
    api_v1_allourparts_partial_updateWatcher,
    api_v1_allourparts_deleteWatcher,
    api_v1_cdocs_listWatcher,
    api_v1_cdocs_createWatcher,
    api_v1_cdocs_readWatcher,
    api_v1_cdocs_updateWatcher,
    api_v1_cdocs_partial_updateWatcher,
    api_v1_cdocs_deleteWatcher,
    api_v1_columns_listWatcher,
    api_v1_columns_createWatcher,
    api_v1_columns_readWatcher,
    api_v1_columns_updateWatcher,
    api_v1_columns_partial_updateWatcher,
    api_v1_columns_deleteWatcher,
    api_v1_customtext_listWatcher,
    api_v1_customtext_readWatcher,
    api_v1_customtext_updateWatcher,
    api_v1_customtext_partial_updateWatcher,
    api_v1_homepage_listWatcher,
    api_v1_homepage_readWatcher,
    api_v1_homepage_updateWatcher,
    api_v1_homepage_partial_updateWatcher,
    api_v1_jdocs_listWatcher,
    api_v1_jdocs_createWatcher,
    api_v1_jdocs_readWatcher,
    api_v1_jdocs_updateWatcher,
    api_v1_jdocs_partial_updateWatcher,
    api_v1_jdocs_deleteWatcher,
    api_v1_login_createWatcher,
    api_v1_noun_listWatcher,
    api_v1_noun_createWatcher,
    api_v1_noun_readWatcher,
    api_v1_noun_updateWatcher,
    api_v1_noun_partial_updateWatcher,
    api_v1_noun_deleteWatcher,
    api_v1_production_listWatcher,
    api_v1_production_createWatcher,
    api_v1_production_readWatcher,
    api_v1_production_updateWatcher,
    api_v1_production_partial_updateWatcher,
    api_v1_production_deleteWatcher,
    api_v1_signup_createWatcher,
    api_v1_stats_listWatcher,
    api_v1_stats_createWatcher,
    api_v1_stats_readWatcher,
    api_v1_stats_updateWatcher,
    api_v1_stats_partial_updateWatcher,
    api_v1_stats_deleteWatcher,
    api_v1_status_listWatcher,
    api_v1_status_createWatcher,
    api_v1_status_readWatcher,
    api_v1_status_updateWatcher,
    api_v1_status_partial_updateWatcher,
    api_v1_status_deleteWatcher,
    rest_auth_login_createWatcher,
    rest_auth_logout_listWatcher,
    rest_auth_logout_createWatcher,
    rest_auth_password_change_createWatcher,
    rest_auth_password_reset_createWatcher,
    rest_auth_password_reset_confirm_createWatcher,
    rest_auth_registration_createWatcher,
    rest_auth_registration_verify_email_createWatcher,
    rest_auth_user_readWatcher,
    rest_auth_user_updateWatcher,
    rest_auth_user_partial_updateWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
