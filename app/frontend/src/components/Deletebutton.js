import trash_icon from "../assets/trash_icon.svg"

export const DeleteButton = ({ className, onClick }) => {
    return (
        <button onClick={onClick} className={`mt-4 flex justify-evenly items-center rounded-xl bg-[#f43737] text-white w-48 h-12 ${className}`}> Delete project <img alt="" src={trash_icon} width={20} height={20}></img></button>
    )
}