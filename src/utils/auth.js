import {loginUser} from '../services/users';

const USER_STORAGE_KEY = 'user';
const TOKEN_STORAGE_KEY = 'token';

const useLogin = () => {
  const removeActiveUser = () => localStorage.removeItem(USER_STORAGE_KEY);
  const setActiveUser = (user) => localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  const getActiveUser = () => {
    const user = localStorage.getItem(USER_STORAGE_KEY);
    return user ? JSON.parse(user) : null;
  }

  const removeActiveToken = () => localStorage.removeItem(TOKEN_STORAGE_KEY);
  const setActiveToken = (token) => localStorage.setItem(TOKEN_STORAGE_KEY, token);
  const getActiveToken = () => localStorage.getItem(TOKEN_STORAGE_KEY);

  const isAuthenticated = () => !!getActiveToken();

  const login = (data) => {
    return loginUser(data)
    .then((result) => {
      setActiveUser(result.user);
      setActiveToken(result.token);
      return Promise.resolve();
    });
  }

  return {
    login,
    getUser: getActiveUser,
    isAuthenticated
  }
}

export default useLogin;
