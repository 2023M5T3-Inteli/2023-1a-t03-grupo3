export const Calendar = ({ width = 24, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={width}
            fill="none"
            stroke={color || "#000"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-calendar"
            viewBox="0 0 24 24"
        >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
            <path d="M16 2L16 6"></path>
            <path d="M8 2L8 6"></path>
            <path d="M3 10L21 10"></path>
        </svg>
    );
};
