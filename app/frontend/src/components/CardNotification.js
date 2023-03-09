
import x1 from '../assets/x1.svg'
import alberto from '../assets/alberto.png'
export const CardNotification = ({desc,type,aproval}) =>{


    return(
        <div className={` shadow-md p-4 rounded-xl  bg-[#ffffff] mb-3 
        ${
            aproval===true? "border-2 border-green-700" : aproval===false? "border-2 border-red-500": ""
        } 
        flex flex-row justify-between 
        
        `}>
            <div className="flex flex-row h-8 justify-center items-center">
                {
                    type=="request" ? <img className="flex mr-2 "src={alberto} width={30} height={16} /> : <div className=" w-10 max-h-1"></div>
                }
                <p className="">{desc}</p>
            </div>
            <img 
            className="flex flex-row " 
            src={x1} 
            width={15} 
            height={15}
            />
        
        </div>
    )
}