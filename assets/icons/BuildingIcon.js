export default function BuildingIcon(props) {
  return (
    <svg
      width={100}
      height={100}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M38.969 66.64H28.89a3.125 3.125 0 0 0-3.125 3.125V81.25c0 1.726 1.399 3.125 3.125 3.125h10.078a3.125 3.125 0 0 0 3.125-3.125V69.765c0-1.725-1.4-3.125-3.125-3.125Z"
        fill="url(#a)"
        fillOpacity={0.51}
      />
      <path
        d="M39.203 15H29.125A3.125 3.125 0 0 0 26 18.125v11.484c0 1.726 1.4 3.125 3.125 3.125h10.078c1.726 0 3.125-1.399 3.125-3.125V18.125A3.125 3.125 0 0 0 39.203 15Z"
        fill="url(#b)"
        fillOpacity={0.51}
      />
      <path
        d="M39.203 41H29.125A3.125 3.125 0 0 0 26 44.125v11.484c0 1.726 1.4 3.125 3.125 3.125h10.078c1.726 0 3.125-1.399 3.125-3.125V44.125A3.125 3.125 0 0 0 39.203 41Z"
        fill="url(#c)"
        fillOpacity={0.51}
      />
      <path
        d="M93.75 90.625h-7.719V40.781a3.125 3.125 0 0 0-3.125-3.125H75V6.25a3.125 3.125 0 0 0-3.125-3.125H17.094a3.125 3.125 0 0 0-3.125 3.125v84.375H6.25a3.125 3.125 0 1 0 0 6.25h87.5a3.125 3.125 0 0 0 0-6.25ZM47.5 40.781v49.844H20.219V9.375H68.75v28.281H50.625a3.125 3.125 0 0 0-3.125 3.125Z"
        fill="url(#d)"
      />
      <defs>
        <linearGradient
          id="a"
          x1={28.5}
          y1={84}
          x2={32.5}
          y2={77.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#590F87" />
          <stop offset={1} stopColor="#FF0076" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={28.734}
          y1={32.36}
          x2={32.734}
          y2={25.86}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#590F87" />
          <stop offset={1} stopColor="#FF0076" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={28.734}
          y1={58.36}
          x2={32.734}
          y2={51.86}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#590F87" />
          <stop offset={1} stopColor="#FF0076" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={81.5}
          y1={36.5}
          x2={3}
          y2={97}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0076" />
          <stop offset={1} stopColor="#590F87" />
        </linearGradient>
      </defs>
    </svg>
  );
}
