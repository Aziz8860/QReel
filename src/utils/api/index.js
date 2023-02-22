import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'http://103.37.124.62:8080',
  responseType: 'json',
  withCredentials: true,
});

export const user_login = async data => {
  try {
    const result = await ApiManager('/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};

export const user_register = async data => {
  try {
    const result = await ApiManager('/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};

export const cashier_login = async data => {
  try {
    const result = await ApiManager('/api/v1/auth/admin/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};

export const cashier_register = async data => {
  try {
    const result = await ApiManager('/api/v1/auth/admin/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};
