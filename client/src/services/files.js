import axios from 'axios'

const API_URL = 'http://localhost:3001/api/file'

const upload = async (data) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  }
  const response = await axios.post(`${API_URL}/convert`, data, config)
  return response.data
}

const destroy = async (path) => {
  const response = await axios.post(`${API_URL}/delete`, {path})
  console.log(response.data.message)
}

const fileService = {
  upload, destroy
}

export default fileService
