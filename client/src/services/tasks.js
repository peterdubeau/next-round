import api from './api-helper'

export const readTask = async (code) => {
  const res = await api.get(`tasks/${code}`)
  return res.data
}

export const postTask = async (taskData) => {
  const res = await api.post('/tasks', { task: taskData })
  return res.data
}

export const destroyTask = async (code) => {
  const res = await api.delete(`tasks/${code}`)
  return res
}

