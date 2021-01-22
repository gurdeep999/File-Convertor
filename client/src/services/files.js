import axios from 'axios'

const API_URL = '/api/convert'

const upload = async (data) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  }
  const response = await axios.post(`${API_URL}/file`, data, config)
  return response.data
}

const download = async (fileName) => {
  const config = {
    responseType: 'blob'
  }
  const response = await axios.get(`${API_URL}/download/${fileName}`, config)
  return response.data
}

const fileService = {
  upload, download
}

export default fileService
