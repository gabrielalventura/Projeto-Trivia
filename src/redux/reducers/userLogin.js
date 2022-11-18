import { GET_USER } from '../actions/userLogin';

const initialState = {
  userName: '',
  email: '',
};

const userLogin = (state = initialState, action) => {
  switch (action.type) {
  case GET_USER:
    return ({
      userName: action.userName,
      email: action.email,
    });

  default:
    return state;
  }
};

export default userLogin;
