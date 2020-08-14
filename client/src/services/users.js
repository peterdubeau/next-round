import api from './api-helper'

export const postUser = async (userData) => {
  const res = await api.post('/users/', {user: userData})
  return res.data
}
