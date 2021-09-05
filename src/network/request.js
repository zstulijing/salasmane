import axios from 'axios';
export function request(config) {
  return (axios.create({
    timeout: 5000
  }))(config)
}
