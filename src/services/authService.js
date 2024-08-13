import { API_BASE_URL } from './userService';

export const authenticate = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to login');
    }
    const resp = await response.json();
    const token = resp.token;
    localStorage.setItem('authToken', token);
    return { token, email };
  } catch (error) {
    console.error('Error login:', error);
    throw error;
  }
};
