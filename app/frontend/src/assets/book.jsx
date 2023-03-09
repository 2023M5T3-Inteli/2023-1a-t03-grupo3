export const Book = ({ width = 24, color }) => {
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
            className="feather feather-book"
            viewBox="0 0 24 24"
        >
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"></path>
        </svg>
    );
};
