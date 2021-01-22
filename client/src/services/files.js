import axios from 'axios'

const API_URL = 'http://localhost:3001/api/convert'

const upload = async (data) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  }
  const response = await axios.post(`${API_URL}/test`, data, config)
  return response.data
}

const destroy = async (path) => {
  const response = await axios.post(`${API_URL}/delete`, { path })
  console.log(response.data.message)
}

const download = async (fileName) => {
  const config = {
    responseType: 'blob'
  }
  const response = await axios.get(`${API_URL}/download/${fileName}`, config)
  return response.data
}

const fileService = {
  upload, destroy, download
}

export default fileService
