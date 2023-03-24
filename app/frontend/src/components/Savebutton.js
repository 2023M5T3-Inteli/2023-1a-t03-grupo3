import save_icon from "../assets/save_icon.svg"

export const SaveButton = ({className}) => {
    return (
        <button className={` flex justify-evenly items-center rounded-xl bg-[#4A92FF] text-black w-64 h-12 ${className}`}> Save changes <img alt="" src={save_icon} width={20} height={20}></img> </button>
    )
}