export default function ShareIcon({ width = "13", height = "15", ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className="svg replaced-svg"
            {...props}
        >
            <path
                d="M10.833 10.6a2.057 2.057 0 0 0-1.416.58L4.268 8.057a2.565 2.565 0 0 0 .065-.527A2.565 2.565 0 0 0 4.268 7L9.36 3.908a2.111 2.111 0 0 0 1.473.61A2.211 2.211 0 0 0 13 2.259a2.169 2.169 0 1 0-4.333 0 2.564 2.564 0 0 0 .065.527L3.64 5.881a2.111 2.111 0 0 0-1.473-.61A2.211 2.211 0 0 0 0 7.53a2.211 2.211 0 0 0 2.167 2.259 2.111 2.111 0 0 0 1.473-.61l5.142 3.133a2.21 2.21 0 0 0-.058.489 2.111 2.111 0 1 0 2.109-2.2Z"
                fill="currentColor"
            />
        </svg>
    )
}
