import axios from 'axios'

const urlBackend = 'http://localhost:8882/api/v1'

export default class JamClient {

  getJams() {
    return axios.get(`${urlBackend}/jams/`)
  }

}
