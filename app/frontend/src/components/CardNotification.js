
import x1 from '../assets/x1.svg'
import alberto from '../assets/alberto.png'
import axios from "../axios"
import { toast } from 'react-toastify';

export const CardNotification = ({ desc, type, aproval, id }) => {

    function createPost(isApproved) {
        axios
            .put(`notification/${id}`, {
                aproved: isApproved,
                // receiver:true
            })
            .then((response) => {
                toast.success("Notificação atualizada com sucesso!")
            });
    }

    return (
        <div onClick={createPost(aproval)} className={` border-2 border-black-1000 shadow-md p-4 rounded-xl  bg-[#fafafa] mb-3 
        ${aproval === true ? "border-2 border-green-700" : aproval === false ? "border-2 border-red-500" : ""
            } 
        flex flex-row justify-between 
        
        `}>
            <div className="flex flex-row h-8 justify-center items-center">
                {type === "request" ?
                    <img className="flex mr-2 " src={alberto} width={30} height={16} alt="profile" />
                    : <div className=" w-10 max-h-1"></div>}
                <p className="">{desc}</p>
            </div>
            <img
                className="flex flex-row "
                src={x1}
                width={15}
                alt={"x"}
                height={15}
            />
        </div>
    )
}