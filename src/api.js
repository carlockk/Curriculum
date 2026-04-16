// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Cambia si usas Railway/Vercel
});

export default API;
