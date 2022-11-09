export const GET_USER = 'GET_USER';

export const getUser = (userName, email) => ({
  type: GET_USER,
  userName,
  email,
});
