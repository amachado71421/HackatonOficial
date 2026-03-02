import axios from 'axios';

// Crea una instancia de Axios con una configuración base
const api = axios.create({
  // IMPORTANTE: Cuando tengas la URL del backend, ponla aquí.
  // Descomenta la siguiente línea y pon la URL correcta.
  // baseURL: 'http://localhost:4000/api', 
  
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;