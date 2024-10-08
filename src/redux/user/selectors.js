export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export const selectUser = (state) => state.user.user;

export const selectIsRefreshing = (state) => state.user.isRefreshing;

export const selectIsLoadingUsers = (state) => state.user.isLoading;

export const selectFavoritesRockets = (state) =>
  state.user.user.favoriteRockets;

export const selectIsFavoritesRocket = (state, id) =>
  state.user.user.favoriteRockets.includes(id);

export const selectIsVerificatory = (state) => state.user.isVerificatory;
