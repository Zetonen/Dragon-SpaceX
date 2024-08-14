import styled from "styled-components";

const WrapCircle = styled.div`
  padding: 44px;
  border-radius: 50%;
  background-color: #ffffff1a;
`;
const StyledSvg = styled.svg`
  display: block;
`;

export const PlayIcon = ({ width, height, fill }) => {
  return (
    <WrapCircle>
      <StyledSvg
        width={width}
        height={height}
        viewBox="0 0 89 89"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="ph:play-fill">
          <path
            id="Vector"
            d="M82.5573 44.2826C82.5596 45.2108 82.3216 46.1239 81.8664 46.9329C81.4113 47.7419 80.7546 48.4194 79.9601 48.8995L30.7224 79.0203C29.8923 79.5286 28.9415 79.8061 27.9683 79.8241C26.9951 79.8422 26.0347 79.6001 25.1863 79.1228C24.346 78.653 23.646 77.9678 23.1583 77.1378C22.6706 76.3077 22.4128 75.3627 22.4114 74.4V14.1652C22.4128 13.2025 22.6706 12.2575 23.1583 11.4274C23.646 10.5974 24.346 9.91221 25.1863 9.44238C26.0347 8.96514 26.9951 8.72303 27.9683 8.74105C28.9415 8.75907 29.8923 9.03658 30.7224 9.5449L79.9601 39.6657C80.7546 40.1458 81.4113 40.8232 81.8664 41.6323C82.3216 42.4413 82.5596 43.3543 82.5573 44.2826Z"
          />
        </g>
      </StyledSvg>
    </WrapCircle>
  );
};
