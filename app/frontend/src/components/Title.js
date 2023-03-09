export const Title = ({ children, variant = 1, color = "#f1f1f1" }) => {
    let variants = {
        "1": "text-5xl font-semibold",
        "2": "text-4xl font-semibold",
        "3": "text-3xl font-semibold",
        "4": "text-2xl font-semibold",
        "5": "text-xl font-semibold",
        "6": "text-lg font-semibold",
    }

    return (
        <p className={`${variants[variant]} text-[${color}]`}>
            {children}
        </p>
    )
}
