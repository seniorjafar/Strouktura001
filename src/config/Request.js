import axios from 'axios';

// Create a custom instance with specific configuration
export const request = axios.create({
  baseURL: 'http://185.217.131.14:8082/api/v1/',

  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json',
  },
});




