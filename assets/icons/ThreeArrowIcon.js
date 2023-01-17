export default function ThreeArrowIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={27} height={20} {...props}>
      <defs>
        <linearGradient
          id="a"
          x1={-0.108}
          y1={0.501}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#590f87" />
          <stop offset={1} stopColor="#ff0076" />
        </linearGradient>
      </defs>
      <g transform="translate(-534 -1680)" fill="url(#a)">
        <path
          data-name="Path 84"
          d="m535.142 1685-1.142 1.175 3.71 3.825-3.71 3.825 1.142 1.175 4.858-5Z"
          opacity={0.2}
        />
        <path
          data-name="Path 85"
          d="m541.71 1683-1.71 1.763 5.563 5.737-5.563 5.738 1.71 1.762 7.287-7.5Z"
          opacity={0.5}
        />
        <path
          data-name="Path 86"
          d="m551.283 1680-2.283 2.35 7.417 7.65-7.417 7.65 2.283 2.35 9.717-10Z"
        />
      </g>
    </svg>
  );
}
