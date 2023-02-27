export const Card = ({ title, desc }) => {
    return (
        <div className="border-2 border-red-500 w-full">
            <p>{title}</p>
            <p>{desc}</p>
        </div>
    )
}

