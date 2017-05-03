import axios from 'axios'

export default class HTTP {
  constructor (resource) {
    this.resource = resource
  }

  getRequestConfig (params = {}) {
    return {
      ...params,
      headers: {}
    }
  }

  create (resource, params = {}) {
    return axios.post('/services/' + this.resource, resource, this.getRequestConfig(params))
  }

  all (params = {}) {
    return axios.get('/services/' + this.resource, this.getRequestConfig(params))
  }

  get (resource, params = {}) {
    return axios.get('/services/' + this.resource + '/' + resource.id + '/' + resource.password, this.getRequestConfig(params))
  }

  update (resource, params = {}) {
    return axios.put('/services/' + this.resource, resource, this.getRequestConfig(params))
  }
}
