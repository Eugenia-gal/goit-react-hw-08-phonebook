const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth.user.email;

const getIsRefreshingCurrent = state => state.auth.isRefresh;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsRefreshingCurrent,
};
export default authSelectors;
