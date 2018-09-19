import axios from 'axios';
export function saveApplication(application) {
  return axios.post('api/path', application);
}
