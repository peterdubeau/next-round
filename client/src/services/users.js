import api from './api-helper'

export const createAdmin = async (userData) => {
  const res = await api.post('/users/', {user: userData})
  return res.data
}

export const postUser = async (userData) => {
  const res = await api.post('/users/', {user: userData})
  return res.data
}