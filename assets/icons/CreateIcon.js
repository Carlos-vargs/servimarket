export default function CreateIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      className="svg replaced-svg"
      {...props}
    >
      <path
        d="M3.555 16a.889.889 0 1 1 0-1.778h8a2.668 2.668 0 0 0 2.667-2.667v-8a.889.889 0 1 1 1.778 0v8A4.45 4.45 0 0 1 11.555 16Zm-.889-3.555A2.675 2.675 0 0 1 0 9.778V2.666A2.674 2.674 0 0 1 2.666 0h7.112a2.675 2.675 0 0 1 2.667 2.666v7.112a2.676 2.676 0 0 1-2.667 2.667Zm.889-6.222a.89.89 0 0 0 .89.889h.889V8a.889.889 0 0 0 1.777 0v-.889H8a.889.889 0 0 0 0-1.777h-.889v-.889a.889.889 0 1 0-1.778 0v.889h-.888a.889.889 0 0 0-.89.888Z"
        fill="currentColor"
      />
    </svg>
  );
}
