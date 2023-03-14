export const Text = ({
    children,
    variant,
    color = "#f1f1f1",
    bold = false
}) => {
    let variants = {
        "sm": "text-sm",
        "base": "text-base",
        "md": "text-md",
        "lg": "text-lg",
        "xl": "text-xl"
    }

    return (
        <p className={`${bold ? "font-semibold" : ""} ${variants[variant]} text-[#${color}]`}>
            {children}
        </p>
    )
}