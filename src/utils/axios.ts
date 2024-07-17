import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

import { Access, CatalogsFilters } from "@/types";

const { VITE_API_URL, VITE_API_CLIENT_SECRET, VITE_API_CLIENT_ID } = import.meta
  .env as Record<string, string>;

/**
 * Create an axios instance
 * @type {AxiosInstance}
 * @exports
 * @name api
 * @example
 * import { api } from '@/utils/axios';
 * api.get('/users');
 * api.post('/users', { name: 'John Doe' });
 * // etc...
 */
export const api: AxiosInstance = axios.create({
  baseURL: `${VITE_API_URL}api`,
});

/**
 * Set the token in the header
 */
api.interceptors.request.use(
  async (config) => {
    let token = Cookies.get("token");
    if (!token) {
      token = await getAccessToken();
    }
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Refresh the token if it's expired
 * @returns {Promise<void>}
 */
export async function getAccessToken(): Promise<string> {
  const { data } = await axios<Access>({
    method: "post",
    url: `${VITE_API_URL}oauth/token`,
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: {
      grant_type: "client_credentials",
      scope: "*",
      client_id: VITE_API_CLIENT_ID,
      client_secret: VITE_API_CLIENT_SECRET,
    },
  });
  // Parse the expiration date to days
  const expires = data.expires_in / 86400; // 86400 = 1 day

  Cookies.set("token", data.access_token, { expires });

  return data.access_token;
}

export async function getCatalogsFilters(): Promise<CatalogsFilters> {
  try {
    const response = await api.get("/catalogs/filters");

    return response.data;
  } catch (error) {
    console.error("Error al hacer la petición:", error);
    throw error;
  }
}
