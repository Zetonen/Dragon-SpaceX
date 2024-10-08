import { useDispatch, useSelector } from "react-redux";
import { selectIsFavoritesRocket } from "../../redux/user/selectors";
import {
  deleteFavoriteRocket,
  sendFavoriteRocket,
} from "../../redux/user/operations";
import { Btn } from "./FavoriteButton.styled";

const FavoriteButton = ({ width, height, rocketId }) => {
  const dispatch = useDispatch();
  const isFavoriteRocket = useSelector((state) =>
    selectIsFavoritesRocket(state, rocketId)
  );

  const handleClick = (e) => {
    e.preventDefault();
    if (isFavoriteRocket) {
      dispatch(deleteFavoriteRocket(rocketId));
      return;
    }
    dispatch(sendFavoriteRocket(rocketId));
  };

  return (
    <Btn onClick={handleClick}>
      {isFavoriteRocket ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#ffffff"
          width={width}
          height={height}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-heart"
          width={width}
          height={height}
        >
          <path d="M20.8 4.6a5.8 5.8 0 0 0-8.2 0L12 5.2l-.6-.6a5.8 5.8 0 0 0-8.2 8.2l8.8 8.8 8.8-8.8a5.8 5.8 0 0 0 0-8.2z" />
        </svg>
      )}
    </Btn>
  );
};

export default FavoriteButton;
