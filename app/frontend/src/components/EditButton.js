import edit_icon from "../assets/edit_icon.svg"

export const EditButton = ({ className, onClick, profile }) => {
    return (
        <button
            className={`flex justify-evenly items-center rounded-xl bg-black text-white w-64 h-12 ${className}`}
            onClick={onClick}
        >
            Edit {profile ? "Profile" : ""} Informations <img alt="" src={edit_icon} width={20} height={20}></img>
        </button>
    )
}