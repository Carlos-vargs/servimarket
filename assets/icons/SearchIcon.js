export default function SearchIcon({w, h}) {
    return (
        <svg
            width={w}
            height={h}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search"
        >
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.35-4.35" />
        </svg>
    )
}
