export const Arrow = ({ width = 24, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={width}
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke={color || "#4A92FF"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v14M19 12l-7 7-7-7"
            ></path>
        </svg>
    );
};
