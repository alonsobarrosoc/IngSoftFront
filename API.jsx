import axios from 'axios'
let API = ''
let env = import.meta.env.VITE_ENV
if (env === 'dev') {
  API = 'http://localhost:5000/api'
}
else {
  API = 'https://ingsoft-asesorias.herokuapp.com/api'
}



export const getAsesorias = async (body) => {
  let r = await axios.post(`${API}/asesoria/get`, body)
    .then(resp => {
      return resp.data
    })
  return r
}

export const postLogin = async (body) => {
  let r = await axios.post(`${API}/user/login`, body)
    .then(resp => {
      return resp.data
    })
  return r
}

export const findUser = async (body) => {
  let r = await axios.post(`${API}/user/find`, body)
    .then(resp => {
      return resp.data
    })
  return r
}


export const findUserPhoto = async(email) => {
  return `${API}/user/find-photo?email=${email}`
}
