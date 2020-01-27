/* eslint-disable no-unused-vars */
import axios from 'axios'

const cacheBuster = `?date=${new Date().toISOString()}`

axios.interceptors.response.use((response) => response, (error) => {
  if (error.status === 422) { return Promise.resolve(error) }
  return Promise.reject(error)
})

export function getJSON(path, params = {}, currentOptions = {}) {
  return axios.get(path + cacheBuster, {params})
}

export function putJSON(path, params = {}, currentOptions = {}) {
  return axios.put(path, params)
}

export function postJSON(path, params = {}, currentOptions = {}) {
  return axios.post(path, params)
}
