import api from './api-helper'

export const readTask = async (code) => {
  const res = await api.get(`task/${code}`)
  return res.data
}

export const postTask = async (taskData) => {
  const res = await api.post('/tasks/', {task: taskData})
  return res.data
  
}

export const destroyTask = async (code) => {
  const res = await api.delete(`task/${code}`)
  return res
}

