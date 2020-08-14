import api from './api-helper'

export const createHooks = async (taskId) => {
  const on = await api.post(`on_hooks/`, (taskId))
  const off = await api.post(`off_hooks/`, (taskId))
  return on.data, off.data
}

export const getHooks = async (hookId) => {
  const on = await api.get(`on_hooks/${hookId}`)
  // const off = await api.post(`off_hooks/${hookId}`)
  return on.data
}