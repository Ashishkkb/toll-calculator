import type { FC } from "react";

const Minus: FC<{
  height: string;
  width: string;
  color: string;
}> = ({ height, width, color }) => {
  let vw = parseInt(width) / 2;
  let vh = parseInt(height) / 2;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${vw} ${vh}`} fill={"none"} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
        fill={color}
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export default Minus;
