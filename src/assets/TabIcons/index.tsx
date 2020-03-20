import React from 'react';
import Svg, { Path } from "react-native-svg";

const FeedIcon = props => (
  <Svg width="64%" height="64%" viewBox="0 -10 45 64" fill="none" {...props}>
    <Path
      d="M1.43 49.544h14.662V34.168a6.803 6.803 0 0113.607 0v14.434h14.533V27.365L22.831 2.989 1.43 26.266v23.278z"
      stroke="#1D1D1B"
      strokeWidth={4}
      strokeMiterlimit={10}
    />
  </Svg>
);

function FeedIconSelected() {
    return (
      <Svg
        width="64%"
        height="64%"
        fill="none"
        viewBox="0 -10 45 64"
      >
        <Path
          fill="#1D1D1B"
          d="M.038 47.544h14.663V32.168a6.803 6.803 0 0113.607 0v14.434H42.84V25.365L21.439.989.038 24.266v23.278z"
        ></Path>
      </Svg>
    );
  }

function SearchIcon() {
    return (
      <Svg
        width="64%"
        height="64%"
        fill="none"
        viewBox="0 -10 64 64"
      >
        <Path
          fill="#1D1D1B"
          fillRule="evenodd"
          d="M25.483 50.877C11.623 50.877.387 39.64.387 25.78.387 11.92 11.622.683 25.483.683S50.58 11.92 50.58 25.78c0 4.235-1.049 8.224-2.9 11.723l16.308 10.932-1.485 2.216-16.197-10.858c-4.508 6.687-12.152 11.084-20.823 11.084zM3.053 25.78c0 12.388 10.042 22.43 22.43 22.43s22.43-10.042 22.43-22.43S37.872 3.35 25.483 3.35c-12.388 0-22.43 10.042-22.43 22.43z"
          clipRule="evenodd"
          stroke="#1D1D1B"
          strokeWidth={1}
        ></Path>
      </Svg>
    );
  }

function SearchIconSelected() {
    return (
      <Svg
        width="64%"
        height="64%"
        fill="none"
        viewBox="0 -10 64 64"
      >
        <Path
          fill="#1D1D1B"
          fillRule="evenodd"
          d="M27.09 53.21C12.495 53.21.663 41.377.663 26.78.662 12.183 12.494.35 27.09.35c14.598 0 26.43 11.833 26.43 26.43 0 4.03-.902 7.851-2.515 11.27l15.333 10.278-2.97 4.43-15.12-10.135C43.43 49.05 35.746 53.21 27.091 53.21zM5.996 26.78c0 11.651 9.445 21.097 21.096 21.097 11.652 0 21.097-9.446 21.097-21.097 0-11.651-9.445-21.097-21.097-21.097-11.651 0-21.096 9.446-21.096 21.097z"
          clipRule="evenodd"
          stroke="#1D1D1B"
          strokeWidth={3}
        ></Path>
      </Svg>
    );
  }

function NewPostIcon() {
    return (
      <Svg
        width="64%"
        height="64%"
        fill="none"
        viewBox="0 -10 64 64"
      >
        <Path
          fill="#1D1D1B"
          fillRule="evenodd"
          d="M.586 35.32c0 8.56 6.997 15.557 15.554 15.557h23.987c8.56 0 15.556-6.997 15.556-15.556V16.238C55.683 7.68 48.686.684 40.127.684H16.14C7.583.684.586 7.68.586 16.238v19.083zM16.14 48.21c-7.084 0-12.888-5.803-12.888-12.89V16.239C3.252 9.153 9.055 3.35 16.14 3.35h23.987c7.086 0 12.89 5.803 12.89 12.888v19.083c0 7.086-5.804 12.89-12.89 12.89H16.14zm13.327-23.763V14.275h-2.666v10.172H16.628v2.666H26.8v10.172h2.667V27.113H39.64v-2.666H29.467z"
          clipRule="evenodd"
          stroke="#1D1D1B"
          strokeWidth={1}
        ></Path>
      </Svg>
    );
  }

function NewPostIconSelected() {
  return (
    <Svg
    width="64%"
    height="64%"
      fill="none"
      viewBox="0 -10 64 64"
    >
      <Path
        fill="#1D1D1B"
        fillRule="evenodd"
        d="M.586 35.32c0 8.56 6.997 15.557 15.554 15.557h23.987c8.56 0 15.556-6.997 15.556-15.556V16.238C55.683 7.68 48.686.684 40.127.684H16.14C7.583.684.586 7.68.586 16.238v19.083zM16.14 48.21c-7.084 0-12.888-5.803-12.888-12.89V16.239C3.252 9.153 9.055 3.35 16.14 3.35h23.987c7.086 0 12.89 5.803 12.89 12.888v19.083c0 7.086-5.804 12.89-12.89 12.89H16.14zm13.327-23.763V14.275h-2.666v10.172H16.628v2.666H26.8v10.172h2.667V27.113H39.64v-2.666H29.467z"
        clipRule="evenodd"
        stroke="#1D1D1B"
        strokeWidth={2}
        strokeMiterlimit={10}
      ></Path>
    </Svg>
    );
}


