import api from './api-helper'

export const createHooks = async (roomId) => {
  const on = await api.post(`on_hooks/`, (roomId))
  const off = await api.post(`off_hooks/`, (roomId))
  return on.data, off.data
}