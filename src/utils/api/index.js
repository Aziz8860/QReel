import axios from 'axios';

export const authToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MSwiRW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiTmFtZSI6InRlc3QiLCJJbWFnZSI6InRlc3QiLCJQaG9uZSI6IjAxOTIzMTIzIiwiQnVkZ2V0IjowLCJPdHAiOjAsIlJvbGUiOiIiLCJpc3MiOiJxcmluIiwiZXhwIjoxNjY5NjI5OTg2fQ.wmCfjmEtEajPIz60Z2F121C33o6sKqq4M5tjs441mAo';

const ApiManager = axios.create({
  baseURL: 'http://147.139.195.203:8080',
  responseType: 'json',
  withCredentials: true,
});

export const user_login = async data => {
  try {
    const result = await ApiManager('/api/v1/auth/user/login', {
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
    const result = await ApiManager('/api/v1/auth/user/register', {
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

// headers: {'Content-Type': 'multipart/form-data'}