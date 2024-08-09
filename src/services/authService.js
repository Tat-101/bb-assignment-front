export const authenticate = async (username, password) => {
  // Simulate checking credentials
  if (username === 'romeo' && password === '1234') {
    // Generate a fake JWT token
    const token = btoa(`token:${new Date().getTime()}`);
    localStorage.setItem('authToken', token);
    return { token, username };
  } else {
    throw new Error('Invalid credentials');
  }
};
