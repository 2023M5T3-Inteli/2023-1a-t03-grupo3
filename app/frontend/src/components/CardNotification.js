
import x1 from '../assets/x1.svg'
import check from '../assets/check.svg'
import alberto from '../assets/alberto.png'
import axios from "../axios"
import { toast } from 'react-toastify';

export const CardNotification = ({ desc, type, aproval, id }) => {
    return (
        <div className={` border-2 border-black-1000 shadow-md p-4 rounded-xl  bg-[#fafafa] mb-3 
        ${aproval === true ? "border-2 border-green-700" : aproval === false ? "border-2 border-red-500" : ""
            } 
        flex flex-row justify-between 
        
        `}>
            <div className="flex flex-row h-8 justify-center items-center">
                <p className="">{desc}</p>
            </div>

            <div className='h-full flex justify-center items-center'>
                <button>
                    <img
                        className="flex flex-row "
                        src={check}
                        width={24}
                        alt={"v"}
                        height={24}
                    />
                </button>

                <button className='ml-2'>
                    <img
                        className="flex flex-row "
                        src={x1}
                        width={24}
                        alt={"x"}
                        height={24}
                    />
                </button>
            </div>
        </div>
    )
}