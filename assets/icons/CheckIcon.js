export default function CheckIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            className="svg replaced-svg"
            {...props}
        >
            <path
                d="M18 0H2A2.1 2.1 0 0 0 .01 2.222L0 15.556a2.113 2.113 0 0 0 2 2.222h5v-2.222H2V8.889h18V2.222A2.113 2.113 0 0 0 18 0Zm0 4.444H2V2.222h16Zm-5.07 12.412-2.83-3.145-1.41 1.567L12.93 20 20 12.144l-1.41-1.567Z"
                fill="currentColor"
            />
        </svg>
    );
}
