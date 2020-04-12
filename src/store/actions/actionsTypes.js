import { bindActionCreators } from "redux";

export const { IS_LOGIN } = 'IS_LOGIN';

export const isLogin = userID => {
  return {
    type: IS_LOGIN,
    userID: bindActionCreators.userID
  }
}