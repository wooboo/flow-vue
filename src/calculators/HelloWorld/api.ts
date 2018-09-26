import axios from 'axios';
export function saveApplication(application: object) {
  return axios.post('api/path', application);
}
