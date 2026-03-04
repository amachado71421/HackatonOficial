import axios from 'axios';

// Crea una instancia de Axios con una configuración base
const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;