import api from './api-helper'

export const getTasks = async () => {
  const res = await api.get(`tasks`)
  return res.data
}

export const readTask = async (code) => {
  const res = await api.get(`tasks/${code}`)
  return res.data
} 

export const postTask = async (taskData) => {
  const res = await api.post('/tasks', { task: taskData })
  return res.data
}

export const destroyTask = async (id) => {
  const res = await api.delete(`tasks/${id}/users`)
  return res
}

export const getUsers = async (code) => {
  const res = await api.get(`tasks/${code}/users`)
  return res
}
