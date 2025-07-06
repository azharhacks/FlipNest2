export const saveLoggedInUser = (user) => {
  localStorage.setItem('loggedInUser', JSON.stringify(user));
};

export const getLoggedInUser = () => {
  return JSON.parse(localStorage.getItem('loggedInUser'));
};

export const logoutUser = () => {
  localStorage.removeItem('loggedInUser');
};