function ActivityIcon() {
    return (
      <Svg
        width="64%"
        height="64%"
        fill="none"
        viewBox="0 -10 64 64"
      >
        <Path
          stroke="#1D1D1B"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M56.742 16.053c0-7.767-6.296-14.064-14.064-14.064-6.533 0-12.01 4.462-13.59 10.5-1.58-6.038-7.056-10.5-13.59-10.5-7.768 0-14.064 6.297-14.064 14.064 0 3.82 1.528 7.28 4 9.814l-.003.003.064.064.12.12 22.49 22.49 23.704-21.806c3.015-2.58 4.933-6.405 4.933-10.685z"
        ></Path>
      </Svg>
    );
  }

function ActivityIconSelected() {
    return (
      <Svg 
      width="64%"
      height="64%" 
      viewBox="0 -10 64 64" fill="none">
      <Path
        d="M55.742 15.053c0-7.767-6.296-14.064-14.064-14.064-6.533 0-12.01 4.462-13.59 10.5-1.58-6.038-7.056-10.5-13.59-10.5C6.73.989.434 7.286.434 15.053c0 3.82 1.528 7.28 4 9.814l-.003.003.064.064.12.12 22.49 22.49 23.704-21.806c3.015-2.58 4.933-6.405 4.933-10.685z"
        fill="#E30613"
        />
      </Svg>
    );
  }

function ProfileIcon() {
    return (
      <Svg
        width="64%"
        height="64%"
        fill="none"
        viewBox="0 -10 64 64"
      >
        <Path
          fill="#1D1D1B"
          fillRule="evenodd"
          d="M.738 49.544c0-12.06 9.775-21.835 21.834-21.835H26.3c12.06 0 21.836 9.775 21.836 21.835H45.47c0-10.587-8.583-19.168-19.17-19.168h-3.728c-10.586 0-19.168 8.581-19.168 19.168H.738zm23.698-24.76c-6.655 0-12.05-5.396-12.05-12.05 0-6.656 5.395-12.051 12.05-12.051 6.655 0 12.05 5.395 12.05 12.05 0 6.655-5.395 12.051-12.05 12.051zm-9.382-12.05c0 5.182 4.2 9.383 9.382 9.383a9.384 9.384 0 10-9.382-9.384z"
          clipRule="evenodd"
          stroke="#1D1D1B"
          strokeMiterlimit="10"
          strokeWidth="1"
        ></Path>
      </Svg>
    );
  }

function ProfileIconSelected() {
    return (
      <Svg
      width="64%"
      height="64%"
        fill="none"
        viewBox="0 -10 64 64"
      >
        <Path
          fill="#1D1D1B"
          fillRule="evenodd"
          d="M22.565 30.042c-11.323 0-20.501 9.179-20.501 20.502h44.732c0-11.323-9.18-20.502-20.503-20.502h-3.728zM12.38 13.733c0 6.655 5.394 12.051 12.049 12.051 6.655 0 12.05-5.396 12.05-12.05 0-6.656-5.395-12.051-12.05-12.051-6.655 0-12.05 5.395-12.05 12.05z"
          clipRule="evenodd"
        ></Path>
        <Path
          fill="#1D1D1B"
          d="M2.064 50.544v1.333H.73v-1.333h1.334zm44.732 0h1.333v1.333h-1.333v-1.333zm-46.066 0c0-12.06 9.776-21.835 21.835-21.835v2.667c-10.586 0-19.168 8.581-19.168 19.168H.73zm46.066 1.333H2.064V49.21h44.732v2.667zM26.293 28.709c12.059 0 21.836 9.775 21.836 21.835h-2.667c0-10.587-8.583-19.168-19.17-19.168v-2.667zm-3.728 0h3.728v2.667h-3.728v-2.667zm1.864-1.592c-7.392 0-13.383-5.993-13.383-13.384h2.667c0 5.919 4.797 10.718 10.716 10.718v2.666zm13.384-13.384c0 7.392-5.993 13.384-13.384 13.384v-2.666c5.919 0 10.717-4.799 10.717-10.718h2.667zM24.429.35c7.391 0 13.384 5.993 13.384 13.384h-2.667c0-5.918-4.798-10.717-10.717-10.717V.349zM11.046 13.733C11.046 6.343 17.037.35 24.43.35v2.667c-5.919 0-10.716 4.799-10.716 10.717h-2.667z"
        ></Path>
      </Svg>
    );
  }

export {
    FeedIcon,
    FeedIconSelected,
    SearchIcon,
    SearchIconSelected,
    NewPostIcon,
    NewPostIconSelected,
    ActivityIcon,
    ActivityIconSelected,
    ProfileIcon,
    ProfileIconSelected
}