import * as authService from '../services/auth';
import * as usersService from '../services/users';

const USER_STORAGE_KEY = 'user';
export const TOKEN_STORAGE_KEY = 'token';

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
    return authService.loginUser(data)
    .then((result) => {
      setActiveUser(result.user);
      setActiveToken(result.token);
      return Promise.resolve();
    });
  }

  const activateUser = (data) => {
    return usersService.activate(data)
    .then(user => {
      setActiveUser(user);
    })
    .catch(err => {
      console.log('err', err)
    })
  }

  return {
    login,
    getUser: getActiveUser,
    isAuthenticated,
    activateUser
  }
}

export default useLogin;
